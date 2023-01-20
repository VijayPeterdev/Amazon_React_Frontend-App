import React from "react";
import styled from "styled-components";
import LogoAmazon from "../Assets/amazonlogo.png";
import { BsSearch } from "react-icons/bs";
import { AiOutlineDown, AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100000;
  height: 70px;
  background-color: #131921;
  color: white;
`;
const Wrapper = styled.div`
  margin: 0 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white !important;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AmazonLogo = styled.img`
  width: 80px;
  align-items: center;
  justify-content: center;
`;

const Vijay = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: orange;
`;

const IconStyle = {
  color: "white",
};

const UsernameLocation = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text1 = styled.span`
  font-size: 12px;
`;

const Text2 = styled.span`
  font-size: 16px;
`;

// ======================================================
//  Center Section

const Center = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: start; */
`;

const SearchHolder = styled.div`
  height: 40px;
  display: flex;
`;

const Selection = styled.select`
  background-color: #ece5e5;
  width: 7rem;
  font-size: 12px;
  outline: none;
  border: none;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`;

const Options = styled.option``;
const Input = styled.input`
  display: flex;
  outline: 1px solid orange;
  width: 20rem;
  padding-left: 12px;

  &:hover {
    border: 2px solid orange;
  }
`;

const SearchIconsHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #febd69;
  width: 50px;
  height: 100%;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;

  &:hover {
    border: 2px solid orange;
    cursor: pointer;
  }
`;

const indiaStyle = {
  display: "flex",

  width: "22px",

  height: "22px",
  alignItems: "center",

  marginLeft: "12px",
  justifyContent: "center",
};

const Launguage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

// =======================================

// right section

const Right = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 12px;

  align-items: center;
`;

const LoginSection = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;

  flex-direction: column;
  padding: 2px;

  &:hover {
    outline: 1px solid white;
    cursor: pointer;
  }
`;

const CardSection = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  justify-content: center;

  &:hover {
    outline: 1px solid white;
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to={"/"}>
            <Logo>
              <Vijay>விஜய்</Vijay>
              <AmazonLogo src={LogoAmazon} alt="VijayAmazon" />
            </Logo>
          </Link>
          <HiOutlineLocationMarker
            style={IconStyle}
            color="inherit"
            fontSize={"25px"}
          />
          <UsernameLocation>
            <Text1>Hello Vijay !</Text1>
            <Text2>Select Your Address</Text2>
          </UsernameLocation>
        </Left>
        <Center>
          <SearchHolder>
            <Selection>
              <Options value="electromic">Electrionics</Options>
              <Options value="homeapplience">Home Applience</Options>
              <option value="mobiles">Mobiles</option>
              <option value="dress">Dress</option>
              <option value="toyssports">Toys & Sports</option>
            </Selection>
            <Input type="text" placeholder="Search ...." />{" "}
            <Link to={"/search"}>
              <SearchIconsHolder>
                <BsSearch fontSize={"20px"} color="black" />
              </SearchIconsHolder>
            </Link>
          </SearchHolder>

          <Launguage>
            <img
              style={indiaStyle}
              src="https://cdn-icons-png.flaticon.com/512/330/330439.png"
              alt="india"
            />

            <span>EN</span>
            <AiOutlineDown />
          </Launguage>
        </Center>
        <Right>
          <Link to={"/login"}>
            <LoginSection>
              <Text1>hello , signin</Text1>
              <Text2>Account & Lists</Text2>
            </LoginSection>
          </Link>

          <LoginSection>
            <Text1>Returns</Text1>
            <Text2>& Orders</Text2>
          </LoginSection>
          <Link to={"/cart"}>
            <CardSection>
              <AiOutlineShoppingCart fontSize={"22px"} />
              <span>Cart</span>
            </CardSection>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
