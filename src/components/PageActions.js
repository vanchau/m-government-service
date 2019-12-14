import React, {useState} from "react";
import { Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import validateBirthForm from '../utils/validateBirthForm.js'
import validateDeathForm from '../utils/validateDeathForm.js'

const PageActions = ({ type, info, setInfo, setShow, previousText, nextText, setErrors }) => {

  const [open, setOpen] = useState(false);

  const handleNext = () => {
    const validationErrors = (type === 'birth') ? validateBirthForm(info) : validateDeathForm(info)
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors)
    }
    else {
      setErrors({})
      if (type === "birth" && ((info.step === 1 || info.step === 2) || info.step === 3)) {
        setShow("birthpage");
        setInfo({ ...info, step: info.step + 1 });
      } 
      if (type === "death" && (info.step === 1 || info.step === 2)) {
        setShow("deathpage");
        setInfo({ ...info, step: info.step + 1 });
      }  
      if ((type === "birth" && info.step === 4) || (type === "death" && info.step === 3)) {
        setShow("thankyoupage");
      };
    }
  }

  const handlePrevious = () => {
    setErrors({})
    if (type === "birth" && ((info.step === 2 || info.step === 3) || info.step === 4 )) {
      setShow("birthpage");
      setInfo({ ...info, step: info.step - 1 });
    } else if (type === "death" && (info.step === 2 || info.step === 3)) {
      setShow("deathpage");
      setInfo({ ...info, step: info.step - 1 });
    }
  }

    const handleNo = () => {
      setOpen(false);
    };

    const handleYes = () => {
      setOpen(false)
      setShow("frontpage");
      type === "birth"
        ? setInfo({
            ...info,
            step: 1,
            reporterId: "",
            motherId: "",
            fatherId: "",
            firstName: "",
            lastName: "",
            timeOfBirth: "",
            gender: "",
            phone: "",
            email: "",
            address: ""
          })
        : setInfo({
            ...info,
            step: 1,
            reporterId: "",
            deceasedId: "",
            timeOfDeath: "",
            phone: "",
            email: "",
            address: ""
          })
    };

  return (
    <Grid container direction="row" justify="space-between" style={{marginTop: "3rem"}}>
      <Button color="default" variant="contained" onClick={() => info.step === 1 ? setOpen(true) : handlePrevious()} style={{width: "7rem"}} >
        {previousText || `Previous`}
      </Button>
      <Button color="primary" variant="contained" onClick={handleNext} style={{width: "7rem"}}>
        {nextText || `Next`}
      </Button>
      <Dialog
        open={open}
        onClose={handleNo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Back to front page?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Continuing to front page will discard all the information on the form. Do you still want to continue to front page?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNo} color="primary" autoFocus>
            No
          </Button>
          <Button onClick={handleYes} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default PageActions;
