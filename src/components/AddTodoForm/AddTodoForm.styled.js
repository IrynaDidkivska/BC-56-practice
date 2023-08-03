import { styled } from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const Input = styled.input`
  margin-right: 5px;
`;

const Button = styled.button`
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

const Test = styled.h1``;

export const StyledForm = {
  Form,
  Input,
  Button,
  Test,
};
