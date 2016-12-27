import React from 'react';
import styles from './Home.css';
import { HeaderComponent } from './components/../..';

const HomeComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1 className={styles.heading}>Heading</h1>
          <h2 className={styles.heading}>Sub heading</h2>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;