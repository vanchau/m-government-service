import React from 'react';
import { TextField } from '@material-ui/core';
import DeathReport from './DeathReport'
import '../css/Form.css';

const DeathForm = (props) => {
  const { deathInfo, setDeathInfo } = props

  const handleChange = (event) => {
    setDeathInfo({...deathInfo, [event.target.id]: event.target.value})
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
        <div className="form-text">Time of death *</div>
        <div>
          <TextField fullWidth id="timeOfDeath" value={deathInfo.timeOfDeath} variant="outlined" onChange={handleChange}></TextField>
        </div>
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