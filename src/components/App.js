import React, {useState} from 'react';
import '../css/App.css';
import { Container } from '@material-ui/core';
<<<<<<< HEAD
import FrontPage from './FrontPage'
import BirthPage from './BirthPage';
import DeathPage from './DeathPage';
=======
>>>>>>> 89aab6a6a81461f3252697bbe87fcc86e8780a97

const App = () => {
  const [show, setShow] = useState('frontpage')

  return (
<<<<<<< HEAD
    <Container maxWidth="sm">    
      {show === 'frontpage' && <FrontPage setShow={setShow}/>}
      {show === 'birthpage' && <BirthPage setShow={setShow}/>}
      {show === 'deathpage' && <DeathPage setShow={setShow}/>}
=======
    <Container maxWidth="sm">
      <div>test test</div>
>>>>>>> 89aab6a6a81461f3252697bbe87fcc86e8780a97
    </Container>
  );
}

export default App;
