import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcements from "../Components/Announcements";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { mobile } from "../responsive";
import Newsletter from "../Components/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    padding: "10px",
    flexDirection:"column",
  })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  ${mobile({
    width: "100%",
    height:"100%",
  })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({
    padding:"3px",
  })}
`;
const Title = styled.h1``;
const Desc = styled.p`
  font-size: 20px;
  font-weight: 200;
`;
const Price = styled.div`
  font-size: 25px;
  font-weight: 400px;
  margin-bottom:20px;
`;
const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  ${mobile({
    width: "100%",
  })}
`;

const Filter = styled.div`
display:flex;
align-items:center;
`

const ColorOption = styled.div`
width:20px;
height:20px;
margin-right:3PX;
border-radius:50%;
background-color:${props => props.color};
cursor:pointer;
`
const FilterTitle = styled.span`
font-size:20px;
font-weight:400;
margin-right:10px;
`
const FilterSize = styled.select``
const SizeOption = styled.option`
` 
const AddRemoveContainer = styled.div`
  margin-top: 20px;
  display: flex;
  width: 50%;
  justify-content: space-between;
  ${mobile({
    width: "100%",
  })}
`;
const AmountContainer = styled.div`

display:flex;
align-items:center;
justify-content:center;
font-weight:700;

`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ac8ef9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-right: 5px;
`;
const Button = styled.button`
  font-weight: 700;
  height: 30px;
  border-radius: 5px;
  border: 2px solid #118449;
  background-color: white;
  cursor: pointer;
  &:hover {
    transition: all 0.5s ease;
    transform: scale(1.2);
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.pinimg.com/originals/69/17/21/6917218df135669646d5ceae06da33f8.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Mens Denim</Title>
          <Desc>
            A "Canadian tuxedo" is a colloquial term for wearing a jean shirt or
            denim jacket with jeans.[19] The term reportedly originated in 1951
            after Bing Crosby was refused entry to a hotel in Vancouver, British
            Columbia, because he was wearing a denim top and denim bottoms.
          </Desc>
          <Price>K600</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <ColorOption color="black" />
              <ColorOption color="green" />
              <ColorOption color="red" />
              <ColorOption color="blue" />
            </Filter>
            <Filter>
                <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <SizeOption>XS</SizeOption>
                        <SizeOption>S</SizeOption>
                        <SizeOption>M</SizeOption>
                        <SizeOption>L</SizeOption>
                        <SizeOption>XL</SizeOption>
                    </FilterSize>
            </Filter>
                  </FilterContainer>
                  <AddRemoveContainer>
                      <AmountContainer>
                          <Add />
                          <Amount>4</Amount>
                          <Remove />
                      </AmountContainer>
                      <Button>ADD TO CART</Button>
            </AddRemoveContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
