import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from "react-router-dom";
import Slide from '@mui/material/Slide';
import { CheckCircle } from '@mui/icons-material';
import { Typography } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SucessDialog({dialogOpen, setDialogOpen}) {
    const handleClose = () => {
    
    setDialogOpen(false);
  };

  return (
    <div>
          <Dialog 
        open={dialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"PAYMENT STATUS"}</DialogTitle>
        <DialogContent>
          <DialogContentText style={{display:"flex", alignItems: "center",flexDirection: "column"}} id="alert-dialog-slide-description">
                      <Typography style={{ color: "green", fontSize: "20px" }}>Payment is successifull!</Typography> 
                      <CheckCircle style={{ color: "green", fontSize: "100px" }} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" style={{ color: "green", fontSize: "20px", fontWeight: "bold"}}component= {Link} to ="/Home" onClick={handleClose}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
