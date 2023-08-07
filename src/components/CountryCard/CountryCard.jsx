import React from 'react';
import { styled } from 'styled-components';

export const CountryCard = ({ capital, flag, name, population }) => {
  return (
    <Card>
      <img src={flag} alt=""></img>
      <p>{name}</p>
    </Card>
  );
};
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
