import React, { useState } from "react";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SiteLogoAmazon from "../Assets/amazonlogoblack.png";
import { Signup } from "../Redux/ApiRequest";

import { useDispatch } from "react-redux";

const SiteLogo = styled.img`
  width: 150px;
  margin-top: -1rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;

  margin-top: 5rem;
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
  height: 700px;
  outline: 0.5px solid #cfcccfcc;
  margin-bottom: 1rem;
`;

const Text1 = styled.h3`
  font-weight: 500;
  font-size: 22px;
`;

const Text2 = styled.span`
  font-weight: 400;
  margin-top: 12px;
  margin-bottom: 5px;
  font-size: 14px;
`;

const Input = styled.input`
  margin-top: 1rem;
  padding: 7px;
  margin-top: -0.1px;
  width: 20rem;
  height: 7rem;
  display: flex;

  /* &:active {
    border: 1px solid orange;
  } */
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
  width: 330px;
  margin-top: 1rem;
`;

const Center = styled.span`
  font-size: 12px;

  width: 300px;
  display: flex;
  align-items: center;
  margin-top: 2rem;
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

const Small = styled.span`
  font-size: 12px;
  margin-top: 12px;
  width: 350px;
`;

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    Signup(dispatch, { email, password, phonenumber, username });
  };
  return (
    <Container>
      <Vijay>விஜய் </Vijay>
      <SiteLogo src={SiteLogoAmazon} />

      <LoginHolder>
        <Text1> Create Account</Text1>
        <Text2>Your name</Text2>
        <Input
          type="text"
          placeholder=""
          onChange={(e) => setUsername(e.target.value)}
        />

        <Text2>Mobile number</Text2>
        <Input
          type="tel"
          placeholder="+91"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <Text2>Email (Optional)</Text2>
        <Input
          type="email"
          placeholder=""
          onChange={(e) => setEmail(e.target.value)}
        />

        <Text2>Password</Text2>
        <Input
          type="password"
          placeholder="at least 6 characters"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Small>Passwords must be at least 6 characters.</Small>

        <Small>
          By enrolling your mobile phone number, you consent to receive
          automated security notifications via text message from Amazon. Message
          and data rates may apply.
        </Small>
        <Button onClick={handleClick}>Continue</Button>

        <FontMini>
          Already have an account?{" "}
          <Link to={"/login"}>
            {" "}
            <span style={{ color: "blue", cursor: "pointer" }}>Sign in</span>
          </Link>{" "}
          <MdOutlineArrowRight />
        </FontMini>

        <FontMini>
          Buying for work?{" "}
          <span style={{ color: "blue", cursor: "pointer" }}>
            {" "}
            Create a free business account{" "}
          </span>{" "}
          <MdOutlineArrowRight />
        </FontMini>

        <Center>
          By creating an account or logging in, you agree to Amazon’s Conditions
          of Use and Privacy Policy.
        </Center>
      </LoginHolder>

      <HrFull />

      <Grayholder>
        <span>Conditions of Use </span>

        <span>Privacy Notice </span>

        <span>Help </span>
      </Grayholder>
    </Container>
  );
};

export default SignupPage;
