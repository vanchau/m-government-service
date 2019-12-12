import React from "react";
import { Button, Grid } from "@material-ui/core";
import Layout from "./Layout";
import DeathForm from "./DeathForm";
import PageActions from "./PageActions";

const DeathPage = props => {
  const { setShow, deathInfo, setDeathInfo } = props;

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
    <Layout header="Report a death">
      <DeathForm deathInfo={deathInfo} setDeathInfo={setDeathInfo} />
      <Footer />
    </Layout>
  );
};

export default DeathPage;
