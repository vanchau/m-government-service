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
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            value={calendarValue}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
    </div>
    )
  }

  return (
    <div>
      {deathInfo.step === 1 && stepOne()}
      {deathInfo.step === 2 && <DeathReport info={deathInfo}/>}
    </div>
  )
}

export default DeathForm