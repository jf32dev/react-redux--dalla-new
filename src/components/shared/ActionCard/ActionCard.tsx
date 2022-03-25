import * as React from 'react';
import cx from 'classnames';
import { observer } from 'mobx-react-lite';
import styles from './ActionCard.module.scss';
import useStoreSelector from '../../../stores';

type Props = {
  figure: string;
  description: string;
  onClick: () => void;
  className?: string;
  imageClassName?: string;
};

const ActionCard = ({
  className,
  imageClassName,
  description,
  figure,
  onClick,
}: Props) => {
  const { getSystemClassName } = useStoreSelector((store) => store.user);

  return (
    <div
      className={cx(
        styles.card,
        className,
        styles[`card-${getSystemClassName()}`]
      )}
      onClick={onClick}
    >
      <div className={styles.figure}>
        <img alt="" className={imageClassName} src={figure} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default observer(ActionCard);
