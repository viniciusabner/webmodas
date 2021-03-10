import React from "react";
import styled from "styled-components";

const Field = styled.input`
  font-size: 14px;
  border-width: 0;
  border: none;
  border-radius: 25px;
  background: '#fff';
  color: #2c2c2c;
  height: 25px;
  line-height: 34px;
  width: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  &:focus {
    outline: none;
  }
`;

const Input = () => {
  return (
    
  <Field />
  )
};

export default Input;
