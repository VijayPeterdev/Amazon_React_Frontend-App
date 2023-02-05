import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { UserRequest } from "../AxiosRequestMethod";
import env from "react-dotenv";

const Container = styled.div`
  display: grid;
  background-color: #d1cece72;

  grid-template-columns: 8fr 3fr;

  gap: 1rem;
  justify-content: center;
  align-items: flex-start;
  margin-top: 4rem;
`;

const LeftCardSection = styled.div`
  padding: 2rem;

  gap: 2rem;

  box-shadow: 2px 3px 7px #d1d0d09c;
  margin: 1.2rem;
  background-color: white;
  align-self: flex-start;
  justify-content: flex-start;

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

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ProductHolder = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  width: 120px;
  height: 120px;

  object-fit: contain;
`;

const CartPage = () => {
  const [trimName, setTrimName] = useState("");

  const product = useSelector((state) => state.cart.products);
  const cartData = useSelector((state) => state.cart);

  console.log("productlength" + product.length);

  // Payment checkout

  const [stripeToken, setStripeToken] = useState(null);

  const KEY = window.env.STRIPE_PUBLIC_KEY;

  const onToken = (token) => {
    setStripeToken(token);
  };

  console.log(stripeToken);

  const navigate = useNavigate();
  useEffect(() => {
    const TokenRequest = async () => {
      try {
        const res = await UserRequest.post("/payment", {
          tokenid: stripeToken.id,
          amount: cartData.cartTotalPrice * 100,
        });

        navigate("/", { replace: true });

        console.log("Server Response" + res.data);
      } catch (err) {
        navigate("/", { replace: true });

        console.log(err);
      }
    };

    stripeToken && cartData.cartTotalPrice >= 1 && TokenRequest();
  }, [stripeToken, cartData.cartTotalPrice]);

  return (
    <Container>
      {product.length > 0 ? (
        <>
          <Column>
            {product.map((productData) => (
              <LeftCardSection>
                <ProductHolder>
                  <ProductImage src={productData.productImage} alt="" />

                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "17px", fontWeight: "bold" }}>
                      {productData.productName}
                    </span>
                    <span style={{ color: "green" }}>In stock</span>
                    <span>Prodct ID : {productData._id}</span>
                    <span
                      style={{
                        fontFamily: "400",
                        fontSize: "17px",
                        color: "#0185e4",
                      }}
                    >
                      {" "}
                      Eligible for FREE Shipping{" "}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: "17px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Quantity
                    </span>
                    <span
                      style={{
                        color: "green",
                        textAlign: "center",
                        marginTop: "20px",
                      }}
                    >
                      {productData.quantityCount}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: "17px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Product Price
                    </span>
                    <span style={{ color: "green", textAlign: "center" }}>
                      1
                    </span>
                    <span style={{ textAlign: "center" }}>
                      {productData.productPrice}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Button style={{ fontSize: "30px", fontWeight: "bold" }}>
                      -
                    </Button>
                    <span style={{ color: "green", textAlign: "center" }}>
                      {productData.quantityCount}
                    </span>
                    <Button
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "24px",
                      }}
                    >
                      +{" "}
                    </Button>
                  </div>
                </ProductHolder>
              </LeftCardSection>
            ))}
          </Column>
        </>
      ) : (
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
      )}

      <RightCartSection>
        <LeftCardSection
          style={{
            width: "300px",
            backgroundColor: "#cac4c446",
            flexDirection: "column",
          }}
        >
          <h5>
            SubTotal {cartData.cartTotalQuanity} Item :{" "}
            <span style={{ color: "#9f0606" }}>{cartData.cartTotalPrice}</span>
          </h5>
          <h5>This Order Contains Gift</h5>
          <StripeCheckout
            name="விஜய் Amazon"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURTTkB9LI4rkWf9_oJfdTIB0KplC6jnfL8RXiZmj0Gw&s"
            billingAddress
            shippingAddress
            description={`Your total amount is  Rs ${cartData.cartTotalPrice}`}
            amount={cartData.cartTotalPrice * 100}
            token={onToken}
            currency="INR"
            stripeKey={
              "pk_test_51MNCrUSAiZ4DFG1TC8CUkvrowHhONPbCn68gyPp5qWxzTmKKpyAyCHHgPBotE5GBFABRuOh495CQ4yXHy4uozVbo00btz25QXi"
            }
          >
            <Button variant="contained" style={{ backgroundColor: "#ebad28" }}>
              Proceed to checkout
            </Button>
          </StripeCheckout>
        </LeftCardSection>
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
