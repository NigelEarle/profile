import React, {Component} from 'react';
import styles from './SingleBlog.css';
import axios from 'axios';
import dateFormat from 'dateformat';

import {
  HeaderComponent,
  NotFoundComponent,
} from './components/../..';

export class SingleBlogComponent extends Component {
  constructor(props) {
    super(props);
    this.makeRequest = this.makeRequest.bind(this);
    this.state = {
      data: {},
      isValidRoute: null,
    }
  }

  componentWillMount() {
    this.makeRequest(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.params.id !== nextProps.params.id) {
      this.makeRequest(nextProps);
    }
  }

  makeRequest(props) {
    const {id} = props.params;
    axios.get(`/api/blog/${id}/json`)
    .then(blog => {
      const {data} = blog;
      if(data.hasOwnProperty('_id')){
        this.setState({data, isValidRoute: true});
      } else {
        this.setState({isValidRoute: false})
      }
    })
    .catch(err => console.log('Request Error', err)) 
  }

  showBlogPost(data) {
    const date = dateFormat(data.createdAt, 'mmmm dS, yyyy');
    return (
      <div>
        <HeaderComponent />
        <img src={data.coverImage} width="450px" height="125px" alt="image"/>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <p>{date}</p>
      </div>
    );
  }

  render() {
    const {isValidRoute, data} = this.state;
    return (
      <div>
        {isValidRoute &&
          this.showBlogPost(data)
        }

        {!isValidRoute &&
          <NotFoundComponent />
        }
      </div>
    )
  }
}

export default SingleBlogComponent;