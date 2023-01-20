import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SliderSingleProduct from "./SliderSingleProduct";
import { Link } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  width: 98%;
  background-color: white;
  height: 400px;
  margin-left: 12px;
  padding: 1rem;
  margin-right: 12px;
  margin-bottom: 12px;
`;

const Row = styled.div`
  align-items: center;
  display: flex;
  overflow-x: scroll;

  margin-left: 12px;
  margin-right: 12px;

  gap: 12px;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin-top: 12px;
  margin-left: 12px;
`;

const SeeMore = styled.span`
  margin-top: 12px;
  margin-left: 7px;
  font-size: 14px;
  color: #12b7d4;
`;

const ProductSlider = ({ productHolderTitle }) => {
  const [getProduct, setGetProduct] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/products");

        console.log(res.data);
        setGetProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <Container>
      <Row>
        <Title>{productHolderTitle}</Title>
        <SeeMore> See all deals</SeeMore>
      </Row>

      <Row>
        {getProduct.map((product) => (
          <Link to={`/product/${product._id}?new=true`}>
            <SliderSingleProduct key={product._id}
              productimg={
                product.productImage[0]

              }
              productname={product.productName}
              productoffer={"25"}
              productprice={product.productPrice}
            />
          </Link>
        ))}
      </Row>
    </Container>
  );
};

export default ProductSlider;
