import React from "react";
import Layout from "./Layout";
import BirthForm from "./BirthForm";
import PageActions from "./PageActions";

const BirthPage = props => {
  const { setShow, birthInfo, setBirthInfo } = props;

  const Footer = () => {
    return (
      <PageActions setShow={setShow} previous="frontpage" next="frontpage" />
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
