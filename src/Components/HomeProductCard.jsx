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
const HomeProductCard = ({ cardtitle }) => {
  return (
    <Container>
      <Title>Up to 70% off | Styles for Women</Title>

      <ProductGrid>
        <Link to={"/categories/mobile"}>
        <ProductHolder>
          <ProductImage
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-372-232._SY232_CB636048992_.jpg"
            alt=""
          />
          <Text1>Women's Clothing</Text1>
        </ProductHolder>
        </Link>
        <ProductHolder>
          <ProductImage
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-372-232._SY232_CB636048992_.jpg"
            alt=""
          />
          <Text1>Women's Clothing</Text1>
        </ProductHolder>
        <ProductHolder>
          <ProductImage
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-372-232._SY232_CB636048992_.jpg"
            alt=""
          />
          <Text1>Women's Clothing</Text1>
        </ProductHolder>
        <ProductHolder>
          <ProductImage
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-372-232._SY232_CB636048992_.jpg"
            alt=""
          />
          <Text1>Women's Clothing</Text1>
        </ProductHolder>
      
      </ProductGrid>
    </Container>
  );
};

export default HomeProductCard;
