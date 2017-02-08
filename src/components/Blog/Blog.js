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
          <h1 className={styles.heading}>Blog</h1>
          <hr/>
          {data.length !== 0 ?
            <ul className={styles.list}>
              {data.map((curr, idx) => (
                <BlogListItem data={curr} key={idx}/>
              ))}
            </ul>
            :
            <div>
              <h1>Blog Coming Soon</h1>
            </div>
          }

          <FooterComponent />
        </div>
      </div>
    );
  }
}

export default BlogComponent;