import React from "react";
import Banner from "../Components/Banner";
import HomeProductCard from "../Components/HomeProductCard";
import styled from "styled-components";
import ProductSlider from "../Components/ProductSlider";
import WideAdsBanner from "../Components/WideAdsBanner";
import SingleAdsBanner from "../Components/AdsBanner/SingleAdsBanner";
import { Link } from 'react-router-dom';

import Me from '../Assets/me.jpg'

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
  filter: brightness(0.9);
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
     
        <HomeProductCard  cardtitle={"Revamp your home in style"}  productImage={"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_High._SY232_CB670263840_.jpg"} productname={"Bedsheets, curtains"} productImage2={"https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/MSO/Dec/372X232_AC_Fridge._SY232_CB620369430_.jpg"}productname2={"Fridge 30% Off"} productImage3={"https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/372X232_4._SY232_CB606110532_.jpg"} productname3={"Furniture best offer"} productImage4={"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_High._SY232_CB670263840_.jpg"} productname4={"Light Solutions"}/>
 
        <HomeProductCard  cardtitle={"Electronics devices for home office"} productImage={"https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc_5._SY232_CB655805757_.jpg"} productname={"Smart Watch & Fitness"} productImage2={"https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc_6._SY232_CB655805757_.jpg"} productname2={"Tablets"} productImage3={"https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc_7._SY232_CB655805757_.jpg"} productname3={"Laptops"} productImage4={"https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc_8._SY232_CB655805757_.jpg"} productname4={"Monitors 20% Off"}/>
        <HomeProductCard  cardtitle={"premium quality | Vijay Brand"} productImage={"https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/MSO/Dec/186x116_bed_new._SY232_CB620419720_.jpg"} productname={"Home Product"} productImage2={"https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/MSO/Dec/372X232_fashion._SY232_CB620369430_.jpg"}  productname2={"Fashion"} productImage3={"https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/MSO/Dec/372X232_Grocery._SY232_CB620369430_.jpg"} productname3={"Daily Essential"}  productImage4={"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg"} productname4={"Washing Machines"}/>
        <ColumnSection>
          <SigninCard>
            <h2>Sign in for your best experience</h2>
            <Link to={"/login"}><SignBtn>Sign in Securely</SignBtn></Link>
          </SigninCard>
          <SponserAds
            src={Me}
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
        <HomeProductCard  cardtitle={"Top picks for your home"} productImage={"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg"} productname={"Air Conditioners"} productImage2={"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg"} productname2={"Refrigerators"}  productImage3={"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg"} productname3={"Microwaves"} productImage4={"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-372-232._SY232_CB636048992_.jpg"} productname4={"Fashion Jewellery"}/>
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
        <HomeProductCard cardtitle={"Shop for your baby by age"} productImage={"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/2X/0-6_months._SY232_CB667649344_.jpg"} productname={"0-6 Months"}  productImage2={"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/2X/6-12_months._SY232_CB667649344_.jpg"} productname2={"6-12 Months"} productImage3={"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/12-18_months._SY232_CB667649399_.jpg"} productname3={"12-18 Months"} productImage4={"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/18-24_months._SY232_CB667649399_.jpg"} productname4={"18-24 Months"}/>
        <HomeProductCard cardtitle={"Birthday store"} productImage={"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_1QC2_2x._SY232_CB662999952_.jpg"} productname={"Gift for men"} productImage2={"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_2QC2_2x._SY232_CB662999952_.jpg"} productname2={"Gift for Women"} productImage3={"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_3QC2_2x._SY232_CB662999952_.jpg"} productname3={"Gift for Boy"} productImage4={"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_4QC2_2x._SY232_CB662999955_.jpg"} productname4={"Gift for girl"} />
        <HomeProductCard  cardtitle={"Bring joy with the perfect wedding gifts"} productImage={"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/rev/Dinner_2x._SY232_CB653463607_.jpg"} productname={"Dinner set"} productImage2={"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/rev/Kitchen_2x._SY232_CB653463607_.jpg"} productname2={"Kitchen Appliances"} productImage3={"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/rev/Jewellery_2x._SY232_CB653463607_.jpg"} productname3={"Jewellery"} productImage4={"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/rev/Gift_card_2x._SY232_CB653463607_.jpg"} productname4={"Gift card"}/>
      </GridWrapper>
    
    </Container>
  );
};

export default Home;
