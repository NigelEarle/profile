import React, {Component} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames/bind';
import styles from './Header.css';

const cx = classNames.bind(styles);

export class HeaderComponent extends Component{
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      open: false,
    }
  }
  toggleMenu(e) {
    e.preventDefault();
    this.setState({open: !this.state.open});
  }

  render () {
    const {open} = this.state;
    const classes = cx(
      'bar',
      {
        open,
      }
    );

    return(
      <div className={styles.container}>
        <Link to={'/'} className={styles.homeLink}>Home</Link>
        <div className={styles.linkContainer}>
          <Link to={'/about'} className={styles.link}>About</Link>
          <Link to={'/work'} className={styles.link}>Work</Link>
          <Link to={'/blog'} className={styles.link}>Blog</Link>
        </div>


        <div className={styles.menu} onClick={this.toggleMenu}>
          <span className={classes}></span>
          <span className={classes}></span>
          <span className={classes}></span>

          <ul className={styles.menuLinks}>
            <li><Link to={'/'} className={styles.menuLink}>Home</Link></li>
            <li><Link to={'/about'} className={styles.menuLink}>About</Link></li>
            <li><Link to={'/work'} className={styles.menuLink}>Work</Link></li>
            <li><Link to={'/blog'} className={styles.menuLink}>Blog</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
