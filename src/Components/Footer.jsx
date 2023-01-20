import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import styled from "styled-components";
import LogoAmazon from "../Assets/amazonlogo.png";

const Container = styled.div`
  background-color: #232f3e;
  width: 100%;
  height: 400px;
  display: grid;
  padding: 0px 5rem;
  color: white;
  justify-content: center;
  align-items: center;

  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const FooterSelection = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  justify-content: center;
  padding: 3rem;
  align-items: flex-start;

  text-align: start;
`;
const FooterOption = styled.li`
  font-size: 14px;
  color: #e9e1e1;
  list-style: none;
  position: relative;

  &:hover {
    color: orange;
    cursor: pointer;
  }
`;

const UnderLine = styled.div`
  width: 100%;
  height: 2px;
  top: 12%;
  z-index: 100;
  background-color: gray;
`;

const CenterWrapper = styled.div`
  height: 100px;
  display: flex;
  gap: 2rem;
  padding: 2rem;
  justify-content: center;
  background-color: #232f3e;
`;

const Vijay = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: orange;
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

const LangBtn = styled.button`
  width: 130px;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  height: 40px;
  border: 1px solid white;
  background-color: transparent;
  cursor: pointer;
  color: white;
`;

const CountryList = styled.ul`
  list-style: none;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  display: flex;
  background-color: #232f3e;
`;

const Option = styled.li`
  list-style: none;
  color: white;
  font-size: 12px;

  &:hover {
    color: orange;
    cursor: pointer;
  }
`;

const CopyRights = styled.div`
  background-color: #232f3e;
  padding-top: 20px;

  display: flex;
  align-items: center;
  color: #dcc7c7;
  justify-content: center;
  width: 100%;
  height: 20px;
  padding-bottom: 20px;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <FooterSelection>
          <span>Get to Know Us</span>
          <FooterOption>About Us</FooterOption>
          <FooterOption>Careers</FooterOption>
          <FooterOption>Press Releases</FooterOption>
          <FooterOption>விஜய் Amazon Science</FooterOption>
        </FooterSelection>

        {/* ================== */}
        <FooterSelection>
          <span>Connect with Us</span>
          <FooterOption>Facebook</FooterOption>
          <FooterOption>twitter</FooterOption>

          <FooterOption>Linkedin</FooterOption>
          <FooterOption>விஜய் - Developer</FooterOption>
        </FooterSelection>
        {/* =========================== */}
        <FooterSelection>
          <span>Make Money with Us</span>
          <FooterOption>Sell on விஜய் Amazon</FooterOption>

          <FooterOption>Become an Affiliate</FooterOption>
          <FooterOption>Advertise Your Products</FooterOption>
          <FooterOption>விஜய் Pay on Merchants</FooterOption>
        </FooterSelection>

        {/* =================================== */}
        <FooterSelection>
          <span>Let Us Help You</span>
          <FooterOption>COVID-19 and Amazon</FooterOption>
          <FooterOption>Your Account</FooterOption>

          <FooterOption>Returns Centre</FooterOption>
          <FooterOption>Download விஜய் Amazon</FooterOption>
        </FooterSelection>
      </Container>

      <UnderLine />

      <CenterWrapper>
        <Logo>
          <Vijay>விஜய்</Vijay>
          <AmazonLogo src={LogoAmazon} alt="VijayAmazon" />
        </Logo>

        <LangBtn>
          {" "}
          <AiOutlineGlobal /> English <BsThreeDotsVertical />{" "}
        </LangBtn>
      </CenterWrapper>
      <CountryList>
        <Option>India</Option>
        <Option> Australia</Option>
        <Option>Brazil</Option>
        <Option>Canada</Option>
        <Option>China</Option>
        <Option>France</Option>
      </CountryList>

      <CopyRights>
        © 1996-2022, விஜய்Amazon.in, Inc. - Developed By Vijay
      </CopyRights>
    </>
  );
};

export default Footer;
