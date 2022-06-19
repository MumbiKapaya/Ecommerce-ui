import styled from "styled-components"
import { mobile } from "../responsive"
import {Link} from "react-router-dom"
const Container = styled.div`
  width: 100%;
  height: 100vh;
  border: 2px solid #e3985a;
  background: url("https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80")
    no-repeat center center fixed;

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: #352f45;
  ${mobile({
    width: "80%",
  })}
`;

const Title = styled.h1`
  color: white;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 5px 0px;
  padding: 20px;
  ${mobile({
    height:"10px",
  })}
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #675e7e;
  color: white;
  cursor: pointer;
  margin-bottom:10px;
`;
const RedirectLink = styled.a`
    margin:5px;
    font-size:12;
    color:white;
    cursor:pointer;
    text-decoration:underline;
    font-weight:600;
 `

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="password" />
          <Link to= "/Home" style={{color:'inherit', textDecoration:'inherit'}}>
            <Button>LOGIN</Button>
          </Link>
          <Link to= "/Home" style= {{color:'inherit', textDecoration:'inherit'}}>
            <RedirectLink>DO NOT HAVE ACCOUNT</RedirectLink>
          </Link>
          <Link to ="/Register" style={{color:'inherit', textDecoration:'inherit'}}>
            <RedirectLink>CREATE A NEW ACCOUNT</RedirectLink>
          </Link>
          
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login