import React from "react";
import { Button, Grid } from "@material-ui/core";
import Layout from "./Layout";

const BirthPage = props => {
  const { setShow } = props;

  const Header = <h3>Report a birth</h3>;
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
      <p>Ikävä kuulla, että teille on käynyt vahinko</p>
      <Footer />
    </Layout>
  );
};

export default BirthPage;
