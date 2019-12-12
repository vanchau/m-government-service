import React, { useState } from "react";
import "../css/App.css";
import FrontPage from "./FrontPage";
import BirthPage from "./BirthPage";
import DeathPage from "./DeathPage";

const App = () => {
  const [show, setShow] = useState('frontpage')
  const [birthInfo, setBirthInfo] = useState({
    birthStep: '',
    reporterId: '',
    motherId: '',
    fatherId: '',
    firstName: '',
    lastName: '',
    timeOfBirth: '',
    gender: ''
  })
  const [deathInfo, setDeathInfo] = useState({
    deathStep: '',
    reporterId: '',
    deceasedId: '',
    timeOfDeath: ''
  })


  return (
    <>
      {show === 'frontpage' && <FrontPage setShow={setShow}/>}
      {show === 'birthpage' && <BirthPage birthInfo={birthInfo} setBirthInfo={setBirthInfo} setShow={setShow}/>}
      {show === 'deathpage' && <DeathPage deathInfo={deathInfo} setBirthInfo={setDeathInfo} setShow={setShow}/>}
    </>
  );
};

export default App;
