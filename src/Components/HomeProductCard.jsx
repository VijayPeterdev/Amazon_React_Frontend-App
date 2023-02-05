import React from "react";
import styled from "styled-components";

import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;

  z-index: 1000;
  border-radius: 7px;

height: max-content;

  background-color: white;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
`;

const ProductHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  width: 100%;
  height: 200px;
`;


const ProductImage = styled.img`

width: 130px;
height:130px;
object-fit: cover;
margin-top:3px;

`;

const Text1 = styled.span`
font-size: 12px;
margin-top: 12px;
color: gray;
`;


const Title = styled.h3`
font-size:18px;
margin-top: 12px;
width: 16rem;
margin-left: 12px;

`;
const HomeProductCard = ({ cardtitle , productImage ,productname ,productname2,productImage2,productImage3,productname3,productname4,productImage4 }) => {
  return (
    <Container>
      <Title>{cardtitle}</Title>

      <ProductGrid>
        <Link to={"/categories/mobile"}>
        <ProductHolder>
          <ProductImage
            src={productImage}
            alt=""
          />
          <Text1>{productname}</Text1>
        </ProductHolder>
        </Link>
        <ProductHolder>
          <ProductImage
            src={productImage2}
            alt=""
          />
          <Text1>{productname2}</Text1>
        </ProductHolder>
        <ProductHolder>
          <ProductImage
            src={productImage3}
            alt=""
          />
          <Text1>{productname3}</Text1>
        </ProductHolder>
        <ProductHolder>
          <ProductImage
            src={productImage4}
            alt=""
          />
          <Text1>{productname4}</Text1>
        </ProductHolder>
      
      </ProductGrid>
    </Container>
  );
};

export default HomeProductCard;
