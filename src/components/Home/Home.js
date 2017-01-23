import React from 'react';
import styles from './Home.css';
import { HeaderComponent } from './components/../..';
import DEFAULT_PERSON from './../../assets/images/default-person.png';

const HomeComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <div className={styles.container}>
        Hello
      </div>
    </div>
  );
}

export default HomeComponent;