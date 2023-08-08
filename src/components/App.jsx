import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../services/api.js';
import { CountryList } from './CountryList.jsx';
import { FilterForm } from './FilterForm/FilterForm.jsx';
//axios.defaults.baseURL = 'https://restcountries.com/v3.1';
//https://restcountries.com/#endpoints
export const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getCountries = async () => {
      try {
        setLoading(true);
        // fetchCountries().then(res => console.log(res));
        const data = await fetchCountries();
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };
    getCountries();
  }, []);

  const getFilterUpdater = () => {
    return countries.filter(country =>
      country.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <div>
      {error && error}
      <FilterForm handleSetFilter={setFilter} />
      <CountryList data={getFilterUpdater()} />
    </div>
  );
};
