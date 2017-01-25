import React from 'react';
import { HeaderComponent } from './components/../..';

import styles from './About.css';

const AboutComponent = () => (
  <div>
    <HeaderComponent />
    <div className={styles.container}>
      <h1>About</h1>
    </div>
  </div>
);
  

export default AboutComponent;