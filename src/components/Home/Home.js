import React from 'react';
import styles from './Home.css';
import { HeaderComponent } from './components/../..';

export class HomeComponent extends React.Component{
  render(){
    return (
      <div>
        <HeaderComponent />
        <div className={styles.container}>
          <h1>Home Component!!</h1>
        </div>
      </div>
    );
  }
}

export default HomeComponent;