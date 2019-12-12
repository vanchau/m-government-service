import React, { useState } from "react";
import {
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio
} from "@material-ui/core";
import "../css/Form.css";
import BirthReport from "./BirthReport";

const BirthForm = props => {
  const { birthInfo, setBirthInfo } = props;

  const handleChange = event => {
    setBirthInfo({ ...birthInfo, [event.target.id]: event.target.value });
  };

  const [radioValue, setRadioValue] = useState("");

  const handleRadioChange = event => {
    setRadioValue(event.target.value);
    setBirthInfo({ ...birthInfo, [event.target.name]: event.target.value });
  };

  const stepOne = () => {
    return (
      <div>
        <p>
          Please fill the fields below. Fields marked with * are mandatory for
          this report.
        </p>
        <div>
          <div className="form-text">Your identification number *</div>
          <div>
            <TextField
              fullWidth
              id="reporterId"
              value={birthInfo.reporterId}
              variant="outlined"
              onChange={handleChange}
            ></TextField>
          </div>
          <div className="form-text">Identification number of the mother*</div>
          <div>
            <TextField
              fullWidth
              id="motherId"
              value={birthInfo.motherId}
              variant="outlined"
              onChange={handleChange}
            ></TextField>
          </div>
          <div className="form-text">Identification number of the father</div>
          <div>
            <TextField
              fullWidth
              id="fatherId"
              value={birthInfo.fatherId}
              variant="outlined"
              onChange={handleChange}
            ></TextField>
          </div>
        </div>
      </div>
    );
  };

  const stepTwo = () => {
    return (
      <div>
        <p>
          Please fill the fields below. Fields marked with * are mandatory for
          this report.
        </p>
        <div className="form-text">First name of the child *</div>
        <div>
          <TextField
            fullWidth
            id="firstName"
            value={birthInfo.firstName}
            variant="outlined"
            onChange={handleChange}
          ></TextField>
        </div>
        <div className="form-text">Last name of the child</div>
        <div>
          <TextField
            fullWidth
            id="lastName"
            value={birthInfo.lastName}
            variant="outlined"
            onChange={handleChange}
          ></TextField>
        </div>
        <div className="form-text">Time of birth *</div>
        <div>
          <TextField
            fullWidth
            id="timeOfBirth"
            value={birthInfo.timeOfBirth}
            variant="outlined"
            onChange={handleChange}
          ></TextField>
        </div>
        <div className="form-text">Gender *</div>
        <RadioGroup
          aria-label="position"
          name="position"
          value={radioValue}
          onChange={handleRadioChange}
          row
        >
          <FormControlLabel
            value="Male"
            control={<Radio color="primary" />}
            label="Male"
            labelPlacement="end"
          />
          <FormControlLabel
            value="Female"
            control={<Radio color="primary" />}
            label="Female"
            labelPlacement="end"
          />
        </RadioGroup>
      </div>
    );
  };

  return (
    <div>
      {birthInfo.step === 1 && stepOne()}
      {birthInfo.step === 2 && stepTwo()}
      {birthInfo.step === 3 && <BirthReport info={birthInfo} />}
    </div>
  );
};

export default BirthForm;
