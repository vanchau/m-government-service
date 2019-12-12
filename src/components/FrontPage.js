import React from 'react';
import { Card, Button } from '@material-ui/core';
import {PersonOutline, PersonAdd} from '@material-ui/icons';

const FrontPage = (props) => {
  const { setShow } = props

  return (
    <div>
      <Card onClick={() => setShow('birthpage')}>
        <PersonAdd/>
      </Card>
      <Card onClick={() => setShow('deathpage')}>
        <PersonOutline/>
      </Card>
    </div>
  );
}

export default FrontPage