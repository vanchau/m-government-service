import React from "react";
import Layout from "./Layout";
import BirthForm from "./BirthForm";
import PageActions from "./PageActions";

const BirthPage = props => {
  const { setShow, birthInfo, setBirthInfo } = props;

  const Footer = () => {
    return (
      <PageActions info={birthInfo} setInfo={setBirthInfo} setShow={setShow}/>
    );
  };

  return (
    <Layout header="Report a birth">
      <BirthForm birthInfo={birthInfo} setBirthInfo={setBirthInfo} />
      <Footer />
    </Layout>
  );
};

export default BirthPage;
