import React from "react";
import { Button, Grid } from "@material-ui/core";
import Layout from "./Layout";

const DeathPage = props => {
  const { setShow } = props;

  const Header = (
    <div>
      <h3>Report a death</h3>
    </div>
  );

  const Footer = () => (
    <Grid container direction="row" justify="space-evenly">
      <Button
        color="default"
        variant="contained"
        onClick={() => setShow("frontpage")}
      >
        Back to start
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setShow("frontpage")}
      >
        Next
      </Button>
    </Grid>
  );

  return (
    <Layout header={Header}>
      <p>Who died and made you the reporter?</p>
      <Footer />
    </Layout>
  );
};

export default DeathPage;
