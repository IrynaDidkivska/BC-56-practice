import React from 'react';
import { toast } from 'react-toastify';
import { styled } from 'styled-components';
import { StyledForm } from './AddTodoForm.styled';
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
      <StyledForm.Form onSubmit={onSubmit}>
        <StyledForm.Test>sfasdfasdfasd</StyledForm.Test>
        <StyledForm.Input
          type="text"
          placeholder="enter your name"
          name="todo"
        />
        <StyledForm.Button>Add todo</StyledForm.Button>
      </StyledForm.Form>
    </>
  );
};
