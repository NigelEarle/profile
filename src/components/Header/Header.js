import React from 'react';
import {Link} from 'react-router';
import styles from './Header.css';

const HeaderComponent = () => {
  return(
    <div className={styles.container}>
      <Link to={'/'} className={styles.homeLink}>Home Link</Link>
      <div className={styles.linkContainer}>
        <Link to={'/work'} className={styles.link}>Work</Link>
        <Link to={'/blog'} className={styles.link}>Blog</Link>
        <Link to={'/contact'} className={styles.link}>Contact</Link>
      </div>

      <div className={styles.hamburger}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </div>
  );
}

export default HeaderComponent;
