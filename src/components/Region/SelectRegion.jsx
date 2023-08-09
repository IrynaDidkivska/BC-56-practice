import { MyContext } from 'context/ContextProvider';
import React, { useContext } from 'react';

export const SelectRegion = () => {
  const { region, setRegion, options, setFilter } = useContext(MyContext);

  const onChange = e => {
    setRegion(e.target.value);
    setFilter('');
  };

  return (
    <>
      <select value={region} onChange={onChange}>
        <option value="all">all</option>
        {options.map(item => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};
