import React from 'react';
import styles from './Home.css';
import {
  HeaderComponent,
  FooterComponent,
} from './components/../..';

const HomeComponent = () => {
  return (
    <div>
      <div className={styles.container}>
        <HeaderComponent />
        <div className={styles.intro}>
          <h1 className={styles.heading}>Nigel Earle</h1>
          <h3 className={styles.subHeading}>Sofware Developer</h3>
          <hr/>
          <p className={styles.description}>
            Software Developer specializing in JavaScript & Node.js. 
            As well as, other server side languages such as Python and Ruby. With some experience and a strong interest in DevOps.
          </p>
        </div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default HomeComponent;