import React from 'react';
import { TextField } from '@material-ui/core';
import '../css/Form.css';

const BirthForm = (props) => {
  const { setShow, birthInfo, setBirthInfo } = props

  const stepOne = () => {
    return(
      <div>
        <div className="form-text">Your identification number *</div>
        <div>
          <TextField fullWidth id="outlined-basic" label="" variant="outlined"></TextField>
        </div>
        <div className="form-text">Mother's identification number *</div>
        <div>
          <TextField fullWidth id="outlined-basic" label="" variant="outlined"></TextField>
        </div>
        <div className="form-text">Father's identification number *</div>
        <div>
          <TextField fullWidth id="outlined-basic" label="" variant="outlined"></TextField>
        </div>
    </div>
    )
  }

  const stepTwo = () => {
    return(
      <div>
        <p>Please fill the fields below. Fields marked with * are mandatory for this report.</p>
        <div className="form-text">Baby's first name *</div>
        <div>
          <TextField fullWidth id="outlined-basic" label="" variant="outlined"></TextField>
        </div>
        <div className="form-text">Baby's last name *</div>
        <div>
          <TextField fullWidth id="outlined-basic" label="" variant="outlined"></TextField>
        </div>
        <div className="form-text">Gender *</div>
        <div>
          <TextField fullWidth id="outlined-basic" label="" variant="outlined"></TextField>
        </div>
    </div>
    )
  }

  const stepThree = () => {
    return(
      <div>
        <div>Please confirm the information below. In case of mistakes, go to previous screens to correct them.</div>
        <div className="form-text">Baby's first name *</div>
        <div>
          <TextField fullWidth id="outlined-basic" label="" variant="outlined"></TextField>
        </div>
        <div className="form-text">Baby's last name *</div>
        <div>
          <TextField fullWidth id="outlined-basic" label="" variant="outlined"></TextField>
        </div>
        <div className="form-text">Gender *</div>
        <div>
          <TextField fullWidth id="outlined-basic" label="" variant="outlined"></TextField>
        </div>
    </div>
    )
  }




  return (
    <div>
      {birthInfo.birthStep === 1 && stepOne()}
      {birthInfo.birthStep === 2 && stepTwo()}
      {birthInfo.birthStep === 3 && stepThree()}
    </div>
  );
}

export default BirthForm