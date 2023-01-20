import React from "react";
import Banner from "../Components/Banner";
import HomeProductCard from "../Components/HomeProductCard";
import styled from "styled-components";
import ProductSlider from "../Components/ProductSlider";
import WideAdsBanner from "../Components/WideAdsBanner";
import SingleAdsBanner from "../Components/AdsBanner/SingleAdsBanner";
import { Link } from 'react-router-dom';


const GridLayer = styled.div`
  display: grid;
  margin: 1rem;
  gap: 12px;
  margin-top: -12rem;

  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Container = styled.div`
  background-color: #eaeded;
  position: relative;
`;

const ColumnSection = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

const SigninCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  z-index: 100;
  align-items: center;
  gap: 2rem;
  height: 200px;
  padding: 10px;
  background-color: white;
`;

const SignBtn = styled.button`
  width: 100%;
  height: 40px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background-color: #ffd814;
`;

const SponserAds = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
`;

const GridWrapper = styled.div`
  gap: 1rem;
  margin: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Home = () => {
  return (
    <Container>
      <Banner />

      <GridLayer>
     
        <HomeProductCard />
 
        <HomeProductCard />
        <HomeProductCard />
        <ColumnSection>
          <SigninCard>
            <h2>Sign in for your best experience</h2>
            <Link to={"/login"}><SignBtn>Sign in Securely</SignBtn></Link>
          </SigninCard>
          <SponserAds
            src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
            alt="sponser"
          />
        </ColumnSection>
      </GridLayer>
      <ProductSlider productHolderTitle={"Today Deals"} />

      <WideAdsBanner />

      <GridWrapper>
        <SingleAdsBanner
          adsimage={
            "https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/landing/BTF_Nov22_0.5x._SY608_CB620465154_.png"
          }
          adstitle="Sell on விஜய் Amazon with 1-Click Launch Support"
          adsdetails={"Register Now and Get Special Offer CODE :VIJAYAMAZON50"}
        />
        <HomeProductCard />
        <SingleAdsBanner
          adsimage={
            "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Desktop/DeskCC-758x608_CRUSHED-S2_V2_1._SY608_CB620412632_.jpg"
          }
          adstitle="New Series CRUSHED | Watch FREE on விஜய் miniTV"
          adsdetails={"Just 200Rs to get 1 Year Subscription"}
        />
      </GridWrapper>
      <ProductSlider productHolderTitle={"Today Deals"} />
      <WideAdsBanner image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/HPBCategoryIntegration/revised/Mountain_cycle_banner_1500x300.jpg" />

      <GridWrapper>
        <HomeProductCard />
        <HomeProductCard />
        <HomeProductCard />
      </GridWrapper>
    
    </Container>
  );
};

export default Home;
