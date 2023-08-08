import { MyContext } from 'context/myContext';
import React, { useContext } from 'react';
// ['africa','america','asia','europe', 'oceania']
export const SelectRegion = ({ region, setRegion }) => {
  // const options = ['africa', 'america', 'asia', 'europe', 'oceania'];
  const { options, sayHi } = useContext(MyContext);
  const onChange = e => {
    setRegion(e.target.value);
  };
  return (
    <>
      <button onClick={() => sayHi('Olya')}>Say hi</button>
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
