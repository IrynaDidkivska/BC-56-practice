import React from 'react';
import PropTypes from 'prop-types';
export const TodoList = ({ name, chls }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{chls + 2}</h2>
    </div>
  );
};

TodoList.propTypes = {
  name: PropTypes.string,
  chls: PropTypes.number.isRequired,
};
