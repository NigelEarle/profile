import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ReactMarkdown from 'react-markdown';
import styles from './BlogListItem.css';
import dateFormat from 'dateformat';

import {CALENDAR_LOGO} from './../../assets';

const BlogListItem = ({data}) => {
  const descriptionPreview = (description) => {
    if(description.length > 110){
      let trimmed = description.substring(0, 110);
      if(trimmed.charAt(trimmed.length - 1) === ' ') {
        return trimmed;
      }
      return findEndingSpace(trimmed);
    } else {
      if (description.charAt(description.lenth - 1) === ' ') {
        return description;
      } else {
        return findEndingSpace(description);
      }
    }
  };

  const findEndingSpace = (string) => {
    for(let i = string.length; i > 0; i--) {
      if(string[i] === ' ') {
        return string.substring(0, i);
      }
    }
  }

  return (
    <li className={styles.item}>
      <Link to={`/blog/${data._id}`}>
        <img src={data.coverImage} className={styles.coverImage} alt="image"/>
        <h1 className={styles.title}>{data.title}</h1>
        <img src={CALENDAR_LOGO} className={styles.calendar} alt="calendar logo"/>
        <p className={styles.date}>{dateFormat(data.createdAt, 'mmmm dS, yyyy')}</p>
        <ReactMarkdown
          className={styles.description}
          source={descriptionPreview(data.description)}
        />
        <p className={styles.readMore}>Read more...</p>
       </Link>
    </li>
  );
};

BlogListItem.defaultProps = {
  data: {
    id: '',
    title: '',
    coverImage: '',
    description: '',
    createdAt: '',
    updatedAt: '',
  },
};

BlogListItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    coverImage: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }).isRequired,
};

export default BlogListItem;