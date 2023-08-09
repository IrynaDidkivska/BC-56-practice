import { MyContext } from 'context/ContextProvider';
import { CountryCard } from './CountryCard/CountryCard';
import { styled } from 'styled-components';
import { useContext } from 'react';

export const CountryList = () => {
  const { getCountriesData } = useContext(MyContext);
  return (
    <>
      <h1>Total Countries: {getCountriesData().length}</h1>
      <List>
        {getCountriesData().map(country => (
          <CountryCard {...country} key={country.id} />
        ))}
      </List>
    </>
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
