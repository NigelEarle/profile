import React, {Component} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames/bind';
import styles from './Header.css';

import {NE_LOGO} from './../../assets';

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
      {open}
    );

    return(
      <div className={styles.container}>
        <Link to={'/'} className={styles.homeLink}>
          <img src={NE_LOGO} alt="logo" className={styles.logo}/>
        </Link>
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
            <li className={styles.routeLink}><Link to={'/'} className={styles.menuLink}>Home</Link></li>
            <li className={styles.routeLink}><Link to={'/about'} className={styles.menuLink}>About</Link></li>
            <li className={styles.routeLink}><Link to={'/work'} className={styles.menuLink}>Work</Link></li>
            <li className={styles.routeLink}><Link to={'/blog'} className={styles.menuLink}>Blog</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
