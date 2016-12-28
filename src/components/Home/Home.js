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
          <img src={DEFAULT_PERSON} alt="default person" className={styles.profileImage}/>
          <h1 className={styles.heading}>Nigel Earle</h1>
          <h2 className={styles.heading}>Software Developer</h2>
          <p>
            I am a JavaScript Software Developer based in Kailua, Hawaii. I make web applications using React, Redux and Node.js. Also, some experience with Ruby and Python.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;