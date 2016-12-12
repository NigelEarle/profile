import React from 'react';
import styles from './Home.css';

export class HomeComponent extends React.Component{
  render(){
    return (
      <div className={styles.container}>
        <h1>Home Component!!</h1>
      </div>
    );
  }
}

export default HomeComponent;