import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import Input from "../Forms/input";

import "../../styles/global.css";

const InputWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const ContainerSearch = styled.div`
display: flex;
align-items: center;
margin: ${props => props.margin ? props.margi : '0 auto'};
height: 30px;
border-radius: ${props => props.borderRadius ? props.borderRadius : '8px'};
box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
border: ${props => props.border ? props.border : 'solid 1px #5a73a3'};
background-color: #ffffff;
padding: 0 5px 0 15px;
width: 300px;
`;

const SearchIcon = styled(FiSearch)`
  color: #5a73a3;
  font-size: 1.2em;
  cursor: pointer;
`;

const Search = () => {
  return (
    <InputWrapper>
      <ContainerSearch>
        <Input />
        <SearchIcon
        // onClick={() => searchClick({ value: searchText })}
        />
      </ContainerSearch>
    </InputWrapper>
  );
};

export default Search;
