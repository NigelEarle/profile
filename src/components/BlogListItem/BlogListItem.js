import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ReactMarkdown from 'react-markdown';
import styles from './BlogListItem.css';
import dateFormat from 'dateformat';

const BlogListItem = ({data}) => {
  const descriptionPreview = (description) =>{
    if(description.length > 150){
      // return < 150 at space
      return description.substring(0, 150);
    } else {
      return description;
    }
  };

  return (
    <li className={styles.item}>
      <Link to={`/blog/${data._id}`}>
        <img src={data.coverImage} className={styles.coverImage} alt="image"/>
        <h1 className={styles.title}>{data.title}</h1>
        <ReactMarkdown
          className={styles.description}
          source={descriptionPreview(data.description)}
        />
        <p className={styles.readMore}>Read more...</p>
        <p className={styles.date}>{dateFormat(data.createdAt, 'mmmm dS, yyyy')}</p>
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