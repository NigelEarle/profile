import React from 'react';
import styles from './Home.css';
import { HeaderComponent } from './components/../..';
import DEFAULT_PERSON from './../../assets/images/default-person.png';

const HomeComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1 className={styles.heading}>Nigel Earle</h1>
          <h2 className={styles.subHeading}>Sofware Developer</h2>
          <p className={styles.description}>
            Software Developer specializing in JavaScript & Node.js. As well as, other server side languages such as Python and Ruby. With some experience and strong intrest in DevOps.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;