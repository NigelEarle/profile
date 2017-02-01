import React from 'react';
import styles from './Footer.css';

import {
  DEFAULT_PERSON,
  MAIL_LOGO,
  GITHUB_LOGO,
  LINKEDIN_LOGO,
  TWITTER_LOGO,
  STACKOVERFLOW_LOGO,
} from './../../assets';

const FooterComponent = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.contact}>
        <li>
          <a href="mailto:nigel@earle.io" className={styles.socialLink}>
            <img src={MAIL_LOGO} alt="envelope" className={styles.logo}/>
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
  );
}

export default FooterComponent;