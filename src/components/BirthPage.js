import React from "react";
import { Card, Button } from "@material-ui/core";

const BirthPage = props => {
  const { setShow } = props;

  return (
    <Card>
      <h3>M2 Government report service</h3>
      Ikävä kuulla, että teille on käynyt vahinko
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
    </Card>
  );
};

export default BirthPage;
