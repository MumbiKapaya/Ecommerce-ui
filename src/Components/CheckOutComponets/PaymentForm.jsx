import React from 'react';
import styled from "styled-components";
import {Button} from "@material-ui/core"
import Select from "react-select";

const Container = styled.div`
display:flex;
flex-direction: column;
`
const ButtonContainer = styled.div`
padding:20px;
display:flex;
align-items:center;
justify-content:space-between;
`
const ProductSummary = styled.div`
  flex: 1;
  padding:20px;
  height:50vh;
  padding-bottom:13px;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`
font-weight:600;
`
const SummaryItemprice = styled.span`
font-weight:600;
`
const SelectContainer = styled.div`
padding:20px;
display:flex;
align-items:center;
justify-content:space-between;
`
const SelectTitle = styled.div`
flex: 1;
font-weight:600;
font-size:22px;`
const Options = styled.div`
flex:2;
`

function PaymentForm({ prevStep, nextStep }) {
  const options = [
    {value: 'Mtn', label:'Momo'},
    {value: 'Airtel', label:'Airtelmoney'},
    {value: 'Zamtel', label:'ZamtelMoney'},
    {value: 'Paypal', label:'paypal'},
    { value: 'Visa', label: 'VisaCard' },
  ]
  const handlePay = () => {

    nextStep();
  }
  return (
    <Container>
      <ProductSummary>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemprice>K 3000</SummaryItemprice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Delivery Amount</SummaryItemText>
              <SummaryItemprice>K 10</SummaryItemprice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemprice>K 300</SummaryItemprice>
            </SummaryItem>
            <SummaryItem type = "total">
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemText>K 2710</SummaryItemText>
        </SummaryItem>
      </ProductSummary>
       <SelectContainer>
        <SelectTitle>Payment Method</SelectTitle>
        <Options>
            <Select options={options}/>
        </Options>
      
        </SelectContainer>
      <ButtonContainer>
         <Button  onClick={()=>{prevStep()}} variant="contained" color="primary">Previous</Button>
         <Button onClick={()=>{handlePay()}}  variant ="contained" color="primary">Pay</Button>
      </ButtonContainer>
    </Container>
  )
}

export default PaymentForm