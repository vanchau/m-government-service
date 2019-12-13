import React, { useState } from "react";
import Layout from "./Layout";
import BirthForm from "./BirthForm";
import PageActions from "./PageActions";
import ProgressBar from "./ProgressBar";
import Help from "./Help";

const BirthPage = props => {
  const { type, setType, setShow, birthInfo, setBirthInfo } = props;
  const [errors, setErrors] = useState({})
  const numberOfSteps = 4;

  const Footer = ({ step }) => {
    const nextText = step === numberOfSteps ? "Confirm" : "Next";
    return (
      <PageActions 
        type={type}
        setType={setType}
        info={birthInfo}
        setInfo={setBirthInfo}
        setShow={setShow}
        previousText="Previous"
        nextText={nextText}
        setErrors={setErrors}
      />
    );
  };

  return (
    <Layout header="Report a birth">
      <Help>
        {birthInfo.step === 1 ?
        'Identification numbers are unique for each person and can be found from the national identity card.' 
        : 
        birthInfo.step === 2 ?
        'You can give multiple first names by separating them with a space, for example "Adilah Thandiwe".' : 
        birthInfo.step === 3 ?
        'Contact information is needed in case of follow-up questions or further action. If you do not have any contact information of your own, you can provide the number of a community phone or the contact information of a member of your community who knows you.' :
        'The following form will be sent to the population information system. Please check the information carefully and press confirm to send.'}
      </Help>
      <ProgressBar current={birthInfo.step} total={numberOfSteps} />
      <BirthForm type={type} setType={setType} birthInfo={birthInfo} setBirthInfo={setBirthInfo} />
      {Object.keys(errors).length !== 0 && <p style={{color: 'red', fontSize: '10', marginTop: '2rem'}}>{errors[Object.keys(errors)[0]]}</p>}
      <Footer type={type} setType={setType} step={birthInfo.step} />
    </Layout>
  );
};

export default BirthPage;
