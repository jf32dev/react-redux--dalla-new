import * as React from 'react';
import Swiper from 'react-id-swiper';
import cx from 'classnames';
import styles from './Bookmarks.module.scss';
import { useGetDiverseList } from '../../hooks/useGetDiverseList';
import bridge from '../../services/bridge/bridge';
import { Story } from '../../services/bridge/type/entities';
import Loader from '../shared/Loader/Loader';
import StoryCard from '../shared/StoryCard/StoryCard';
import NoContent from '../shared/NoContent/NoContent';
import CardRow from '../shared/CardRow/CardRow';
import useStoreSelector from '../../stores';
import '../../swiper.scss';
import { swiperParams } from '../LatestStory/swiperParams';

const Bookmarks = () => {
  const [bookmarks, status] = useGetDiverseList(() =>
    bridge.getBookmarkList<Story>({
      entityName: 'story',
      limit: 20,
    })
  );
  const { appName } = useStoreSelector((store) => store.user);
  return (
    <CardRow className={styles.row} title="Bookmarks">
      {status === 'loading' && <Loader className={styles.loader} />}
      {status === 'succeeded' && (
        <>
          {bookmarks.length > 0 && (
            <Swiper {...swiperParams(appName)}>
              {bookmarks.map((story) => (
                <div key={story.id} className={styles['story-item']}>
                  <StoryCard
                    commentCount={story.commentCount}
                    createDate={story.createDate}
                    fileCount={story.fileCount}
                    id={story.id}
                    likesCount={story.likesCount}
                    thumbnail={story.thumbnail}
                    title={story.title}
                  />
                </div>
              ))}
            </Swiper>
          )}
          {bookmarks.length === 0 && <NoContent message="No Bookmarks" />}
        </>
      )}
    </CardRow>
  );
};

export default Bookmarks;
