import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsGrid1X2, BsViewList } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Filter from "../Components/Filter";
import GridSingleProduct from "../Components/GridSingleProduct";
import SearchResultProduct from "../Components/SearchResultProduct";

import WideAdsBanner from "../Components/WideAdsBanner";

const Container = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1.5fr 5fr;
`;

const Title = styled.span`
  margin-top: 12px;
`;

const LeftSection = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 2px 3px 7px #dbdadb99;
`;

const Select = styled.select`
  padding: 7px;
  margin-top: 12px;
`;

const SelectInput = styled.select`
  width: 150px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 12px;
`;

// =================================
const RightSection = styled.div`
  display: flex;
  margin: 1rem;
  flex-direction: column;
`;

const LayoutChange = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  color: white;

  cursor: pointer;
  position: fixed;
  top: 120px;
  right: 12px;
  background-color: orange;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Column = styled.div`
  display: flex;
  margin: 1rem;
  flex-direction: column;
`;
const ProductListPage = () => {
 
  const [gridLayout, setGridLayout] = useState(false);

  const location = useLocation();
  const categoryType = location.pathname.split("/")[2];

  const [filterdata, setFilterData] = useState({});
  const [sortdata, setSortData] = useState("newest");
  console.log(sortdata);

  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          // categoryType
          // ? `http://localhost:8080/api/products?categories=${categoryType}`
          "http://localhost:8080/api/products"
        );

        setProduct(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, []);

  // useEffect(() => {
  //   categoryType &&
  //   setFilterProduct(
  //       product.filter((item) =>
  //         Object.entries(filterdata).every(([key, value]) =>
  //           item[key].includes(value)
  //         )
  //       )
  //     );
  // }, [categoryType, filterdata, product]);

  return (
    <Container>
      <LayoutChange onClick={() => setGridLayout(!gridLayout)}>
        {gridLayout ? <BsViewList /> : <BsGrid1X2 />}
      </LayoutChange>
      <LeftSection>
        <Filter setFilterData={setFilterData} filterdata={filterdata} />
      </LeftSection>
      {/* <WideAdsBanner /> */}

      {gridLayout ? (
        <>
          <Column>
            <WideAdsBanner />

            <span>Sort Products</span>
            <SelectInput onChange={(e) => setSortData(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="asc">Price (Asc)</option>
              <option value="desc">Price (Desc) </option>
            </SelectInput>

            <Grid>
              {filterProduct &&
                filterProduct.map((product) => (
                  <Link to={`/product/${product._id}`}>
                    <GridSingleProduct
                      productname={product.productName}
                      offer={"20"}
                      productimage={product.productImage[0]}
                      reviewcount={product.productRating}
                      crossprice={product.productCrossprice}
                      productprice={product.productPrice}
                    />
                  </Link>
                ))}
              {product &&
                product.map((product) => (
                  <Link
                    to={`/product/${product._id}`}
                    style={{ color: "inherit", listStyle: "none" }}
                  >
                    <GridSingleProduct
                      productname={product.productName}
                      offer={"20"}
                      productimage={product.productImage[0]}
                      reviewcount={product.productRating}
                      crossprice={product.productCrossprice}
                      productprice={product.productPrice}
                    />
                  </Link>
                ))}
            </Grid>
          </Column>
        </>
      ) : (
        <RightSection>
          <WideAdsBanner />

          <span>Sort Products</span>
          <SelectInput onChange={(e) => setSortData(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="asc">Price (Asc)</option>
            <option value="desc">Price (Desc) </option>
          </SelectInput>
          {
            product && product.map((product) =>(

              <Link
              to={`/product/${product._id}`}
              style={{ color: "inherit", listStyle: "none" }}
            >
              <SearchResultProduct
               productname={product.productName}
               offer={"20"}
               productimage={product.productImage[0]}
               reviewcount={product.productRating}
               crossprice={product.productCrossprice}
               productprice={product.productPrice}
              />
            </Link>

            ))
           
          }
        </RightSection>
      )}
    </Container>
  );
};

export default ProductListPage;
