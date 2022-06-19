import React from 'react'
import {mobile} from "../responsive"
import styled from 'styled-components'
const Container = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  color:white;
  justify-content: center;
  background-color: #118449;
  font-size: 14px;
  font-weight: 500;
  ${mobile({
    width: "100%",
    height:"40px",
  })}
`;
function Announcements() {
  return (
    <Container>
    We have the best prices in town and in our new stock we have best clothes from quality suppliers all around the world. Take a look below.
    </Container>
  );
}

export default Announcements