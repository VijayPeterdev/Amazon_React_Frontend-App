import React, { useState } from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: grid;
  background-color: #d1cece72;

  grid-template-columns: 8fr 3fr;
  margin-top: 4.5rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const LeftCardSection = styled.div`
  padding: 2rem;
  gap: 2rem;
  margin-top: -7rem;
  box-shadow: 2px 3px 7px #d1d0d09c;
  margin: 1.2rem;
  background-color: white;
  align-self: flex-start;

  display: flex;
`;

const CardImage = styled.img`
  width: 300px;
`;

const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const SmallFont = styled.span`
  font-size: 12px;
`;

const RowCart = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 12px;
`;

const CartBtn1 = styled.button`
  padding: 9px;
  background-color: #fcdc3f;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

const CartBtn2 = styled.button`
  padding: 9px;
  border: 1px solid gray;
  cursor: pointer;

  border-radius: 12px;
`;

const RightCartSection = styled.div`
  display: flex;
  background-color: white;
  border-radius: 12px;
  box-shadow: 2px 3px 7px #d8dbdbc9;
  flex-direction: column;
  padding: 1rem;
  margin: 0.8rem;
`;

const RecentBoughtCard = styled.div`
  margin-top: 12px;
  display: flex;
`;

const Image = styled.img`
  width: 130px;
  object-fit: cover;
  height: 130px;
  padding: 1rem;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Productname = styled.span`
  width: 100%;
  font-size: 12px;
  height: 70px;

  overflow: hidden;
  text-overflow: ellipsis;
`;

const RatingStar = styled.div`
  display: flex;
  margin-top: 7px;
  color: orange;
`;

const CartPage = () => {
  const [trimName, setTrimName] = useState("");

  return (
    <Container>
      <LeftCardSection>
        <CardImage
          src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
          alt="cardlogo"
        />

        <CardColumn>
          <h3>Your Amazon Cart is empty</h3>
          <SmallFont>Shop today’s deals</SmallFont>

          <RowCart>
            <Link to={"/login"}>
              <CartBtn1>Sign in to Your Account</CartBtn1>
            </Link>

            <Link to={"/signup"}>
              <CartBtn2>Sign up now</CartBtn2>
            </Link>
          </RowCart>
        </CardColumn>
      </LeftCardSection>
      <RightCartSection>
        <h4>Customers who bought items in your Recent History also bought</h4>

        <RecentBoughtCard>
          <Image
            src="https://images-eu.ssl-images-amazon.com/images/I/61cU9G3nwVL._AC_UL200_SR200,200_.jpg"
            alt="mobile"
          />
          <ProductDetails>
            <Productname>
              iQOO vivo Z6 5G (Chromatic Blue, 6GB RAM, 128GB Storage) |
              Snapdragon 695-6nm Processor | 120Hz FHD+ Display | 5000mAh Batter
            </Productname>

            <RatingStar>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </RatingStar>

            <span style={{ color: "#bf5538" }}>17,500 Rs</span>

            <button
              style={{
                fontSize: "12px",
                marginTop: "5px",
                width: "80px",
                backgroundColor: "#fcdc3f",
                color: "black",
                height: "20px",
                border: "none",
                borderRadius: "7px",
              }}
            >
              add to cart
            </button>
          </ProductDetails>
        </RecentBoughtCard>

        {/* ============================ */}

        <RecentBoughtCard>
          <Image
            src="https://images-eu.ssl-images-amazon.com/images/I/61cU9G3nwVL._AC_UL200_SR200,200_.jpg"
            alt="mobile"
          />
          <ProductDetails>
            <Productname>
              iQOO vivo Z6 5G (Chromatic Blue, 6GB RAM, 128GB Storage) |
              Snapdragon 695-6nm Processor | 120Hz FHD+ Display | 5000mAh Batter
            </Productname>

            <RatingStar>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </RatingStar>

            <span style={{ color: "#bf5538" }}>17,500 Rs</span>

            <button
              style={{
                fontSize: "12px",
                marginTop: "5px",
                width: "80px",
                backgroundColor: "#fcdc3f",
                color: "black",
                height: "20px",
                border: "none",
                borderRadius: "7px",
              }}
            >
              add to cart
            </button>
          </ProductDetails>
        </RecentBoughtCard>

        {/* ============================== */}
        <RecentBoughtCard>
          <Image
            src="https://images-eu.ssl-images-amazon.com/images/I/61cU9G3nwVL._AC_UL200_SR200,200_.jpg"
            alt="mobile"
          />
          <ProductDetails>
            <Productname>
              iQOO vivo Z6 5G (Chromatic Blue, 6GB RAM, 128GB Storage) |
              Snapdragon 695-6nm Processor | 120Hz FHD+ Display | 5000mAh Batter
            </Productname>

            <RatingStar>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </RatingStar>

            <span style={{ color: "#bf5538" }}>17,500 Rs</span>

            <button
              style={{
                fontSize: "12px",
                marginTop: "5px",
                width: "80px",
                backgroundColor: "#fcdc3f",
                color: "black",
                height: "20px",
                border: "none",
                borderRadius: "7px",
              }}
            >
              add to cart
            </button>
          </ProductDetails>
        </RecentBoughtCard>
      </RightCartSection>
    </Container>
  );
};

export default CartPage;
