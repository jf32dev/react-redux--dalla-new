import * as React from 'react';
import Swiper from 'react-id-swiper';
import cx from 'classnames';
import styles from './LatestStory.module.scss';
import { useGetDiverseList } from '../../hooks/useGetDiverseList';
import bridge from '../../services/bridge/bridge';
import { Story } from '../../services/bridge/type/entities';
import Loader from '../shared/Loader/Loader';
import StoryCard from '../shared/StoryCard/StoryCard';
import NoContent from '../shared/NoContent/NoContent';
import CardRow from '../shared/CardRow/CardRow';
import useStoreSelector from '../../stores';
import '../../swiper.scss';
import { swiperParams } from './swiperParams';

const LatestStory = () => {
  const [latestStories, status] = useGetDiverseList(() =>
    bridge.getList<Story>({
      entityName: 'story',
      limit: 20,
    })
  );
  const { appName } = useStoreSelector((store) => store.user);

  return (
    <CardRow className={styles.row} title="Latest Stories">
      {status === 'loading' && <Loader className={styles.loader} />}
      {status === 'succeeded' && (
        <>
          {latestStories.length > 0 && (
            <Swiper {...swiperParams(appName)}>
              {latestStories.map((story) => (
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
          {latestStories.length === 0 && (
            <NoContent message="No Latest story" />
          )}
        </>
      )}
    </CardRow>
  );
};

export default LatestStory;
