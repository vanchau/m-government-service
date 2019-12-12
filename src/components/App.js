import React, { useState } from "react";
import "../css/App.css";
import { Container } from "@material-ui/core";
import FrontPage from "./FrontPage";
import BirthPage from "./BirthPage";
import DeathPage from "./DeathPage";

const App = () => {
  const [show, setShow] = useState("frontpage");

  return (
    <Container maxWidth="sm" style={{ minHeight: "100vh" }}>
      {show === "frontpage" && <FrontPage setShow={setShow} />}
      {show === "birthpage" && <BirthPage setShow={setShow} />}
      {show === "deathpage" && <DeathPage setShow={setShow} />}
    </Container>
  );
};

export default App;
