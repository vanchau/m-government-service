import React from 'react';
import { Button } from '@material-ui/core';
import Form from './Form'

const DeathPage = (props) => {
  const { setShow, deathInfo, setDeathInfo } = props

  return (
    <div>
      died  <br/>
      <Button onClick={()=> setShow('frontpage')}>Back to start</Button>
      <Form info={deathInfo} setInfo={setDeathInfo}/>
    </div>
  );
}

export default DeathPage