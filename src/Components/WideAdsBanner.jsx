import React from 'react'
import  styled  from 'styled-components';


const Container = styled.div`
width: 100%;
height: 280px;
object-fit: cover;
overflow: hidden;

margin: 0.4rem;
display: flex;
align-items: center;
margin-top: 1rem;
justify-content: center;
`;

const AdsBanner = styled.img`

`;

const WideAdsBanner = ({image}) => {
  return (
    <Container>

        <AdsBanner src= {image ? image:  "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ee5a127f-6e1f-42c7-ac7a-a376a5a2310c.jpg" } alt="ads" />
    </Container>
  )
}

export default WideAdsBanner