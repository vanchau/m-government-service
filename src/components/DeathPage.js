import React from "react";
import Layout from "./Layout";
import DeathForm from "./DeathForm";
import PageActions from "./PageActions";
import ProgressBar from "./ProgressBar";

const DeathPage = props => {
  const { setShow, deathInfo, setDeathInfo } = props;
  const numberOfSteps = 2;

  const Footer = ({ step }) => {
    const nextText = step === numberOfSteps ? "Confirm" : "Next";
    return (
      <PageActions
        info={deathInfo}
        setInfo={setDeathInfo}
        setShow={setShow}
        previousText="Previous"
        nextText={nextText}
      />
    );
  };

  return (
    <Layout header="Report a death">
      <ProgressBar current={deathInfo.step} total={numberOfSteps} />

      <DeathForm deathInfo={deathInfo} setDeathInfo={setDeathInfo} />
      <Footer step={deathInfo.step} />
    </Layout>
  );
};

export default DeathPage;
