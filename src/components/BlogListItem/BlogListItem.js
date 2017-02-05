import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ReactMarkdown from 'react-markdown';
import styles from './BlogListItem.css';

const BlogListItem = ({data}) => {
  return (
    <li className={styles.item}>
      <img src={data.coverImage} className={styles.coverImage} alt="image"/>
      <Link to={`/blog/${data._id}`}>
        <h1 className={styles.title}>{data.title}</h1>
      </Link>
      <ReactMarkdown
        className={styles.description}
        source={data.description}
      />
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