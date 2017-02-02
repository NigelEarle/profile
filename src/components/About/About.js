import React from 'react';
import styles from './About.css';
import {HK_PANO} from './../../assets';
import {
  HeaderComponent,
  FooterComponent,
} from './components/../..';

const AboutComponent = () => (
  <div>
    <div className={styles.container}>
      <HeaderComponent />
      <h1 className={styles.title}>About Myself</h1>
      <hr/>
      <img src={HK_PANO} alt="hong kong" className={styles.pano}/>
      <p className={styles.about}>
        Hello, I'm Nigel Earle and I live in Kailua, HI.
        I'm a software developer with a focus on JavaScript and Node.js.
        I began my development career several years ago, taking a full stack 
        web development course in Hong Kong, China.
        Building stable, clean and performant software is true passion of mine. 
        Currently, I work as software development subcontractor and an Assistant Instrutor at <a target="_blank" className={styles.link} href="http://www.devleague.com/">DevLeague</a>, a full-stack JavaScript development boot-camp.
      </p>
      <p>
        Some technologies that I enjoy and use professionally are...
      </p>
      <ul className={styles.technologies}>
        <li className={styles.list}>
          <a target="_blank" className={styles.link} href="https://facebook.github.io/react/">React.js</a>
        </li>
        <li className={styles.list}>
          <a target="_blank" className={styles.link} href="http://redux.js.org/">Redux</a>
        </li>
        <li className={styles.list}>
          <a target="_blank" className={styles.link} href="https://webpack.github.io/">Webpack</a>
        </li>
        <li className={styles.list}>
          <a target="_blank" className={styles.link} href="https://angularjs.org/">AngularJS</a>
        </li>
      </ul>
      <ul className={styles.technologies}>
        <li className={styles.list}>
          <a target="_blank" className={styles.link} href="https://nodejs.org/en/">Node.js</a>
        </li>
        <li className={styles.list}>
          <a target="_blank" className={styles.link} href="http://expressjs.com/">ExpressJS</a>
        </li>
        <li className={styles.list}>
          <a target="_blank" className={styles.link} href="https://www.postgresql.org/">PostgreSQL</a>
        </li>
        <li className={styles.list}>
          <a target="_blank" className={styles.link} href="https://www.mongodb.com/">MongoDB</a>
        </li>
      </ul>
      <p>
        Some technologies that I'm tinkering with or have a goal to learn this year are...
      </p>
      <ul className={styles.technologies}>
        <li className={styles.list}>
          <a target="_blank" className={styles.link} href="https://golang.org/">Golang</a>
        </li>
        <li className={styles.list}>
          <a target="_blank" className={styles.link} href="http://elixir-lang.org/">Elixir</a>
        </li>
        <li className={styles.list}>
          <a target="_blank" className={styles.link} href="http://elm-lang.org/">Elm</a>
        </li>
        <li className={styles.list}>
          <a target="_blank" className={styles.link} href="https://en.wikipedia.org/wiki/Machine_learning">Machine Learning</a>
        </li>
        <li className={styles.list}>
          <a target="_blank" className={styles.link} href="https://en.wikipedia.org/wiki/Functional_programming">Functional Programming</a>
        </li>
      </ul>
      <FooterComponent />
    </div>
  </div>
);
  

export default AboutComponent;