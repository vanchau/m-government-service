import React from 'react';
import {Card, Button} from '@material-ui/core';

const DeathPage = (props) => {
  const { setShow } = props

  return (
    <Card>
      died
      <Button onClick={()=> setShow('frontpage')}>Back to start</Button>
    </Card>
  );
}

export default DeathPage