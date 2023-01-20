import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 12px; */
  margin: 40px 0px;
  width: 250px;


  height: 250px;
  flex-direction: column;
`;

const ProductImage = styled.img`
object-fit: cover;
padding: 1rem;
height: 350px;
width:  ${({customwidth}) => customwidth ? customwidth : "180px"} ;  


object-fit: cover;
margin-top: 12px;
`;

const ProductDetails = styled.div`
  align-items: center;
  gap: 12px;
  margin-top: 12px;
  display: flex;
`;

const Badge = styled.div`
  width: 4rem;
  height: 30px;
  border-radius: 12px;
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  background-color: red;
  color: white;
`;

const Price = styled.span`
  font-size: 16px;
  color: red;
`;

const SliderSingleProduct = ({
  productimg,
  productname,
  productprice,
  productoffer,
  customwidth,
}) => {
  return (
    <Container>
      <ProductImage
        customwidth={customwidth}
        src={productimg}
        alt={productname}
      />
      <ProductDetails>
        <Badge>{productoffer}% offer</Badge>

        <h5>{productname}</h5>
      </ProductDetails>

      <Price>{productprice} Rs</Price>
    </Container>
  );
};

export default SliderSingleProduct;
