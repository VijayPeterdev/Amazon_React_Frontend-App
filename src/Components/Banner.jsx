import React from "react";
import styled from "styled-components";
import Banner1 from "../Assets/Banners/banner1.jpg";
import Banner2 from "../Assets/Banners/banner2.jpg";
import Banner3 from "../Assets/Banners/banner3.jpg";
import Banner4 from "../Assets/Banners/banner4.jpg";
import {MdOutlineArrowBackIos,  MdOutlineArrowForwardIos} from 'react-icons/md'

const Container = styled.div`
  width: 100%;
  margin-top: 4rem;
  height: 70%;
  position: relative;
 
  overflow: hidden;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;

const Slider = styled.div`
  display: flex;

  position: relative;
`;

const SlideIcon = styled.div`
width: 40px;

color: white;
height: 80px;
z-index: 100;
background-color: #a5a3a3ad;
position: absolute;
align-items: center;
justify-content: center;
left: ${(props) => props.position === "left" &&  "12px" };
right: ${(props) => props.position === "right" && "12px" };
display: flex;

border-radius: 4px;
cursor: pointer;
top: 5rem;

&:hover{
    background-color: white;
    color: black;
}
`;

const Banner = () => {
  return (
    <div>
      <Container>
        <Slider>
            <SlideIcon  position="left">
                <MdOutlineArrowBackIos/>
            </SlideIcon>
          <BannerImage src={Banner1} alt="banner1" />
          <BannerImage src={Banner2} alt="banner2" />
          <BannerImage src={Banner3} alt="banner3" />
          <BannerImage src={Banner4} alt="banner4" />
          <SlideIcon position="right" >
                <MdOutlineArrowForwardIos/>
            </SlideIcon>
        </Slider>
      </Container>
    </div>
  );
};

export default Banner;
