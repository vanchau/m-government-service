import React from "react";
import Layout from "./Layout";
import DeathForm from "./DeathForm";
import PageActions from "./PageActions";

const DeathPage = props => {
  const { setShow, deathInfo, setDeathInfo } = props;

  const Footer = () => {
    return (
      <PageActions info={deathInfo} setInfo={setDeathInfo} setShow={setShow}/>
    );
  };

  return (
    <Layout header="Report a death">
      <DeathForm deathInfo={deathInfo} setDeathInfo={setDeathInfo} />
      <Footer />
    </Layout>
  );
};

export default DeathPage;
