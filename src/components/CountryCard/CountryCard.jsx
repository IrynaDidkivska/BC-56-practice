import React from 'react';

export const CountryCard = ({ capital, flag, name, population }) => {
  return (
    <li>
      <img src={flag} alt=""></img>
      <p>{name}</p>
    </li>
  );
};
