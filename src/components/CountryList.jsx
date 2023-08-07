import React from 'react';
import { CountryCard } from './CountryCard/CountryCard';

export const CountryList = ({ data }) => {
  return (
    <ul>
      {data.map(country => (
        <CountryCard {...country} key={country.id} />
      ))}
    </ul>
  );
};

// Створити картку для країни
// Замапити їх
// Передати пропсами данні
