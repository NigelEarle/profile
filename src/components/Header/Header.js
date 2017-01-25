import React, {Component} from 'react';
import {Link} from 'react-router';
import styles from './Header.css';

export class HeaderComponent extends Component{
  handleMenu(e) {
    e.preventDefault();
    // toggle off-screen menu on small screens
  }

  render () {
    return(
      <div className={styles.container}>
        <Link to={'/'} className={styles.homeLink}>Home</Link>
        <div className={styles.linkContainer}>
          <Link to={'/about'} className={styles.link}>About</Link>
          <Link to={'/work'} className={styles.link}>Work</Link>
          <Link to={'/blog'} className={styles.link}>Blog</Link>
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
