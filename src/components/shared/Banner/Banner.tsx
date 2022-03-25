import * as React from 'react';
import { observer } from 'mobx-react-lite';
import cx from 'classnames';
import styles from './Banner.module.scss';
import { ReactComponent as Logo } from '../../../assets/images/Logo.svg';
import { ActionsContents, EntityType } from '../../../typedef';
import ActionCard from '../ActionCard/ActionCard';
import { useOpenEntity } from '../../../hooks/useOpenEntity';
import { CHANNEL_ID } from '../../../constants/mainData';
import useStoreSelector from '../../../stores';

type TProps = {
  actions: readonly ActionsContents[];
};

const Banner = ({ actions }: TProps) => {
  const { getSystemClassName } = useStoreSelector((store) => store.user);
  const [openEntityType] = useOpenEntity();

  const handleButtonClick = () => {
    openEntityType('channel', CHANNEL_ID);
  };
  const handleActionClick = (
    actionId: number,
    actionType: EntityType
  ) => () => {
    openEntityType(actionType, actionId);
  };
  return (
    <section
      className={cx(styles.banner, styles[`banner-${getSystemClassName()}`])}
    >
      <article className={styles['banner-info']}>
        <figure className={styles['banner-info-content']}>
          <Logo className={styles.logo} />
          <button
            className={styles.button}
            type="button"
            onClick={handleButtonClick}
          >
            <p>HR News</p>
          </button>
        </figure>
      </article>
      <div className={styles['banner-actionbar']}>
        {actions.map((action) => (
          <ActionCard
            key={action.id}
            className={styles['action-item']}
            description={action.title}
            figure={action.img}
            onClick={handleActionClick(action.entityId, action.entityType)}
          />
        ))}
      </div>
    </section>
  );
};

export default observer(Banner);
