import React from 'react';
import styles from './Home.css';
import { HeaderComponent } from './components/../..';

import {
  DEFAULT_PERSON,
  ENVELOPE_LOGO,
  GITHUB_LOGO,
  LINKEDIN_LOGO,
  TWITTER_LOGO,
  STACKOVERFLOW_LOGO,
} from './../../assets';

const HomeComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <div className={styles.container}>
        <div className={styles.intro}>
          <h1 className={styles.heading}>Nigel Earle</h1>
          <h3 className={styles.subHeading}>Sofware Developer</h3>
          <hr/>
          <p className={styles.description}>
            Software Developer specializing in JavaScript & Node.js. 
            As well as, other server side languages such as Python and Ruby. With some experience and strong interest in DevOps.
          </p>
        </div>
        <ul className={styles.contact}>
          <li>
            <a href="mailto:nigel@earle.io" className={styles.socialLink}>
              <img src={ENVELOPE_LOGO} alt="envelope" className={styles.logo}/>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/nigelearle" className={styles.socialLink}>
              <img src={LINKEDIN_LOGO} alt="github logo" className={styles.logo}/>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/NigelEarle" className={styles.socialLink}>
              <img src={GITHUB_LOGO} alt="github logo" className={styles.logo}/>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/NigelEarle" className={styles.socialLink}>
              <img src={TWITTER_LOGO} alt="twitter logo" className={styles.logo}/>
            </a>
          </li>
          <li>
            <a target="_blank" href="http://stackoverflow.com/users/3996221/nigel-earle" className={styles.socialLink}>
              <img src={STACKOVERFLOW_LOGO} alt="github logo" className={styles.logo}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeComponent;