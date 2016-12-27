import React from 'react';
import styles from './Home.css';
import { HeaderComponent } from './components/../..';

const HomeComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1 className={styles.heading}>Nigel Earle</h1>
          <h2 className={styles.heading}>Software Developer</h2>
          <p>
            I'm a Kailua, Hawaii based JavaScript Software Developer. I make web applications using React, Redux and Node.js. Also, some experience using Ruby and Python.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;