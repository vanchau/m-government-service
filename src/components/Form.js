import React from 'react';
import { TextField } from '@material-ui/core';
import '../css/Form.css';

const Form = (props) => {
  const { setShow, info, setInfo } = props

  return (
    <div>
      <form>
        <div className="form-text">Your identification number*</div>
        <div>
          <TextField fullWidth id="outlined-basic" label="" variant="outlined"></TextField>
        </div>
      </form>
    </div>
  );
}

export default Form