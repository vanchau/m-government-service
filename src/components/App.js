import React, { useState } from "react";
import "../css/App.css";
import FrontPage from "./FrontPage";
import BirthPage from "./BirthPage";
import DeathPage from "./DeathPage";
import ThankYouPage from "./ThankYouPage";

const App = () => {
  const [show, setShow] = useState('frontpage')
  const [type, setType] = useState('')
  
  const [birthInfo, setBirthInfo] = useState({
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
    step: 1,
    reporterId: '',
    deceasedId: '',
    timeOfDeath: ''
  })

  return (
    <>
      {show === 'frontpage' && <FrontPage setType={setType} setShow={setShow}/>}
      {show === 'birthpage' && <BirthPage type={type} setType={setType} birthInfo={birthInfo} setBirthInfo={setBirthInfo} setShow={setShow}/>}
      {show === 'deathpage' && <DeathPage type={type} setType={setType} deathInfo={deathInfo} setDeathInfo={setDeathInfo} setShow={setShow}/>}
      {(show === 'thankyoupage' && type==='birth') && <ThankYouPage type={type} setType={setType} setShow={setShow} info={birthInfo} setInfo={setBirthInfo}/>}
      {(show === 'thankyoupage' && type==='death') && <ThankYouPage type={type} setType={setType} setShow={setShow} info={deathInfo} setInfo={setDeathInfo}/>}
    </>
  );
};

export default App;
