import React from "react";
import { Grid, Button } from "@material-ui/core";

const PageActions = ({ setShow, next, previous }) => {
  return (
    <Grid container direction="row" justify="space-evenly">
      <Button
        color="default"
        variant="contained"
        onClick={() => setShow(previous)}
      >
        Back to start
      </Button>
      <Button color="primary" variant="contained" onClick={() => setShow(next)}>
        Next
      </Button>
    </Grid>
  );
};

export default PageActions;
