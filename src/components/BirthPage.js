import React from "react";
import Layout from "./Layout";
import BirthForm from "./BirthForm";
import PageActions from "./PageActions";
import ProgressBar from "./ProgressBar";

const BirthPage = props => {
  const { setShow, birthInfo, setBirthInfo } = props;
  const numberOfSteps = 3;

  const Footer = ({ step }) => {
    const nextText = step === numberOfSteps ? "Confirm" : "Next";
    return (
      <PageActions
        info={birthInfo}
        setInfo={setBirthInfo}
        setShow={setShow}
        previousText="Previous"
        nextText={nextText}
      />
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
