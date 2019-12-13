import React, {useState} from 'react';
import { TextField } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import DeathReport from './DeathReport'
import '../css/Form.css';

const DeathForm = (props) => {
  const { deathInfo, setDeathInfo } = props
  const [calendarValue, setCalendarValue] = useState(null);

  const handleChange = (event) => {
    setDeathInfo({...deathInfo, [event.target.id]: event.target.value})
  }

  const handleDateChange = date => {
    setCalendarValue(date);
    setDeathInfo({ ...deathInfo, timeOfDeath: date });
  }

  const stepOne = () => {
    return(
      <div>
        <p>Please fill the fields below. Fields marked with * are mandatory for this report.</p>
        <div className="form-text">Your identification number *</div>
        <div>
          <TextField fullWidth id="reporterId" value={deathInfo.reporterId} variant="outlined" onChange={handleChange}></TextField>
        </div>
        <div className="form-text">Identification number of the deceased *</div>
        <div>
          <TextField fullWidth id="deceasedId" value={deathInfo.deceasedId} variant="outlined" onChange={handleChange}></TextField>
        </div>
        <div className="form-text">Date of death *</div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            value={calendarValue}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            fullWidth
            maxDate = {new Date()}
          />
        </MuiPickersUtilsProvider>
    </div>
    )
  }

  const stepTwo = () => {
    return (
      <div>
        <p>
          Please provide <b>at least one</b> type of contact information.
        </p>
        <div>
          <div className="form-text">Phone number</div>
          <div>
            <TextField
              fullWidth
              id="phone"
              value={deathInfo.phone}
              variant="outlined"
              onChange={handleChange}
            ></TextField>
          </div>
          <div className="form-text">E-mail</div>
          <div>
            <TextField
              fullWidth
              id="email"
              value={deathInfo.email}
              variant="outlined"
              onChange={handleChange}
            ></TextField>
          </div>
          <div className="form-text">Address</div>
          <div>
            <TextField
              fullWidth
              id="address"
              value={deathInfo.address}
              variant="outlined"
              onChange={handleChange}
            ></TextField>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {deathInfo.step === 1 && stepOne()}
      {deathInfo.step === 2 && stepTwo()}
      {deathInfo.step === 3 && <DeathReport info={deathInfo}/>}
    </div>
  )
}

export default DeathForm