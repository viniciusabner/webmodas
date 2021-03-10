import React, {useState} from "react";
import Header from "../../components/Header/header.js"
import Products from "../../components/Products/products.js"

const Home = () => {
  const [numItems, setNumItems] = useState(1)
    return (
      <>
      <Header numItems={numItems} />
      <Products setNumItems={setNumItems}/>
      </>
    )

}

export default Home;