import React from 'react'
import  styled  from 'styled-components';
import SearchDetails from '../Components/SearchDetails';



const GridContainer = styled.div`
display: grid;
grid-template-columns: 1.2fr 4fr;
margin-top: 8rem;
`;


const SearchResult = () => {
  return (
    <GridContainer>
        <span>Left</span>
        <SearchDetails/>



    </GridContainer>
  )
}

export default SearchResult