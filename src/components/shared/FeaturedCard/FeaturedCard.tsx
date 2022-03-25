import * as React from 'react';
import dayjs from 'dayjs';
import cx from 'classnames';
import styles from './FeaturedCard.module.scss';
import useStoreSelector from '../../../stores';
import { Story } from '../../../services/bridge/type/entities';
import { useOpenEntity } from '../../../hooks/useOpenEntity';
import { ReactComponent as FileIcon } from '../../../assets/images/File.svg';
import { ReactComponent as LikeIcon } from '../../../assets/images/Like.svg';
import { ReactComponent as CommentIcon } from '../../../assets/images/Comment.svg';
import defaultImage from '../../../assets/images/default.png';
import { decodeEntities } from '../../../utils/htmlEntities';

type Props = {
  className?: string;
} & Pick<
  Story,
  | 'id'
  | 'title'
  | 'featuredImage'
  | 'likesCount'
  | 'commentCount'
  | 'fileCount'
  | 'createDate'
  | 'badgeTitle'
>;

const FeaturedCard = ({
  id,
  title,
  featuredImage,
  likesCount,
  commentCount,
  fileCount,
  createDate,
  badgeTitle,
  className,
}: Props) => {
  const [openStory] = useOpenEntity();
  const { getSystemClassName } = useStoreSelector((store) => store.user);
  const handleStoryClick = (storyId: number) => () => {
    openStory('story', storyId);
  };

  return (
    <div
      className={cx(
        styles['story-wrapper'],
        styles[`story-wrapper-${getSystemClassName()}`]
      )}
      onClick={handleStoryClick(id)}
    >
      <div
        className={styles['image-wrapper']}
        style={{
          backgroundImage: `url(${featuredImage || defaultImage})`,
        }}
      />
      <div className={styles['content-wrapper']}>
        <div className={styles['heading-wrapper']}>
          <div className={styles.date}>
            {badgeTitle && <span>{badgeTitle}</span>}
            {createDate && dayjs.unix(createDate).format('MMM D, YYYY')}
          </div>
          <h3>{decodeEntities(title)}</h3>
        </div>
        <div className={styles['icon-wrapper']}>
          <div className={styles['file-wrapper']}>
            {!!fileCount && fileCount > 0 && (
              <>
                <FileIcon />
                <span>{`${fileCount} ${
                  fileCount > 1 ? 'Files' : 'File'
                } `}</span>
              </>
            )}
          </div>
          <div className={styles['like-wrapper']}>
            {!!likesCount && likesCount > 0 && (
              <div>
                <LikeIcon />

                <span>{likesCount}</span>
              </div>
            )}
            {!!commentCount && commentCount > 0 && (
              <div>
                <CommentIcon />

                <span>{commentCount}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
