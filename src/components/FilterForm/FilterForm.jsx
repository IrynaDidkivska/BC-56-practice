import { SelectRegion } from 'components/Region/SelectRegion';
import { MyContext } from 'context/ContextProvider';
import React, { useContext, useState } from 'react';
import { styled } from 'styled-components';
import { BsFillFilterCircleFill } from 'react-icons/bs';
export const FilterForm = () => {
  const { setFilter } = useContext(MyContext);
  const [value, setValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    setFilter(value);
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
        <button>
          <BsFillFilterCircleFill />
        </button>
      </form>
      <SelectRegion />
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
