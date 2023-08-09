import { useCountries } from 'hooks/useCountries';
import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [filter, setFilter] = useState('');
  const [region, setRegion] = useState('all');
  const { countries, loading, error } = useCountries(region);

  const getCountriesData = () => {
    return countries.filter(country =>
      country.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const options = ['africa', 'america', 'asia', 'europe', 'oceania'];

  const ContextValue = {
    countries,
    loading,
    error,
    filter,
    region,
    setFilter,
    setRegion,
    getCountriesData,
    options,
  };

  return (
    <MyContext.Provider value={ContextValue}>{children}</MyContext.Provider>
  );
};
