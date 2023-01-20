import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillStar, AiOutlineDown } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

import PayLogo from "../Assets/paylogo.png";
import DeliveryLogo from "../Assets/deliverylogo.png";
import ReplacementLogo from "../Assets/replacementlogo.png";
import HappyDelivery from "../Assets/happydelivery.png";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import {
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { BsGlobe } from "react-icons/bs";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  margin-top: 5rem;
  width: 100%;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  gap: 1rem;
  height: 500px;
  margin-right: -100px;
`;

const ImageContainer = styled.div`
  align-items: flex-start;
  display: flex;
  position: relative;

  width: 300px;

  background-color: white;
`;

const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProductImage = styled.img`
  display: flex;
  padding: 1rem;
  height: 400px;
  object-fit: contain;
  width: 100%;
`;

const NextImage = styled.img`
  display: flex;

  height: 40px;
  margin-top: 1rem;
  object-fit: contain;
  cursor: pointer;
  width: 40px;
  margin-left: 18px;
  outline: 1px solid gray;

  &:hover {
    outline: 2px solid orange;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  overflow: scroll;
  gap: 12px;
  margin-left: -2rem;
  flex-direction: column;
`;

const TextSmall = styled.div`
  font-size: 14px;
  color: #40898d;
`;

const RatingandReview = styled.div`
  display: flex;
  gap: 12px;
`;

const StartRating = styled.div`
  color: orange;
  display: flex;
`;

const ProductTitle = styled.div`
  font-size: 22px;
  font-weight: 400;
  margin-top: 12px;
`;

const Store = styled.span`
  color: #40898d;
`;

const Badge = styled.div`
  width: 140px;
  color: white;
  height: 30px;
  padding: 12px;
  display: flex;
  align-items: center;
  background-color: #232f36;
  clip-path: polygon(0 0, 100% 0%, 92% 99%, 0% 100%);
`;

const Vijay = styled.span`
  color: orange;
`;

const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: #cfcbcb;
  background-image: linear-gradient(to right, #ccc, #f0ececa4, #ccc);
`;

const Price = styled.span`
  font-size: 22px;
  color: black;
`;

const CrossPrice = styled.span`
  text-decoration: line-through;
`;

const SalePrice = styled.span`
  color: #9a9696b9;
  font-size: 12px;
  margin-top: -15px;
`;

const EmiRow = styled.div`
  display: flex;
`;

const RowIcon = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 3rem;
  margin-bottom: 12px;
`;

const EmiCards = styled.div`
  width: 170px;
  padding: 1rem;
  margin: 1rem;

  height: 140px;
  box-shadow: 2px 3px 7px #a0a3a3a3;
  &:hover {
    outline: 2px solid orange;
    cursor: pointer;
  }
`;

const Text1 = styled.span`
  font-size: 12px;
  color: #7b7373a0;
`;

const IconHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 60px;
  align-items: center;
  object-fit: contain;

  justify-content: center;
`;

const LogoStats = styled.span`
  font-size: 12px;

  color: #398ea5;
  align-items: center;
  margin-left: 13px;

  width: 120px;
`;

const IconImage = styled.img`
  width: 90%;
  object-fit: contain;
  height: 90%;
`;

const CollapseImage = styled.img`
  border: 2px solid #d3d3d3c4;
  padding: 0.5rem;
  margin-right: 12px;
  margin-left: 12px;

  &:hover {
    border: 2px solid orange;
  }
`;

const OptionSize = styled.span`
  padding: 0.4rem;
  margin-top: 130px;
  margin-left: 12px;
  margin-right: 12px;
  border: 2px solid #dadbdaae;

  &:hover {
    border: 2px solid orange;
    cursor: pointer;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 12px;
`;

// const EmptyContainer = styled.div``;

const CardPlaceSection = styled.div`
  box-shadow: 2px 3px 7px #c1bfc1b9;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  gap: 12px;
  font-size: 14px;
  padding: 1rem;
`;

const DeliveryDate = styled.span`
  width: 50%;
`;

const DeliveryDetails = styled.span`
  width: 70%;
  font-size: 14px;
  font-weight: 300;
`;

const Buynow = styled.button`
  width: 40%;
  height: 40px;
  padding: 1rem;
  position: absolute;
  top: 25rem;
  cursor: pointer;
  left: ${(props) => props.left};
  border-radius: 12px;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: orange;
  color: white;
  border: none;
`;

const SmallImage = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  object-fit: contain;
`;

const ProductDeatilPage = () => {
  const [open, setOpen] = useState(true);
  const [sizeOpen, setSizeOpen] = useState(true);
  const [productDetailsOpen, setProductDetailsOpen] = useState(true);

  const [scrollPosition, setPosition] = useState(0);

  const [stripeToken, setStripeToken] = useState(null);

  console.log(stripeToken);

  const location = useLocation();
  const productID = location.pathname.split("/")[2];

  const [productDetail, setProductDetail] = useState({});
  const [productImage, setProductImage] = useState(
    productDetail && productDetail.productImage
      ? productDetail.productImage[0]
      : "https://via.placeholder.com/150"
  );

  console.log(productImage);

const discount = Number(productDetail.productCrossprice) - Number(productDetail.productPrice)
const discountPercent = discount/Number(productDetail.productCrossprice)*100
const discountValue =  Math.round(discountPercent);


  console.log(productDetail);
  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/products/find/${productID}`
        );

        setProductDetail(res.data);
        console.log(res.data);
        setProductImage(
          productDetail && productDetail.productImage
            ? productDetail.productImage[0]
            : "https://via.placeholder.com/150"
        );
      } catch (err) {
        console.log(err);
      }
    };

    getSingleProduct();
  }, [productID]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleProductDetail = () => {
    setProductDetailsOpen(!productDetailsOpen);
  };

  const handleSize = () => {
    setSizeOpen(!sizeOpen);
  };

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const TokenRequest = async () => {
      try {
        const res = await axios.post("http://localhost:8080/api/payment", {
          tokenId: stripeToken.id,
          amount: 1700,
        });

        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    stripeToken && TokenRequest();
  }, [stripeToken]);

  const KEY =
    "pk_test_51MNCrUSAiZ4DFG1TC8CUkvrowHhONPbCn68gyPp5qWxzTmKKpyAyCHHgPBotE5GBFABRuOh495CQ4yXHy4uozVbo00btz25QXi";

  return (
    <Container>
      <Grid>
        <ImageContainer>
          <StripeCheckout
            name="விஜய் Amazon"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURTTkB9LI4rkWf9_oJfdTIB0KplC6jnfL8RXiZmj0Gw&s"
            billingAddress
            shippingAddress
            description="Your total amount is 1700 Rs"
            amount={170000}
            token={onToken}
            currency="INR"
            stripeKey={KEY}
          >
            <Buynow left={"2rem"}> BuyNow</Buynow>
          </StripeCheckout>
          <Buynow
            left={"9rem"}
            style={{
              color: "white",
              marginLeft: "12px",
              backgroundColor: "black",
            }}
          >
            {" "}
            Add to Cart
          </Buynow>

          <ImageList>
            {productDetail.productImage && productDetail.productImage[0] ? (
              <NextImage
                onClick={() => setProductImage(productDetail&&productDetail.productImage&&productDetail.productImage[0])}
                src={productDetail.productImage[0]}
              />
            ) : (
              <NextImage src="https://via.placeholder.com/150" />
            )}
            {productDetail.productImage && productDetail.productImage[1] ? (
              <NextImage
                onClick={() =>setProductImage(productDetail&&productDetail.productImage&&productDetail.productImage[0])}
                src={productDetail.productImage[1]}
              />
            ) : (
              <NextImage src="https://via.placeholder.com/150" />
            )}
            {productDetail.productImage && productDetail.productImage[2] && (
              <NextImage
                onClick={() => setProductImage(productDetail&&productDetail.productImage&&productDetail.productImage[1])}
              />
            )}
            {productDetail.productImage && productDetail.productImage[3] && (
              <NextImage
                onClick={() => setProductImage(productDetail&&productDetail.productImage&&productDetail.productImage[2])}
              />
            )}
            {productDetail.productImage && productDetail.productImage[4] && (
              <NextImage
                onClick={() => setProductImage(productDetail.productImage[3])}
                src={productDetail.productImage[4]}
              />
            )}
          </ImageList>

          <ProductImage
            src={
              productDetail && productDetail.productImage
                ? productDetail.productImage[0]
                : "https://via.placeholder.com/150"
            }
          />
        </ImageContainer>

        <ProductDetails>
          <ProductTitle>{productDetail.productName}</ProductTitle>
          <Store>Visit the Store</Store>
          <RatingandReview>
            <StartRating>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </StartRating>
            <AiOutlineDown />
             <TextSmall> {productDetail.productRating} ratings | 570 answered questions</TextSmall>
          </RatingandReview>
          <Badge>
            <Vijay>Vijay</Vijay> Amazon
          </Badge>

          <Hr />
          <span style={{ color: "#cc0c39" }}> Deal</span>
          <span style={{ color: "#cc0c39" }}>
            {" "}
            {  discountValue } % Offer  <Price>₹{productDetail.productPrice}</Price>{" "}
          </span>
          <SalePrice>
            M.R.P : <CrossPrice>₹{productDetail.productCrossprice} </CrossPrice>{" "}
          </SalePrice>

          <span>Inclusive of all taxes</span>
          <EmiRow>
            <EmiCards>
              <h4>No Cost EMI</h4>
              <Text1>
                No Cost EMI Avail No Cost EMI on select cards for orders above
                ₹3000
              </Text1>
            </EmiCards>

            {/* ================= */}
            <EmiCards>
              <h4>Bank Offer</h4>
              <Text1>Upto ₹89.95 discount on HSBC Bank Credit Cards</Text1>
            </EmiCards>

            {/* ======================= */}
            <EmiCards>
              <h4>Partner Offers</h4>
              <Text1>
                Get GST invoice and save up to 28% on business purchases. Sign
                up for free...
              </Text1>
            </EmiCards>
          </EmiRow>

          <Hr />
          <RowIcon>
            <IconHolder>
              <IconImage src={DeliveryLogo} alt="delivery" />
              <LogoStats>Free delivery</LogoStats>
            </IconHolder>

            <IconHolder>
              <IconImage src={PayLogo} alt="delivery" />
              <LogoStats>Pay on Delivery</LogoStats>
            </IconHolder>

            <IconHolder>
              <IconImage src={ReplacementLogo} alt="delivery" />
              <LogoStats style={{ textAlign: "center" }}>
                7 Days Replacement
              </LogoStats>
            </IconHolder>
            <IconHolder>
              <IconImage src={HappyDelivery} alt="delivery" />
              <LogoStats style={{ textAlign: "center" }}>
                {" "}
                விஜய் Amazon Delivery
              </LogoStats>
            </IconHolder>
          </RowIcon>
          <Hr />
          {/* ======================= MUI TEST ============================== */}

          <List
            sx={{
              width: "100%",
              maxWidth: "600px",
              bgcolor: "background.paper",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              sx={{ display: "flex", justifyContent: "space-between" }}
              onClick={handleClick}
            >
              <ListItemText primary="Color :" />
              <SmallImage
                src={
                  productDetail && productDetail.productImage
                    ? productDetail.productImage[0]
                    : "https://via.placeholder.com/150"
                }
                alt=""
              />

              {open ? <MdExpandLess /> : <MdExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {productDetail &&
                  productDetail.productImage &&
                  productDetail.productImage.map((image,index) => (
                    <CollapseImage
                    key={image.index}
                      style={{
                        width: "90px",
                        height: "90px",
                        objectFit: "contain",
                        cursor: "pointer",
                      }}
                      src={
                       image
                      }
                      alt=""
                    />
                  ))}
              </List>
            </Collapse>
          </List>
          {/* ======================================================== */}
          <Hr />

          <List
            sx={{
              width: "100%",
              maxWidth: "600px",
              bgcolor: "background.paper",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              sx={{ display: "flex", justifyContent: "space-between" }}
              onClick={handleSize}
            >
              <ListItemText primary="Size :" />M
              {sizeOpen ? <MdExpandLess /> : <MdExpandMore />}
            </ListItemButton>
            <Collapse in={sizeOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <OptionSize> S </OptionSize>
                <OptionSize> M </OptionSize>
                <OptionSize> L </OptionSize>
                <OptionSize> XL </OptionSize>
                <OptionSize> 2XL </OptionSize>
              </List>
            </Collapse>
          </List>
          <Hr />

          {/* ================================================== */}

          <List
            sx={{
              width: "100%",
              maxWidth: "600px",
              bgcolor: "background.paper",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              sx={{ display: "flex", justifyContent: "space-between" }}
              onClick={handleProductDetail}
            >
              <ListItemText primary="Product Details  :" />
              {productDetailsOpen ? <MdExpandLess /> : <MdExpandMore />}
            </ListItemButton>
            <Collapse in={productDetailsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Column>
                  <span>
                    {" "}
                    Brand :{" "}
                    <span style={{ color: "orange" }}>
                      {" "}
                      {productDetail.productBrand}{" "}
                    </span>{" "}
                  </span>
                  <span>
                    {" "}
                    Color :{" "}
                    <span style={{ color: "orange" }}>
                      {" "}
                      {productDetail.productColor}
                    </span>{" "}
                  </span>
                  <span>
                    {" "}
                    Screen Size :{" "}
                    <span style={{ color: "orange" }}>
                      {" "}
                      {productDetail.productSize}{" "}
                    </span>{" "}
                  </span>
                  <span>
                    {" "}
                   Product Details : <span style={{ color: "orange" }}> {productDetail.productDetails} </span>{" "}
                  </span>
                  <span>
                    {" "}
                    Instock : <span style={{ color: "orange" }}> {productDetail.instockCount
} </span>{" "}
                  </span>
                  <span>
                    {" "}
                    Product Star Rating  : <span style={{ color: "orange" }}> {productDetail.productStar} / 5 </span>{" "}
                  </span>
                </Column>
              </List>
            </Collapse>
          </List>
        </ProductDetails>

        <CardPlaceSection>
          <Price>₹{productDetail.productPrice}</Price>
          <DeliveryDate>FREE delivery Monday, 9 January.</DeliveryDate>
          <DeliveryDetails>
            Or fastest delivery Today by 10 PM 2 hrs 10 mins. Details
          </DeliveryDetails>

          <span style={{ fontSize: "20px", color: "green" }}>
            {" "}
            Instock {productDetail.instockCount}{" "}
          </span>
          <div style={{ display: "flex", gap: "7px" }}>
            <Button
              variant="contained"
              style={{
                width: "35%",
                height: "40px",
                fontSize: "11.4px",
                backgroundColor: "orange",
              }}
            >
              {" "}
              Add to Cart
            </Button>
            <Button
              variant="contained"
              style={{
                width: "35%",
                height: "40px",
                fontSize: "12px",
                backgroundColor: "black",
              }}
            >
              {" "}
              Buy Now
            </Button>
          </div>
        </CardPlaceSection>
      </Grid>
    </Container>
  );
};

export default ProductDeatilPage;
