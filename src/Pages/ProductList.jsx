import React from 'react'
import styled from "styled-components";
import Announcements from '../Components/Announcements';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import {mobile} from "../responsive"
import Newsletter from '../Components/Newsletter';
import Products from '../Components/Products';

const Container = styled.div`
width:100%,
`
const Title = styled.h1`
  ${mobile({
    margin: "0px",
  })}
`;
const FilterContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({
    margin: "0px",
  })}
`;
const FilterText = styled.span`
  font-size: 25px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({
    marginRight: "0px",
  })}
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({
    display: "flex",
    flexDirection:"column",
  })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  font-weight: 700;
  border-radius: 5%;
  ${mobile({
    margin: "5px 0px",
  })}
`;
const Option = styled.option`
`
const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Grey</Option>
            <Option>Blue</Option>
            <Option>Red</Option>
            <Option>Green</Option>
            <Option>Turquoise</Option>
            <Option>Pink</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (des)</Option>
          </Select>
        </Filter>
      </FilterContainer>
          <Products />
          <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList