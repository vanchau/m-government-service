import React from "react";
import { Grid, Button } from "@material-ui/core";

const PageActions = ({ type, setType, info, setInfo, setShow, previousText, nextText }) => {
  const handleNext = () => {
    if (type === "birth" && (info.step === 1 || info.step === 2)) {
      setShow("birthpage");
      setInfo({ ...info, step: info.step + 1 });
    } 
    if (type === "death" && info.step === 1) {
      setShow("deathpage");
      setInfo({ ...info, step: info.step + 1 });
    }  
    if ((type === "birth" && info.step === 3) || (type === "death" && info.step === 2)) {
      setShow("thankyoupage");
    };
  }

  const handlePrevious = () => {
    if (type === "birth" && (info.step === 2 || info.step === 3)) {
      setShow("birthpage");
      setInfo({ ...info, step: info.step - 1 });
    } else if (type === "death" && info.step === 2) {
      setShow("deathpage");
      setInfo({ ...info, step: info.step - 1 });
    }
    if (info.step === 1) {
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
            gender: ""
          })
        : setInfo({
            ...info,
            step: 1,
            reporterId: "",
            deceasedId: "",
            timeOfDeath: ""
          });
    }
  };

  return (
    <Grid container direction="row" justify="space-between" style={{marginTop: "3rem"}}>
      <Button color="default" variant="contained" onClick={handlePrevious} style={{width: "7rem"}} >
        {previousText || `Previous`}
      </Button>
      <Button color="primary" variant="contained" onClick={handleNext} style={{width: "7rem"}}>
        {nextText || `Next`}
      </Button>
    </Grid>
  );
};

export default PageActions;
