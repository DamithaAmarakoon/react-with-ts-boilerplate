import * as React from 'react';
import styles from './Dashboard.module.scss';
import logo from '../../assets/logos/logo.svg';

const Dashboard = (): JSX.Element => {
  return (
    <div className={styles.main_wrapper}>
      <img src={logo} className={styles.app_logo} alt='logo' />
    </div>
  );
};

export default Dashboard;
