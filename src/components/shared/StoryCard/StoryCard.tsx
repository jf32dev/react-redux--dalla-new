import * as React from 'react';
import dayjs from 'dayjs';
import cx from 'classnames';
import styles from './StoryCard.module.scss';
import useStoreSelector from '../../../stores';
import { ReactComponent as FileIcon } from '../../../assets/images/File.svg';
import { ReactComponent as LikeIcon } from '../../../assets/images/Like.svg';
import { ReactComponent as CommentIcon } from '../../../assets/images/Comment.svg';
import { useOpenEntity } from '../../../hooks/useOpenEntity';
import { Story } from '../../../services/bridge/type/entities';
import defaultImage from '../../../assets/images/default.png';
import { decodeEntities } from '../../../utils/htmlEntities';

const StoryCard = ({
  id,
  title,
  thumbnail,
  createDate,
  fileCount,
  commentCount,
  likesCount,
}: Pick<
  Story,
  | 'id'
  | 'title'
  | 'thumbnail'
  | 'createDate'
  | 'fileCount'
  | 'commentCount'
  | 'likesCount'
>) => {
  const { getSystemClassName } = useStoreSelector((store) => store.user);
  const [openStory] = useOpenEntity();

  const handleStoryClick = (storyId: number) => () => {
    openStory('story', storyId);
  };

  return (
    <div
      className={cx(
        styles['story-card'],
        styles[`story-card-${getSystemClassName()}`]
      )}
      onClick={handleStoryClick(id)}
    >
      <div className={styles.image}>
        <img alt={title} src={thumbnail || defaultImage} />
      </div>

      <div className={styles.content}>
        <span>{dayjs.unix(createDate).format('MMM DD, YYYY')}</span>
        <div className={styles.description}>
          <p>{decodeEntities(title)}</p>
        </div>
        <div className={styles['icon-wrapper']}>
          <div className={styles.file}>
            {!!fileCount && fileCount > 0 && (
              <>
                <FileIcon />
                <span>
                  {fileCount}
                  {fileCount === 1 ? ' File' : ' Files'}
                </span>
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

export default StoryCard;
