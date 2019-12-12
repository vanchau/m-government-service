import React, { useState } from "react";
import "../css/App.css";
import FrontPage from "./FrontPage";
import BirthPage from "./BirthPage";
import DeathPage from "./DeathPage";

const App = () => {
  const [show, setShow] = useState('frontpage')
  const [birthInfo, setBirthInfo] = useState({
    type: 'birth',
    step: 1,
    reporterId: '',
    motherId: '',
    fatherId: '',
    firstName: '',
    lastName: '',
    timeOfBirth: '',
    gender: ''
  })
  const [deathInfo, setDeathInfo] = useState({
    type: 'death',
    step: 1,
    reporterId: '',
    deceasedId: '',
    timeOfDeath: ''
  })


  return (
    <>
      {show === 'frontpage' && <FrontPage setShow={setShow}/>}
      {show === 'birthpage' && <BirthPage birthInfo={birthInfo} setBirthInfo={setBirthInfo} setShow={setShow}/>}
      {show === 'deathpage' && <DeathPage deathInfo={deathInfo} setDeathInfo={setDeathInfo} setShow={setShow}/>}
    </>
  );
};

export default App;
