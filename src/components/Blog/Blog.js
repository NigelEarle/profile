import React, {Component} from 'react';
import styles from './Blog.css';
import {HeaderComponent} from './components/../..';

export class BlogComponent extends Component{
  render() {
    return (
      <div>
        <HeaderComponent />
        <div>
          <h1>Blog Component</h1>
        </div>
      </div>
    );
  }
}

export default BlogComponent;