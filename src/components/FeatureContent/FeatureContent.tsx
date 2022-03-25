import * as React from 'react';
import Swiper, { SwiperInstance } from 'react-id-swiper';
import cx from 'classnames';
import { observer } from 'mobx-react-lite';
import styles from './FeatureContent.module.scss';
import { useFeaturedStory } from '../../hooks/useFeaturedStory';
import Loader from '../shared/Loader';
import useStoreSelector from '../../stores';
import '../../swiper.scss';
import FeaturedCard from '../shared/FeaturedCard/FeaturedCard';
import NoContent from '../shared/NoContent/NoContent';

const FeatureContent = () => {
  const [featuredStories, status] = useFeaturedStory();
  const { appName, getSystemClassName } = useStoreSelector(
    (store) => store.user
  );

  const params = {
    slidesPerView: 1.05,
    slidesPerGroup: 1,
    containerClass: cx('swiper-container', 'swiper-container-featured'),
    ...((appName === 'Hub Web App' || appName === 'Hub for Android') && {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    }),

    ...(appName === 'Hub Web App' && {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerGroup: 3,
    }),

    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },

    disableOnInteraction: false,
    shouldSwiperUpdate: true,
    getSwiper: (swiper: SwiperInstance) => {
      if (swiper) {
        setTimeout(() => {
          swiper.update();
        }, 100);
      }
    },
    breakpoints: {
      575: {
        slidesPerView: 1.02,
      },
      699: {
        slidesPerView: 1.15,
      },
      1024: {
        slidesPerView: 2.05,
      },
      3000: {
        slidesPerView: 3.05,
      },
    },
  };

  return (
    <div
      className={cx(styles.feature, styles[`feature-${getSystemClassName()}`])}
    >
      <h2>Featured</h2>
      <div className={styles['featured-wrapper']}>
        {status === 'loading' && (
          <Loader className={styles.loader} size="medium" />
        )}

        {status === 'succeeded' && featuredStories.story.length > 0 && (
          <Swiper {...params}>
            {featuredStories.story.map((item) => (
              <div key={item.id}>
                <FeaturedCard
                  badgeTitle={item.badgeTitle}
                  commentCount={item.commentCount}
                  createDate={item.createDate}
                  featuredImage={item.featuredImage}
                  fileCount={item.fileCount}
                  id={item.id}
                  likesCount={item.likesCount}
                  title={item.title}
                />
              </div>
            ))}
          </Swiper>
        )}

        {status === 'succeeded' && featuredStories.story.length === 0 && (
          <NoContent message="No Featured Story" />
        )}
      </div>
    </div>
  );
};

export default observer(FeatureContent);
