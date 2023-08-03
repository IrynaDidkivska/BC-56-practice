import React from 'react';
import { toast } from 'react-toastify';
import { styled } from 'styled-components';

export const AddTodoForm = ({ onAddTodo }) => {
  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const todo = form.elements.todo;

    if (todo.value) {
      onAddTodo(todo.value);
      form.reset();
    } else {
      toast.error('Fill to do!');
    }
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input type="text" placeholder="enter your name" name="todo" />
        <Button>Add todo</Button>
      </Form>
    </>
  );
};
export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
export const Input = styled.input`
  margin-right: 5px;
`;

export const Button = styled.button`
  display: block;
  height: auto;
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
