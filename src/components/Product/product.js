import React, { useState, useEffect } from "react";
import image_default from "../../assets/default_image.jpg";
import styled from "styled-components";

const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  background: #ffffff;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const ButtonSize = styled.button`
  border: 0.1rem solid #d9d9d9;
  border-radius: 3px;
  background: #fdfdfd;
  width: 2rem;
  height: auto;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  :hover {
    background: #d9d9d9;
  }
  :focus {
    border-color: red;
  }
`;

const ListRemove = styled.button`
  border: 0.1rem solid #d9d9d9;
  border-radius: 3px;
  background: #fdfdfd;
  font-size: 0.7rem;
  padding: 0.2rem 0.2rem;
  width: 60%;
  height: 30px;
  margin-top: 1.6rem;
  text-align: center;
  cursor: pointer;
  :hover {
    background: #d9d9d9;
  }
`;

const Product = () => {
  const [selectProduct, setSelectProduct] = useState();
  const [selectSize, setSelectSize] = useState();

  let url;
  let idProduct;

  if (typeof window !== "undefined") {
    url = window.location?.href;
    idProduct = url.split("product/")[1];
  }

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
  console.log(selectProduct, "selectProductselectProductselectProduct");

  const description = selectProduct?.filter((info) => {
    return info.code_color == idProduct;
  });

  const setProducts = () => {

    var newProducts = localStorage.getItem("@Webmodas:products");
    newProducts = newProducts ? newProducts.split(",") : [];
    newProducts.push(description[0].code_color);
    localStorage.setItem("@Webmodas:products", newProducts.toString());

    console.log(newProducts, "newProduct");
  };
  

  const setSize = () => {
    var newSize = localStorage.getItem("@Webmodas:size");
    newSize = newSize ? newSize.split(",") : [];
    newSize.push(selectSize);
    localStorage.setItem("@Webmodas:size", newSize.toString());

    console.log(newSize, "newSize");
  };

  console.log(description, "description");
  console.log(selectSize, "selectSize");
  return (
    <>
      {description && (
        <Description>
          <img
            src={description[0].image ? description[0].image : image_default}
            alt={description[0].name}
          />
          <Information>
            {description[0].name}
            <p>
              <strong>
                {description[0].on_sale
                  ? description[0].actual_price
                  : description[0].regular_price}
              </strong>{" "}
              em até {description[0].installments}
            </p>
            <p>Escolha o tamanho</p>
            <div>
              {description[0].sizes &&
                description[0].sizes.map(({ size, available }) => {
                  if (available === true) {
                    return (
                      <ButtonSize key={size} onClick={() => setSelectSize(size)}>
                        {size}
                      </ButtonSize>
                    );
                  }
                  return null;
                })}
            </div>
            <ListRemove disabled={selectSize == null} onClick={() => { setProducts(); setSize()}}>
              Adicionar à Sacola
            </ListRemove>
          </Information>
        </Description>
      )}
    </>
  );
};

export default Product;
