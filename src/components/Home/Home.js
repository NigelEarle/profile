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
          <h3 className={styles.subHeading}>Software Developer</h3>
          <p className={styles.description}>
            JavaScript Software Developer based in Kailua, Hawaii. I enjoy making web applications using React and Node.js. //Ruby and Python
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;