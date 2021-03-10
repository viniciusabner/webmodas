import Header from "../../components/Header/header.js";
import Cart from "../../components/Cart/cart.js";
import React, { useState } from "react";

const CartPage = () => {
  const [numItems, setNumItems] = useState(1)
  return (
    <>
      <Header numItems={numItems} />
      <Cart numItems={numItems} setNumItems={setNumItems} />
    </>
  );
};

export default CartPage;