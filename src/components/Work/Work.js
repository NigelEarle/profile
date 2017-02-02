import React from 'react';
import styles from './Work.css'
import {HeaderComponent} from './components/../..';

const WorkComponent = () => {
  return (
    <div>
      <div className={styles.container}>
        <HeaderComponent />
        <h1 className={styles.title}>Coming Soon!</h1>
        <p>Check back soon for project updates</p>
      </div>
    </div>
  );
}

export default WorkComponent;