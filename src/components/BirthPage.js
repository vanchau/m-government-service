import React from 'react';
import { Button } from '@material-ui/core';
import Form from './Form'

const BirthPage = (props) => {
  const { setShow, birthInfo, setBirthInfo } = props

  return (
    <div>
      Ikävä kuulla, että teille on käynyt vahinko <br/>
      <Button onClick={()=> setShow('frontpage')}>Back to start</Button>
      <Form info={birthInfo} setInfo={setBirthInfo}/>
    </div>
  );
}

export default BirthPage