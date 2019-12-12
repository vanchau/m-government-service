import React, { useState } from "react";
import "../css/App.css";
import FrontPage from "./FrontPage";
import BirthPage from "./BirthPage";
import DeathPage from "./DeathPage";

const App = () => {
  const [show, setShow] = useState("frontpage");

  return (
    <>
      {show === "frontpage" && <FrontPage setShow={setShow} />}
      {show === "birthpage" && <BirthPage setShow={setShow} />}
      {show === "deathpage" && <DeathPage setShow={setShow} />}
    </>
  );
};

export default App;
