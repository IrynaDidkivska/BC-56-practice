import React from 'react';
import { formatDateToNow } from 'services/formatDate';
import PropTypes from 'prop-types';
export const BlogCard = props => {
  const { name, postedAt, poster, tag, title, description, avatar, bio } =
    props;
  const { name: name1, age } = bio;
  return (
    <div>
      <div>
        <img src={poster} alt={title} />
      </div>
      <div>
        <h2>{tag}</h2>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <div>
          <img src={avatar} alt="Avatar" />
          <div>
            <p>{name}</p>
            <p>{formatDateToNow(postedAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  name: PropTypes.string,
  postedAt: PropTypes.string,
  poster: PropTypes.string,
  tag: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  avatar: PropTypes.string,
  bio: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
};
