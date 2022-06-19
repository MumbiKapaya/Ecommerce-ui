import { Badge } from "@material-ui/core";
import { Search, ShoppingCart } from "@material-ui/icons";
import React from "react";
import { Link} from "react-router-dom"
import {mobile} from "../responsive"
import styled from "styled-components";

//styled components
const Container = styled.div`
  heigth: 60px;
  ${mobile({
    height: "50px",
  })}
`;

const Left = styled.div`
  flex: 1;
  display:flex;
  align-items:center;
`;
const Language = styled.span`
  font-size: 20px;
  cursor: pointer;
  ${mobile({
   display:"none",
  })}
`;
const ContainerSearch = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 25px;
  padding: 5px;
  ${mobile({
    marginright:"2px",
  })}
`;
const Input = styled.input`
  border: none;
  padding: none;
  flex:3;
  ${mobile({
    width: "60px",
  })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  ${mobile({
    flex: 3,
    fontsize:"10px",
    justifycontent: "center",
  })}
`;
const MenuItems = styled.div`
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 10px;
  ${mobile({
    fontSize: "14px",
    fontWeight:"600",
    marginright: "10px",
 
  })}
`;
//center
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.div`
  font-weight: 900;
  ${mobile({
    fontSize: "14px",
  })}
`;

const Wrapper = styled.div`
  padding: 10px, 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    padding: "10px 0px",
    display:"flex",
  })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <ContainerSearch>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontsize: 16 }} />
          </ContainerSearch>
        </Left>
        <Center>
          <Link to="/Home" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Logo>HOME</Logo>
          </Link>
          
        </Center>
        <Right>
          <Link to="/Register" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <MenuItems>REGISTER</MenuItems>
          </Link>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <MenuItems>SIGN IN</MenuItems>
          </Link>
          <Link to ="/cart" style={{color:'inherit', textDecoration: 'inherit'}}>
            <Badge badgeContent={4} color="primary">
            <ShoppingCart />
          </Badge>
          </Link>
          
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
