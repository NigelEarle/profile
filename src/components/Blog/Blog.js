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
    };
  } 

  componentWillMount() {
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
          {data.length !== 0 ?
            <div>
              <h1 className={styles.heading}>Blog</h1>
              <hr className={styles.line}/>
              <ul className={styles.list}>
                {data.map((curr, idx) => (
                  <BlogListItem data={curr} key={idx}/>
                ))}
              </ul>
              <FooterComponent />
            </div>
            :
            <div>
              <h1 className={styles.title}>Coming Soon!</h1>
              <p className={styles.checkBack}>Check back soon for project updates</p>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default BlogComponent;
