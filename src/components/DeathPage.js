import React, { useState } from "react";
import Layout from "./Layout";
import DeathForm from "./DeathForm";
import PageActions from "./PageActions";
import ProgressBar from "./ProgressBar";

const DeathPage = props => {
  const { type, setType, setShow, deathInfo, setDeathInfo } = props;
  const [errors, setErrors] = useState({})
  const numberOfSteps = 2;

  const Footer = ({ step }) => {
    const nextText = step === numberOfSteps ? "Confirm" : "Next";
    return (
      <PageActions
        type={type}
        setType={setType}
        info={deathInfo}
        setInfo={setDeathInfo}
        setShow={setShow}
        previousText="Previous"
        nextText={nextText}
        setErrors={setErrors}
      />
    );
  };

  return (
    <Layout header="Report a death">
      <ProgressBar current={deathInfo.step} total={numberOfSteps} />
      <DeathForm deathInfo={deathInfo} setDeathInfo={setDeathInfo} />
      {Object.keys(errors).length !== 0 && <p style={{color: 'red', fontSize: '10', marginTop: '2rem'}}>{errors[Object.keys(errors)[0]]}</p>}
      <Footer type={type} setType={setType} step={deathInfo.step} />
    </Layout>
  );
};

export default DeathPage;
