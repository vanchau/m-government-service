import React from 'react';
import { Card, Button } from '@material-ui/core';

const BirthPage = (props) => {
  const { setShow } = props

  return (
    <Card>
      Ikävä kuulla, että teille on käynyt vahinko
      <Button onClick={()=> setShow('frontpage')}>Back to start</Button>
    </Card>
  );
}

export default BirthPage