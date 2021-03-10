import React, { useState } from "react";
import styled from "styled-components";

const AmountProducts = styled.div`
  background: red;
  color: white;
  height: 1rem;
  width: 1rem;
  overflow: hidden;
  position: absolute;
  right: -0.5rem;
  top: 25px;
  border-radius: 50%;
  line-height: 1rem;
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
`;

const Amount = ({numItems}) => {
  return (
    <AmountProducts>
      <span>{numItems}</span>
    </AmountProducts>
  );
};

export default Amount;
