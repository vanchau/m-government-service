import React, { useState } from "react";
import Layout from "./Layout";
import BirthForm from "./BirthForm";
import PageActions from "./PageActions";
import ProgressBar from "./ProgressBar";

const BirthPage = props => {
  const { setShow, birthInfo, setBirthInfo } = props;
  const [errors, setErrors] = useState({})
  const numberOfSteps = 3;

  const Footer = ({ step }) => {
    const nextText = step === numberOfSteps ? "Confirm" : "Next";
    return (
      <div>
        {Object.keys(errors).length !== 0 && <p style={{color: 'red', fontSize: '10'}}>{errors[Object.keys(errors)[0]]}</p>}
        <PageActions
          info={birthInfo}
          setInfo={setBirthInfo}
          setShow={setShow}
          previousText="Previous"
          nextText={nextText}
          errors={errors}
          setErrors={setErrors}
        />
      </div>
    );
  };

  return (
    <Layout header="Report a birth">
      <ProgressBar current={birthInfo.step} total={numberOfSteps} />
      <BirthForm birthInfo={birthInfo} setBirthInfo={setBirthInfo} />
      <Footer step={birthInfo.step} />
    </Layout>
  );
};

export default BirthPage;
