import React, {useState} from 'react';
import { Card, CardContent } from '@material-ui/core';
import { PersonOutline, PersonAdd } from '@material-ui/icons';
import '../css/FrontPage.css';

const FrontPage = (props) => {
  const { setShow } = props

  return (
    <div>
      <h3 className='card-text'>M Government Report</h3>
      <Card className='icon-card' onClick={() => setShow('birthpage')}>
        <CardContent>
          <PersonAdd className='card-icon'/>
          <div className='card-text'>Report a birth</div>
        </CardContent> 
      </Card>
      <Card onClick={() => setShow('deathpage')}>
        <CardContent>
          <PersonOutline className='card-icon'/>
          <div className='card-text'>Report a death</div>
        </CardContent> 
      </Card>
    </div>
  );
}

export default FrontPage