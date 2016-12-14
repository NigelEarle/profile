import React from 'react';
import styles from './Work.css'
import {HeaderComponent} from './components/../..';

const WorkComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <div className={styles.container}>
        <h1>Work Component</h1>
      </div>
    </div>
  );
}

export default WorkComponent;