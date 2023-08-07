import React from 'react';
import { CountryCard } from './CountryCard/CountryCard';
import { styled } from 'styled-components';

export const CountryList = ({ data }) => {
  return (
    <List>
      {data.map(country => (
        <CountryCard {...country} key={country.id} />
      ))}
    </List>
  );
};
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

// Створити картку для країни
// Замапити їх
// Передати пропсами данні
