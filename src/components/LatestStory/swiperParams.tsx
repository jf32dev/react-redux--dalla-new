import { SwiperInstance } from 'react-id-swiper';
import cx from 'classnames';
import { Nullable } from '../../type';

export const swiperParams = (appName: Nullable<string> = undefined) => ({
  slidesPerView: 3.068,
  slidesPerColumn: 2,
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
    375: {
      slidesPerView: 1.02,
    },
    575: {
      slidesPerView: 1,
    },
    699: {
      slidesPerView: 1.15,
    },
    1024: {
      slidesPerView: 2.05,
    },
    1500: {
      slidesPerView: 3.05,
    },
  },
});
