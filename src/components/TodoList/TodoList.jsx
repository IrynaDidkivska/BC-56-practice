import React from 'react';
import { styled } from 'styled-components';

export const TodoList = ({
  data,
  onToggle,
  onDeleteSelected,
  onDelete,
  onClear,
}) => {
  return (
    <Wrapper>
      <Title> Hello Everybody!</Title>
      <Button onClick={onDeleteSelected}>Delete Selected</Button>
      <Button onClick={onClear}>Clear</Button>
      <ol>
        {data.map(el => (
          <li key={el.id}>
            <Input
              type="checkbox"
              checked={el.isCompleted}
              onChange={() => onToggle(el.id)}
            />
            {el.task}
            <button
              onClick={() => {
                onDelete(el.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  text-align: center;
`;
export const Input = styled.input`
  margin-right: 5px;
`;

export const Button = styled.button`
  display: block;
  height: auto;
  margin: 0 auto;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  transition: all 300ms linear;
  &:hover {
    scale: 1.1;
    background-color: #649eff;
  }
`;
