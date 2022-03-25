import * as React from 'react';
import cx from 'classnames';

import styles from './Card.module.scss';
import CardThumbnail from './CardThumbnail';
import CardBody from './CardBody';

type TProps = {
  className?: string;
};

const Card = ({ className, children }: React.PropsWithChildren<TProps>) => {
  const thumbnail = React.Children.toArray(children).find((child) => {
    if (React.isValidElement(child)) {
      const { displayName } = (child as React.ReactElement).type as any;
      if (displayName === 'CardThumbnail') {
        return child;
      }
    }
    return null;
  });

  const body = React.Children.toArray(children).find((child) => {
    if (React.isValidElement(child)) {
      const { displayName } = (child as React.ReactElement).type as any;
      if (displayName === 'CardBody') {
        return child;
      }
    }
    return null;
  });

  return (
    <div className={cx(styles.card, className)}>
      {thumbnail}
      {body}
    </div>
  );
};

Card.Thumbnail = CardThumbnail;
Card.Body = CardBody;
export default Card;
