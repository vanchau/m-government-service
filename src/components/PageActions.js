import React from "react";
import { Grid, Button } from "@material-ui/core";
import validateBirthForm from '../utils/validateBirthForm.js'

const PageActions = ({ info, setInfo, setShow, previousText, nextText, errors, setErrors }) => {
  const handleNext = () => {
    const validationErrors = validateBirthForm(info)
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors)
    }
    else {
      setErrors({})
      if (info.type === "birth" && (info.step === 1 || info.step === 2)) {
        setShow("birthpage");
        setInfo({ ...info, step: info.step + 1 });
      } else if (info.type === "death" && info.step === 1) {
        setShow("deathpage");
        setInfo({ ...info, step: info.step + 1 });
      } else {
        setShow("frontpage");
        info.type === "birth"
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
    }
  };

  const handlePrevious = () => {
    if (info.type === "birth" && (info.step === 2 || info.step === 3)) {
      setShow("birthpage");
      setInfo({ ...info, step: info.step - 1 });
    } else if (info.type === "death" && info.step === 2) {
      setShow("deathpage");
      setInfo({ ...info, step: info.step - 1 });
    }
    if (info.step === 1) {
      setShow("frontpage");
      info.type === "birth"
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
    <Grid container direction="row" justify="space-evenly">
      <Button color="default" variant="contained" onClick={handlePrevious}>
        {previousText || `Previous`}
      </Button>
      <Button color="primary" variant="contained" onClick={handleNext}>
        {nextText || `Next`}
      </Button>
    </Grid>
  );
};

export default PageActions;
