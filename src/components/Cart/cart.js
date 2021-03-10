import React, { useState, useEffect } from "react";
import styled from "styled-components";
import image_default from "../../assets/default_image.jpg";

const CartProducts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;

const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 80%;
  margin-right: 5rem;
`;

const ContainerList = styled.div`
  margin-top: 1rem;
  overflow-y: auto;
  scrollbar-width: thin;
  display: flex;
  flex-direction: column;
`;

const ListProducts = styled.li`
  width: 50vh;
  border-radius: 10px;
  border: 0.1rem solid #d9d9d9;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ListImg = styled.div`
  display: flex;
  justify-content: center;
  width: 5rem;
  height: auto;
  margin-right: 0.5rem;
  img {
    border: 0.1rem solid #d9d9d9;
    width: 100%;
    height: auto;
  }
`;

const ListDescription = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  p {
    font-size: 0.8rem;
  }
`;

const ListButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: initial;
  align-items: center;
  font-size: 1.2rem;
  margin-top: 1.5rem;
  button {
    border: 0.1rem solid #d9d9d9;
    border-radius: 3px;
    background: #fdfdfd;
    width: 1.5rem;
    height: auto;
    font-weight: bold;
    cursor: pointer;
  }
  strong {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const ListValue = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  font-size: 0.8rem;
  width: 7rem;
`;

const CartTotal = styled.div`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const ListRemove = styled.div`
  border: 0.1rem solid #d9d9d9;
  border-radius: 3px;
  background: #fdfdfd;
  font-size: 0.7rem;
  padding: 0.2rem 0.2rem;
  width: 30%;
  margin-top: 0.6rem;
  text-align: center;
  cursor: pointer;
  :hover {
    background: #d9d9d9;
  }
`;

const Cart = ({ numItems, setNumItems }) => {
  const increment = () => {
    setNumItems(numItems + 1);
  };
  const decrement = () => {
    setNumItems(numItems - 1);
  };
  const reset = () => {
    setNumItems(0);
  };

  var idProduct = localStorage.getItem("@Webmodas:products");
  idProduct = idProduct ? idProduct.split(",") : [];
  console.log(idProduct, "idProduct");

  var idSize = localStorage.getItem("@Webmodas:size");
  idSize = idSize ? idSize.split(",") : [];
  console.log(idSize, "idSize");

  const [selectProduct, setSelectProduct] = useState();
  useEffect(() => {
    fetch("https://6046a517f0c6dc00177b21a9.mockapi.io/api/v1/catalog", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSelectProduct(data);
      });
  }, []);

  const description = selectProduct?.filter((info) => {
    return idProduct.find((id) => {
      return info.code_color == id;
    });
  });
  console.log(description, "description");

  const idTamanho = idSize
  console.log(idTamanho, 'idTamanho')

  return (
    <CartProducts>
      <CartContainer>
        <CartList>
          <ContainerList>
            {description && description.length !== 0 ? (
              description.map((product, index) => (
                <ListProducts key={product.code_color + index}>
                  <ListItem>
                    <ListImg>
                      <img
                        src={product.image ? product.image : image_default}
                        title={product.name}
                      />
                    </ListImg>
                    <ListDescription>
                      <strong>{product.name}</strong>
                      <p>
                        tamanho:
                        {product.sizes[0].size}
                      </p>
                      <ListButtons>
                        <button disabled={numItems == 0} onClick={decrement}>
                          -
                        </button>
                        <strong>{numItems}</strong>
                        <button onClick={increment}>+</button>
                      </ListButtons>
                    </ListDescription>
                    <ListValue>
                      <strong>{product.regular_price}</strong>
                      <p>{product.installments}</p>
                    </ListValue>
                  </ListItem>
                  <ListRemove onClick={reset}>
                    Remover Item
                  </ListRemove>
                </ListProducts>
              ))
            ) : (
              <div className="list--not-found">
                <p className="list--not-found-paragraph">
                  Sua sacola está vazia
                </p>
                <img className="list--not-found-image" />
              </div>
            )}
          </ContainerList>
        </CartList>
        <CartTotal className="cart__subtotal">
          <strong>
            Total - R$
            {/* {total} */}
          </strong>
        </CartTotal>
      </CartContainer>
    </CartProducts>
  );
};

export default Cart;
