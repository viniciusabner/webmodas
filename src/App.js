import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/pages/home/home";
import ProductPage from "./pages/products/product";
import CartPage from "./pages/cart/cart";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product">
          <ProductPage />
        </Route>
        <CartPage path="/cart">
          <ProductPage />
        </CartPage>
      </Switch>
    </Router>
  );
}

export default App;
