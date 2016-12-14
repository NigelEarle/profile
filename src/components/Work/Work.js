import React, {Component} from 'react';
import styles from './Work.css'
import {HeaderComponent} from './components/../..';

export class WorkComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <div className={styles.container}>
          <h1>Work Component</h1>
        </div>
      </div>
    );
  }
}

export default WorkComponent;