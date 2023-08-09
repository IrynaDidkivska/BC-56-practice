import React from 'react';
import { styled } from 'styled-components';
import { AiFillLike } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
export const CountryCard = ({ capital, flag, name, population }) => {
  return (
    <Card>
      <img src={flag} alt=""></img>
      <p>{name}</p>
      <div style={{ color: 'black', fontSize: '5rem' }}>
        <AiFillLike />
        <ReactI />
        <Redux />
      </div>
    </Card>
  );
};
const ReactI = styled(FaReact)`
  color: blue;
  transition: all 5.5s ease-in-out;
  &:hover {
    color: red;
    transform: rotate(360deg);
  }
`;
const Redux = styled(SiRedux)`
  color: darkviolet;
  font-size: 100px;
  &:hover {
    color: black;
  }
`;
const Card = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  border: 1px solid black;
  box-shadow: 2px 2px 3px 1px gray;
  padding: 10px;
  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
  & img {
    width: 300px;
    display: block;
    margin: 0 auto;
    height: 200px;
  }
`;
