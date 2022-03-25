import { observer } from 'mobx-react-lite';
import * as React from 'react';
import cx from 'classnames';
import dayjs from 'dayjs';
import useStoreSelector from '../../../stores';
import Owl from '../../../assets/images/owl.png';
import styles from './AppBar.module.scss';
import { useOpenEntity } from '../../../hooks/useOpenEntity';

const AppBar = observer(() => {
  const {
    getLoginUser,
    loginUser,
    editProfile,
    getSystemClassName,
    getStory,
    story,
  } = useStoreSelector((store) => store.user);
  const [openEntity] = useOpenEntity();

  const editUserProfile = () => {
    editProfile();
  };
  const handleLogoClick = () => {
    if (story && story.files) openEntity('file', story.files[0].id);
  };

  React.useEffect(() => {
    getLoginUser();
    getStory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav
      className={cx(styles.navbar, styles[`navbar-${getSystemClassName()}`])}
    >
      <div className={styles['navbar-welcome']} onClick={editUserProfile}>
        {loginUser && (
          <div className={styles.left}>
            {loginUser.thumbnail ? (
              <figure>
                <img alt={loginUser.firstName} src={loginUser.thumbnail} />
              </figure>
            ) : (
              <div className={styles.userplaceholder}>
                <span>
                  {`${loginUser.firstName.substr(
                    0,
                    1
                  )} ${loginUser.lastName.substr(0, 1)}`}
                </span>
              </div>
            )}
          </div>
        )}
        <div className={styles['navbar-welcome-text']}>
          {loginUser && loginUser.firstName
            ? `Howdy, ${loginUser.firstName}.`
            : 'Howdy'}
          <p className={styles['navbar-welcome-text-date']}>
            {dayjs().format('D MMM YYYY')}
          </p>
        </div>
      </div>
      <div className={styles.icon} onClick={handleLogoClick}>
        <img alt="logo" className={styles.logo} src={Owl} />
        <p>About</p>
      </div>
    </nav>
  );
});

export default AppBar;
