import React from "react";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SiteLogoAmazon from "../Assets/amazonlogoblack.png";

const SiteLogo = styled.img`
  width: 150px;
  margin-top: -1rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;

  margin-top: 7rem;
  color: black;
  align-items: center;
  justify-content: center;
`;

const Vijay = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: orange;
`;

const LoginHolder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  justify-content: center;
  align-items: flex-start;
  height: 350px;
  outline: 0.5px solid #cfcccfcc;
  margin-bottom: 1rem;
`;

const Text1 = styled.h3`
  font-weight: 500;
  font-size: 22px;
`;

const Text2 = styled.span`
  font-weight: 400;
  font-size: 14px;
`;

const Input = styled.input`
  margin-top: 1rem;
  padding: 7px;
  width: 20rem;
  height: 7rem;
  display: flex;

  &:active {
    border: 1px solid orange;
  }

  &::placeholder {
    border: 1px solid orange;
    outline: none;
  }
`;

const Button = styled.button`
  width: 20rem;
  margin-top: 1rem;
  outline: none;
  cursor: pointer;
  border: none;
  height: 50rem;
  padding: 7px;
  background-color: #f2cc6a;
`;

const FontMini = styled.span`
  font-size: 12px;
  width: 300px;
  margin-top: 1rem;
`;

const Center = styled.span`
  font-size: 14px;
  color: #3582c9;
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

const NewtoAmazon = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const HrFull = styled.hr`
  margin-top: 2rem;
  width: 70%;
  height: 0.5px;
  outline: none;
  color: gray;

  border: 0;
  height: 2px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(193, 187, 187, 0.75),
    rgba(0, 0, 0, 0)
  );
`;

const Hr = styled.hr`
  width: 100px;
  height: 0.5px;
  outline: none;
  color: gray;

  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(185, 183, 183, 0.75),
    rgba(0, 0, 0, 0)
  );
`;

const CreateAccontBtn = styled.button`
  width: 20rem;
  margin-top: 1rem;
  outline: 0.5px solid gray;
  cursor: pointer;
  border: none;
  height: 2rem;
  margin-bottom: 1rem;
  padding: 7px;
  background-color: #eaecef;
`;

const Grayholder = styled.div`
  width: 100%;

  display: flex;

  gap: 2rem;
  font-size: 12px;
  color: gray;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #eaecef7e;
`;

const LoginPage = () => {
  return (
    <Container>
      <Vijay>விஜய் </Vijay>
      <SiteLogo src={SiteLogoAmazon} />

      <LoginHolder>
        <Text1> Sign in</Text1>
        <Text2>Email or mobile phone number</Text2>
        <Input type="text" placeholder="" />
        <Text2 style={{marginTop:"12px"}}>Password</Text2>
        <Input type="password" placeholder="" />
        <Button>Continue</Button>

        <FontMini>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </FontMini>

        <Center>
          {" "}
          <MdOutlineArrowRight /> Need help?
        </Center>
      </LoginHolder>

      <NewtoAmazon>
        <Hr />
        <span>New to Amazon?</span>
        <Hr />
      </NewtoAmazon>
      <Link  to={"/signup"}>
        <CreateAccontBtn>Create Your விஜய் Amazon Account</CreateAccontBtn>
      </Link>

      <HrFull />

      <Grayholder>
        <span>Conditions of Use </span>

        <span>Privacy Notice </span>

        <span>Help </span>
      </Grayholder>
    </Container>
  );
};

export default LoginPage;
