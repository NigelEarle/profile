import React, {Component} from 'react';
import {Link} from 'react-router';
import styles from './Header.css';

export class HeaderComponent extends Component{
  handleMenu() {
  }

  render () {
    return(
      <div className={styles.container}>
        <Link to={'/'} className={styles.homeLink}>Hi, I'm Nigel</Link>
        <div className={styles.linkContainer}>
          <Link to={'/work'} className={styles.link}>Portfolio</Link>
          <Link to={'/blog'} className={styles.link}>Blog</Link>
          <Link to={'/contact'} className={styles.link}>Contact</Link>
        </div>

        <div className={styles.hamburger} onClick={this.handleMenu.bind(this)}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
