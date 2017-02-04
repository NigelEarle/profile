import React, {Component} from 'react';
import styles from './Blog.css';
import axios from 'axios';

import {
  HeaderComponent,
  BlogListItem,
  FooterComponent,
} from './components/../..';

export class BlogComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: '',
    };
  } 

  componentDidMount() {
    axios.get('/api/blog/json')
    .then(blogs => {
      const {data} = blogs;
      this.setState({data});
    })
    .catch(err => console.log('Request Error', err))
  }

  render() {
    const {data} = this.state;

    return (
      <div>
        <div className={styles.container}>
          <HeaderComponent />
          <ul>
            {data.map((curr, idx) => (
              <BlogListItem data={curr} key={idx}/>
            ))}
          </ul>
          <FooterComponent />
        </div>
      </div>
    );
  }
}

export default BlogComponent;