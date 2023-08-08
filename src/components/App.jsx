import React, { useState, useEffect } from 'react';
import { fetchCountries, fetchRegions } from '../services/api.js';
import { CountryList } from './CountryList.jsx';
import { FilterForm } from './FilterForm/FilterForm.jsx';
//axios.defaults.baseURL = 'https://restcountries.com/v3.1';
//https://restcountries.com/#endpoints
export const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('');
  const [region, setRegion] = useState('all');

  const getCountries = async (fetchDataFn, param) => {
    try {
      setLoading(true);
      // fetchCountries().then(res => console.log(res));
      const data = await fetchDataFn(param);
      setCountries(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    region === 'all'
      ? getCountries(fetchCountries)
      : getCountries(fetchRegions, region);
  }, [region]);

  const testFnExample = cb => {
    cb();
  };

  // useEffect(() => {
  //   testFnExample(() => console.log(123));
  //   // testFnExample(() => alert('hello'));
  //   setTimeout(() => {
  //     testFnExample(() => setRegion('europe'));
  //   }, 2000);
  // }, []);

  // useEffect(() => {
  //   if (region !== 'all') {
  //     fetchRegions(region).then(response => console.log(response));
  //   }
  // }, [region]);

  const getFilterUpdater = () => {
    return countries.filter(country =>
      country.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <div>
      {error && error}
      <FilterForm
        handleSetFilter={setFilter}
        region={region}
        setRegion={setRegion}
      />
      <CountryList data={getFilterUpdater()} />
    </div>
  );
};
