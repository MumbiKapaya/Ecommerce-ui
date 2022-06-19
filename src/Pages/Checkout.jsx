import React, {useState} from 'react'
import {Paper, Stepper, Step, StepLabel, Typography} from "@material-ui/core"
import useStyles from "./styles"
import SucessDialog from '../Components/SucessDialog';
import AddressForm from "../Components/CheckOutComponets/AddressForm";
import PaymentForm from "../Components/CheckOutComponets/PaymentForm";

const steps = ["Address", "payment Method"];

const Checkout = () => {
    const classes = useStyles()
    const [activeStep, setActiveStep] = useState(0)
    const [dialogOpen, setDialogOpen] = useState(true);
    const [deliveryData, setDeliveryData] = useState({});

    const nextStep = () =>setActiveStep((prevActiveStep)=>prevActiveStep + 1);
    const prevStep = () =>setActiveStep((prevActiveStep)=>prevActiveStep - 1);
    const next = (data) => {
        setDeliveryData(data);
        nextStep();
    }
    const Form = () => (
        activeStep === 0
            ? <AddressForm next={ next} />
            : <PaymentForm nextStep={nextStep} prevStep={ prevStep} deliveryData={ deliveryData } />
    )
    
  return (
      <>
          <div className={classes.toolbar} />
          <main className={classes.layout} >
              <Paper className={classes.paper}>
                  <Typography variant="h4" align="center"> Checkout</Typography>
                  <Stepper activeStep={activeStep} className={classes.stepper}>
                      {steps.map((step) => (
                          <Step key ={step}>
                              <StepLabel>{step}</StepLabel>
                          </Step>
                      ))}
                  </Stepper>
                  { activeStep === steps.length?<SucessDialog setDialogOpen = {setDialogOpen} dialogOpen = {dialogOpen} ></SucessDialog> : <Form />}
              </Paper>
              
          </main>
      </>
  )
}

export default Checkout