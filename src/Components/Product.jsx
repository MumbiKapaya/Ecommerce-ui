import React from "react";
import { Link } from "react-router-dom";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const InfoContainer = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #edf9fa;
  position: relative;
  &:hover ${InfoContainer} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 80%;
  width: 80%;
  object-fit: cover;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #f777d9;
    transform: scale(1.2);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      
      <Image src={item.ImageSrc} />
      <InfoContainer>
          <Icon>
          <ShoppingCartIcon />
        </Icon>
        <Icon>
          <Link to= "/product/:id" style={{color: 'inherit', textDecoration: 'inherit' }}>
          <SearchOutlinedIcon />
          </Link>
        </Icon>
        <Icon>
          <FavoriteOutlinedIcon />
        </Icon>
        </InfoContainer>
        
    </Container>
  );
};

export default Product;
