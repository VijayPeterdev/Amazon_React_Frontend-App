import React from 'react'
import  styled  from 'styled-components';
import SearchDetails from '../Components/SearchDetails';
import Filter from './../Components/Filter';



const GridContainer = styled.div`
display: grid;
grid-template-columns: 1.2fr 4fr;
margin-top: 8rem;
`;

const Wrapper = styled.div`
display: flex;
margin: 2px;
margin-left: 12px;
margin-right: -30px;
`;


const SearchResult = () => {
  return (
    <GridContainer>
      <Wrapper>
      <Filter/>
      </Wrapper>
       
        <SearchDetails/>



    </GridContainer>
  )
}

export default SearchResult