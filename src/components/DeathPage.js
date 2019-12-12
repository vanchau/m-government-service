import React from "react";
import Layout from "./Layout";
import PageActions from "./PageActions";

const DeathPage = props => {
  const { setShow } = props;

  const Footer = () => {
    return (
      <PageActions setShow={setShow} previous="frontpage" next="frontpage" />
    );
  };

  return (
    <Layout header="Report a death">
      <p>Who died and made you the reporter?</p>
      <Footer />
    </Layout>
  );
};

export default DeathPage;
