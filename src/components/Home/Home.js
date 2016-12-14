import React from 'react';
import styles from './Home.css';
import { HeaderComponent } from './components/../..';

const HomeComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <div className={styles.container}>
        <h1>Nigel Earle</h1>
        <h2>Full Stack Web Developer</h2>
      </div>
    </div>
  );
}

export default HomeComponent;