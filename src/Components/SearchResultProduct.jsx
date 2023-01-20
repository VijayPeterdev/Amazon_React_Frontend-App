import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";
import PrimeLogo from "../Assets/prime.png";
const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 4fr;
  background-color: #f1ecec64;
  margin: 1rem;
  box-shadow: 2px 3px 7px #ebedebf0;
`;

const ProductImageHolder = styled.div`
  display: flex;
  border-radius: 12px;
  background-color: white;
  padding: 1rem;
  cursor: pointer;
  width: 100%;
`;

const ProductImage = styled.img`
  padding: 1rem;
  height: 100%;
  object-fit: contain;
  width: 100%;
  background-color: white;
`;

const ProducDetailHolder = styled.div`
  display: flex;
  background-color: white;
  padding: 1rem;
  flex-direction: column;
`;

const StarRating = styled.div`
  color: #d6a74c;
  font-size: 20px;
  margin-top: 12px;

  display: flex;
`;

const ReviewCount = styled.span`
  font-size: 16px;
  color: #0785e4;

  margin-left: 12px;
`;

const LimitedBadge = styled.div`
  width: 130px;
  height: 35px;
  font-size: 12px;
  color: white;
  margin-top: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b12704; ;
`;

const Price = styled.div`
  font-size: 22px;
  font-weight: 500;
  margin-top: 12px;
`;

const PriceHolders = styled.div`
  display: flex;

  gap: 1rem;
  align-items: center;
`;

const CrossPrice = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-decoration: line-through;
`;

const OfferPer = styled.span`
  font-size: 14px;
  font-weight: 300;
  margin-top: 10px;
`;

const Text3 = styled.span`
  font-weight: 300;
  font-size: 16px;
  margin-top: 12px;
`;

const Prime = styled.img`
  width: 70px;
  cursor: pointer;
  margin-top: 12px;
  object-fit: cover;
  overflow: hidden;
`;
const SearchResultProduct = ({
  productimage,
  productname,
  reviewcount,
  productprice,
  crossprice,
  offer,
}) => {
  return (
    <Container>
      <ProductImageHolder>
        <ProductImage src={productimage} />
      </ProductImageHolder>
      <ProducDetailHolder>
        <span style={{ cursor: "pointer" }}>{productname}</span>

        <StarRating>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <ReviewCount>Reviews :{reviewcount} </ReviewCount>
        </StarRating>

        <LimitedBadge>Limited time deal</LimitedBadge>

        <PriceHolders>
          <Price> {productprice}</Price>
          <CrossPrice> {crossprice} </CrossPrice>
          <OfferPer> ({offer}% Offer) </OfferPer>
        </PriceHolders>

        <Prime src={PrimeLogo} />

        <Text3>FREE Delivery by விஜய் Amazon</Text3>
      </ProducDetailHolder>
    </Container>
  );
};

export default SearchResultProduct;
