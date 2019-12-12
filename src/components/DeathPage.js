import React from "react";
import { Button, Grid } from "@material-ui/core";
import Layout from "./Layout";
import PageActions from "./PageActions";

const DeathPage = props => {
  const { setShow } = props;

  const Header = (
    <div>
      <h3>Report a death</h3>
    </div>
  );

  const Footer = () => {
    return (
      <PageActions setShow={setShow} previous="frontpage" next="frontpage" />
    );
  };

  return (
    <Layout header={Header}>
      <p>Who died and made you the reporter?</p>
      <Footer />
    </Layout>
  );
};

export default DeathPage;
