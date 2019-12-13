import React, { useState } from "react";
import Layout from "./Layout";
import DeathForm from "./DeathForm";
import PageActions from "./PageActions";
import ProgressBar from "./ProgressBar";
import Help from "./Help";

const DeathPage = props => {
  const { type, setType, setShow, deathInfo, setDeathInfo } = props;
  const [errors, setErrors] = useState({})
  const numberOfSteps = 3;

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
      <Help>
      {deathInfo.step === 1 ?
      'Identification numbers are unique for each person and can be found from the national identity card.' 
      :
      deathInfo.step === 2 ? 
      'Contact information is needed in case of follow-up questions or further action. If you do not have any contact information of your own, you can provide the number of a community phone or the contact information of a member of your community who knows you.' :
      'The following form will be sent to the population information system. Please check the information carefully and press confirm to send.'}
      </Help>
      <ProgressBar current={deathInfo.step} total={numberOfSteps} />
      <DeathForm deathInfo={deathInfo} setDeathInfo={setDeathInfo} />
      {Object.keys(errors).length !== 0 && <p style={{color: 'red', fontSize: '10', marginTop: '2rem'}}>{errors[Object.keys(errors)[0]]}</p>}
      <Footer type={type} setType={setType} step={deathInfo.step} />
    </Layout>
  );
};

export default DeathPage;
