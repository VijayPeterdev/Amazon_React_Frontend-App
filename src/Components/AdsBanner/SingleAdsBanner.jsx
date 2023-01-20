import React from 'react'
import styled  from 'styled-components';


const Container = styled.div`
width: 100%;
align-items: center;
display: flex;
align-items: center;
background-color: white;
flex-direction: column;
padding-top: 12px;
height: 100%;


`;

const AdsTitle = styled.span`
width: 300px;
font-weight: bold;
`;

const Image = styled.img`
width: 90%;
height: 320px;
padding: 1rem;
`;

const AdsDetails = styled.span`
font-size: 14px;
color: gray;
margin-left: 16px;
margin-top: 12px;

`;
const SingleAdsBanner = ({adsimage , adstitle,adsdetails}) => {
  return (
    <Container>
        <AdsTitle>{adstitle}</AdsTitle>
        <Image src={adsimage} alt="" />
        <AdsDetails>{adsdetails}</AdsDetails>

    </Container>
  )
}

export default SingleAdsBanner