import React, { useState, useEffect } from "react";
import styled from "styled-components";
import image_default from "../../assets/default_image.jpg";
import { Link } from "react-router-dom";

const ContainerProducts = styled.div`
  background: #ffffff;
  padding-top: 1rem;
  padding-bottom: 1.6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListProducts = styled.div`
  height: 460px;
  width: 310px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  cursor: pointer;

  :hover {
    border: 1px solid #fff1f1;
  }
  :after {
    transition: all ease-in-out 0.2s;
    background: none repeat scroll 0 0 #ffffff;
    content: "";
    display: block;
    height: 2px;
    width: 0;
  }
  :hover:after {
    width: 100%;
  }
`;

const Discount = styled.span`
  background-color: red;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  position: absolute;
  padding: 0.2rem;
  right: 0;
`;

const InfoProduct = styled.div`
  color: #585454;
  text-align: center;
`;

const ProductFigure = styled.figure`
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
`;

const ProductImg = styled.img`
  width: 260px;
  height: 310px;
  border: solid 1px #d9d9d9;
`;

const Price = styled.p`
  display: flex;
  flex-direction: column;
`;

const Products = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://6046a517f0c6dc00177b21a9.mockapi.io/api/v1/catalog", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        console.log(response, "response");
      });
  }, []);
  console.log(data, 'data')
  return (
    <>
      {data.length >0 && (
        <ContainerProducts>
          {data.map((product) => {
            console.log(product.code_color, ".code_color");
            return (
              <Link
                to={`/product/${product.code_color}`}
                style={{ textDecoration: "none", margin: "1rem" }}
              >
                <ListProducts className="center">
                  <ProductFigure>
                    {product.on_sale && (
                      <Discount>{`-${product.discount_percentage}`}</Discount>
                    )}
                    <ProductImg
                      src={product.image ? product.image : image_default}
                      alt={product.name}
                    />
                  </ProductFigure>
                  <InfoProduct>
                    {product.name}

                    <Price>
                      <div>
                        {" "}
                        em até <strong>{product.installments}</strong>
                      </div>
                      <div>
                        ou{" "}
                        <strong>
                          {product.on_sale
                            ? product.actual_price
                            : product.regular_price}
                        </strong>{" "}
                        à vista
                      </div>
                    </Price>
                  </InfoProduct>
                </ListProducts>
              </Link>
            );
          })}
        </ContainerProducts>
      )}
    </>
  );
};

export default Products;
