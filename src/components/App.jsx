import React, { useContext } from 'react';
import { CountryList } from './CountryList.jsx';
import { FilterForm } from './FilterForm/FilterForm.jsx';
import { MyContext } from 'context/ContextProvider.jsx';
import { Loader } from './Loader/Loader.jsx';

export const App = () => {
  const { error, loading } = useContext(MyContext);

  return (
    <div>
      {error && error}
      <FilterForm />
      {loading ? <Loader /> : <CountryList />}
    </div>
  );
};
