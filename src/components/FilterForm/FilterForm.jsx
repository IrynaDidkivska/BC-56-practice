import React, { useState } from 'react';
import { styled } from 'styled-components';

export const FilterForm = ({ handleSetFilter }) => {
  const [value, setValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    handleSetFilter(value);
    setValue('');
  };
  return (
    <Form onSubmit={onSubmit}>
      <input
        onChange={e => setValue(e.target.value)}
        value={value}
        type="text"
      ></input>
      <button>Filter</button>
    </Form>
  );
};
const Form = styled.form`
  padding: 20px 20px;
  background-color: teal;
  font-size: 1.5rem;
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;
