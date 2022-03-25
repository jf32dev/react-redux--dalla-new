import * as React from 'react';
import cx from 'classnames';
import styles from './CardRow.module.scss';
import useStoreSelector from '../../../stores';

type TProps = {
  title: string;
  className?: string;
};

const CardRow = ({
  title,
  children,
  className,
}: React.PropsWithChildren<TProps>) => {
  const { getSystemClassName } = useStoreSelector((store) => store.user);
  return (
    <div
      className={cx(styles.wrapper, styles[`wrapper-${getSystemClassName()}`])}
    >
      <h3 className={styles.title}>{title}</h3>
      <div className={cx(styles.row, className)}>{children}</div>
    </div>
  );
};

export default CardRow;
