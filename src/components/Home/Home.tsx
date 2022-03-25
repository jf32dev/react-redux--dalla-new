import * as React from 'react';
import AppBar from '../shared/AppBar';
import styles from './Home.module.scss';
import Banner from '../shared/Banner';
import { MAIN_ACTIONS } from '../../constants/mainData';
import { FRONTLINE_ACTIONS } from '../../constants/frontLineData';
import { LENDING_ACTIONS } from '../../constants/lendingData';
import { SALES_ACTIONS } from '../../constants/salesData';
import { TWM_ACTIONS } from '../../constants/twmData';
import { ActionsContents } from '../../typedef';
import FeatureContent from '../FeatureContent';
import LatestStory from '../LatestStory';
import Bookmarks from '../Bookmarks';

const Home = () => {
  let data: readonly ActionsContents[];
  data = MAIN_ACTIONS;
  if (process.env.REACT_APP_FRONTLINE === 'true') {
    data = FRONTLINE_ACTIONS;
  }
  if (process.env.REACT_APP_LENDING === 'true') {
    data = LENDING_ACTIONS;
  }
  if (process.env.REACT_APP_SALES === 'true') {
    data = SALES_ACTIONS;
  }
  if (process.env.REACT_APP_TWM === 'true') {
    data = TWM_ACTIONS;
  }

  return (
    <div className={styles.home}>
      <AppBar />
      <Banner actions={data} />
      <div className={styles.bottom}>
        <FeatureContent />
        <LatestStory />
        <Bookmarks />
      </div>
    </div>
  );
};

export default Home;
