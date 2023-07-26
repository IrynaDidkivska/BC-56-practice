import React from 'react';
import { formatDateToNow } from 'services/formatDate';

export const BlogCard = props => {
  const { name, postedAt, poster, tag, title, description, avatar } =
    props.article;

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
