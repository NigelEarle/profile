import React from 'react';
import {Link} from 'react-router';
import styles from './Header.css';

const HeaderComponent = () => {
  return(
    <div className={styles.container}>
      <span><Link to={'/'} className={styles.homeLink}>Hi, I'm Nigel</Link></span>
      <span><Link to={'/work'} className={styles.link}>Work</Link></span>
      <span><Link to={'/blog'} className={styles.link}>Blog</Link></span>
      <span><Link to={'/contact'} className={styles.link}>Contact</Link></span>
    </div>
  );
}

export default HeaderComponent;