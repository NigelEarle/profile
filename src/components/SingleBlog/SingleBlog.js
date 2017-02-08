import React, {Component} from 'react';
import styles from './SingleBlog.css';
import axios from 'axios';
import dateFormat from 'dateformat';
import ReactMarkdown from 'react-markdown';

import {
  HeaderComponent,
  NotFoundComponent,
  FooterComponent,
} from './components/../..';

import {
  CALENDAR_LOGO
} from './../../assets';

export class SingleBlogComponent extends Component {
  constructor(props) {
    super(props);
    this.makeRequest = this.makeRequest.bind(this);
    this.state = {
      data: {},
      isValidRoute: true,
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
        <div className={styles.container}>
          <HeaderComponent />
          <div className={styles.heading}>
            <h1 className={styles.title}>{data.title}</h1>
            <img src={CALENDAR_LOGO} className={styles.calendar} alt="calendar"/>
            <p className={styles.date}>{date}</p>
          </div>
          <hr/>
          <img src={data.coverImage} className={styles.coverImage} alt="image"/>
          <ReactMarkdown
            className={styles.description}
            source={data.description}
          />
          <FooterComponent />
        </div>
      </div>
    );
  }

  render() {
    const {isValidRoute, data} = this.state;
    return (
      <div>
        {isValidRoute ?
          this.showBlogPost(data)
        : <NotFoundComponent />
        }
      </div>
    )
  }
}

export default SingleBlogComponent;