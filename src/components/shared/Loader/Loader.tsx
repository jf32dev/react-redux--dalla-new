import * as React from 'react';
import cx from 'classnames';
import styles from './Loader.module.scss';

type TLoader = {
  size?: 'large' | 'medium' | 'small' | 'xsmall';
  className?: string;
};

const Loader = ({ size = 'medium', className }: TLoader) => (
  <div className={cx(styles.loader, className)}>
    <div className={cx(styles.spinner, styles[size], styles.default)} />
  </div>
);

export default Loader;
