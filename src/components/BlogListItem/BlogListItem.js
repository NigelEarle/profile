import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const BlogListItem = ({data}) => {
  return (
    <li>
      <img src={data.coverImage} width="150px" height="150px" alt="image"/>
      <Link to={`/blog/${data._id}`}>{data.title}</Link>
      <p>{data.description}</p>
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