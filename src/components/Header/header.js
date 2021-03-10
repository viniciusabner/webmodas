import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Search from "../Forms/search";
import { FaShoppingBag } from "react-icons/fa";
import Amount from "../Amount/amount";

import "../../styles/global.css";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fdfdfd;
  height: 4rem;
  padding-left: 3rem;
  padding-right: 3rem;
  a {
    text-decoration: none;
  }
`;

const HeaderLogo = styled.h1`
  font-family: "RocknRoll One", sans-serif;
  span {
    color: red;
  }
`;

const IconCart = styled.div`
  cursor: pointer;
  margin-right: 1rem;
  background: transparent;
  border-radius: 100%;
  border: none;
  box-shadow: none;
  font-size: 2.1rem;
  line-height: 0;
  outline: none;
  padding: 0;
  position: relative;
`;

const Header = ({ numItems }) => {
  return (
    <Container>
      <NavLink to="/" style={{ textDecoration: "none", color: "#000" }}>
        <HeaderLogo>
          web<span>Modas</span>
        </HeaderLogo>
      </NavLink>
      <Search />
      <NavLink to="/cart" style={{ textDecoration: "none", color: "#000" }}>
        <IconCart
        // onClick={}
        >
          <FaShoppingBag />
          <Amount numItems={numItems} />
        </IconCart>
      </NavLink>
    </Container>
  );
};

export default Header;
