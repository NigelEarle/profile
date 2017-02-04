import React from 'react';
import styles from './NotFound.css';

import {PATRICK_KEYBOARD} from './../../assets';

const NotFoundComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 Not Found</h1>
      <h3 className={styles.message}>Sorry! The page your looking for doesn't exist!</h3>
      <img className={styles.patrick} src={PATRICK_KEYBOARD} alt="patrick keyboard"/>
    </div>
  );
}

export default NotFoundComponent;