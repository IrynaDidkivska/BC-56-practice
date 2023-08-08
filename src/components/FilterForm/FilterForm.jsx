import { SelectRegion } from 'components/Region/SelectRegion';
import React, { useState } from 'react';
import { styled } from 'styled-components';

export const FilterForm = ({ handleSetFilter, region, setRegion }) => {
  const [value, setValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    handleSetFilter(value);
    setValue('');
  };
  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <input
          onChange={e => setValue(e.target.value)}
          value={value}
          type="text"
        ></input>
        <button>Filter</button>
      </form>
      <SelectRegion region={region} setRegion={setRegion} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 20px 20px;
  background-color: teal;
  font-size: 1.5rem;
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;
