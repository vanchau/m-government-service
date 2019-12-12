import React from "react";
import { Card, Button } from "@material-ui/core";

const BirthPage = props => {
  const { setShow } = props;

  return (
    <Card>
      <h1>M2 Government report service</h1>
      Ikävä kuulla, että teille on käynyt vahinko
      <Button color="secondary" onClick={() => setShow("frontpage")}>
        Back to start
      </Button>
      <Button color="primary" onClick={() => setShow("frontpage")}>
        Next
      </Button>
    </Card>
  );
};

export default BirthPage;
