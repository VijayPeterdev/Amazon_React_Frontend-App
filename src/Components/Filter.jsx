import React, { useState } from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 7px;
  margin-top: 12px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.span`
  margin-top: 12px;
`;
const Filter = ({setFilterData,filterdata}) => {

  const FilterValue = (e) => {
    const value = e.target.value;

    setFilterData({
      ...filterdata,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Title> Filter By Category</Title>

      <Select name="category" onChange={FilterValue}>
        <option disabled selected>
          Select
        </option>
        <option>Electronics</option>
        <option>Women Shirt</option>
        <option>Mens Shirt</option>
        <option>mobile</option>
        <option>Watch</option>
      </Select>

      {/* =================================== */}
      <Title> Filter By price</Title>

      <Select name="price" onChange={FilterValue}>
        <option disabled selected>
          Select
        </option>
        <option>300Rs - 500Rs</option>
        <option>500Rs - 1000Rs</option>
        <option>1000Rs - 2000RS</option>
        <option>2000Rs- 5000Rs</option>
        <option>Over 5000</option>
      </Select>

      {/* ======================================= */}

      <Title> Filter By Color</Title>

      <Select name="color" onChange={FilterValue}>
        <option disabled selected>
          Select
        </option>
        <option>Red</option>
        <option>Blue</option>
        <option>Green</option>
        <option>Yellow</option>
        <option>Orange</option>
        <option>Black</option>
        <option>White</option>
      </Select>
    </Container>
  );
};

export default Filter;
