import React, { useState } from 'react';

export const FilterForm = ({ handleSetFilter }) => {
  const [value, setValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    handleSetFilter(value);
    setValue('');
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={e => setValue(e.target.value)}
        value={value}
        type="text"
      ></input>
      <button>Filter</button>
    </form>
  );
};
