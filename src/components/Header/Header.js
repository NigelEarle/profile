import React from 'react';
import {Link} from 'react-router';
import styles from './Header.css';

const HeaderComponent = () => {
  return(
    <div className={styles.container}>
      <span><Link to={'/'}>Hello, I'm Nigel</Link></span>
      <span><Link to={'/work'}>Work</Link></span>
      <span><Link to={'/blog'}>Blog</Link></span>
      <span><Link to={'/contact'}>Contact</Link></span>
    </div>
  );
}

export default HeaderComponent;