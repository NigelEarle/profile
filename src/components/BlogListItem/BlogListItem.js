import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ReactMarkdown from 'react-markdown';
import styles from './BlogListItem.css';
import dateFormat from 'dateformat';

import {CALENDAR_LOGO} from './../../assets';

const BlogListItem = ({data}) => {

  return (
    <li className={styles.item}>
      <Link to={`/blog/${data._id}`}>
        <div className={styles.imageContainer}>
          <img
            src={data.coverImage}
            className={styles.coverImage}
            alt="image"
          />
        </div>
        <h1 className={styles.title}>{data.title}</h1>
        <img
          src={CALENDAR_LOGO}
          className={styles.calendar}
          alt="calendar logo"
        />
        <p className={styles.date}>{dateFormat(data.createdAt, 'mmmm dS, yyyy')}</p>
        <h2 className={styles.subTitle}>{data.subTitle}</h2>
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