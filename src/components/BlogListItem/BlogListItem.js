import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ReactMarkdown from 'react-markdown';
import styles from './BlogListItem.css';
import dateFormat from 'dateformat';

const BlogListItem = ({data}) => {
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <img src={data.coverImage} className={styles.coverImage} alt="image"/>
        <Link to={`/blog/${data._id}`}>
          <h1 className={styles.title}>{data.title}</h1>
        </Link>
        <ReactMarkdown
          className={styles.description}
          source={data.description}
        />
        <p className={styles.date}>{dateFormat(data.createdAt, 'mmmm dS, yyyy')}</p>
      </div>
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