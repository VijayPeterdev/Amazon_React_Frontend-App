import React from "react";
import styled from "styled-components";
import SearchResultProduct from "./SearchResultProduct";
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchDetails = () => {
  return (
    <Container>
      <span>RESULTS</span>

      <Link  to={"/product/:id"}  style={{color:"inherit",listStyle:"none"}}>
      <SearchResultProduct
        crossprice={"25,000"}
        productimage={
          "https://m.media-amazon.com/images/I/71x+m2-yb7L._AC_UY327_FMwebp_QL65_.jpg"
        }
        productname="Nokia G21 Android Smartphone, Dual SIM, 3-Day Battery Life, 6GB RAM + 128GB Storage, 50MP Triple AI Camera | Nordic Blue"
        offer={"20"}
        productprice={"23,000"}
        reviewcount={"2000"}
      />
</Link>
      <SearchResultProduct
        crossprice={"25,000"}
        productimage={
          "https://m.media-amazon.com/images/I/611VHOvjkES._AC_UY327_FMwebp_QL65_.jpg"
        }
        productname="HP Pavilion Gaming 11th Gen Intel Core i5 15.6(39.6cm) FHD Gaming Laptop (8GB RAM/512GB SSD/RTX 3050 4GB Graphics/144 Hz/B&O/Windows 10 Home/MS"
        offer={"10"}
        productprice={"43,000"}
        reviewcount={"700"}
      />

<SearchResultProduct
        crossprice={"25,000"}
        productimage={
          "https://m.media-amazon.com/images/I/71x+m2-yb7L._AC_UY327_FMwebp_QL65_.jpg"
        }
        productname="Nokia G21 Android Smartphone, Dual SIM, 3-Day Battery Life, 6GB RAM + 128GB Storage, 50MP Triple AI Camera | Nordic Blue"
        offer={"20"}
        productprice={"23,000"}
        reviewcount={"2000"}
      />

      <SearchResultProduct
        crossprice={"25,000"}
        productimage={
          "https://m.media-amazon.com/images/I/611VHOvjkES._AC_UY327_FMwebp_QL65_.jpg"
        }
        productname="HP Pavilion Gaming 11th Gen Intel Core i5 15.6(39.6cm) FHD Gaming Laptop (8GB RAM/512GB SSD/RTX 3050 4GB Graphics/144 Hz/B&O/Windows 10 Home/MS"
        offer={"10"}
        productprice={"43,000"}
        reviewcount={"700"}
      />

<SearchResultProduct
        crossprice={"25,000"}
        productimage={
          "https://m.media-amazon.com/images/I/71x+m2-yb7L._AC_UY327_FMwebp_QL65_.jpg"
        }
        productname="Nokia G21 Android Smartphone, Dual SIM, 3-Day Battery Life, 6GB RAM + 128GB Storage, 50MP Triple AI Camera | Nordic Blue"
        offer={"20"}
        productprice={"23,000"}
        reviewcount={"2000"}
      />

      <SearchResultProduct
        crossprice={"25,000"}
        productimage={
          "https://m.media-amazon.com/images/I/611VHOvjkES._AC_UY327_FMwebp_QL65_.jpg"
        }
        productname="HP Pavilion Gaming 11th Gen Intel Core i5 15.6(39.6cm) FHD Gaming Laptop (8GB RAM/512GB SSD/RTX 3050 4GB Graphics/144 Hz/B&O/Windows 10 Home/MS"
        offer={"10"}
        productprice={"43,000"}
        reviewcount={"700"}
      />
    </Container>
  );
};

export default SearchDetails;
