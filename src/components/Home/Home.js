import React from 'react';
import styles from './Home.css';
import { HeaderComponent } from './components/../..';

const HomeComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <div className={styles.container}>
        <h1>Heading</h1>
        <h2>Sub heading</h2>
      </div>
    </div>
  );
}

export default HomeComponent;