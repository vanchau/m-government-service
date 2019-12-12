import React from "react";
import Layout from "./Layout";
import PageActions from "./PageActions";

const BirthPage = props => {
  const { setShow } = props;

  const Footer = () => {
    return (
      <PageActions setShow={setShow} previous="frontpage" next="frontpage" />
    );
  };

  return (
    <Layout header="Report a birth">
      <p>Ikävä kuulla, että teille on käynyt vahinko</p>
      <Footer />
    </Layout>
  );
};

export default BirthPage;
