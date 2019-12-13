import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { PersonOutline, PersonAdd } from "@material-ui/icons";

import "../css/FrontPage.css";
import Layout from "./Layout";
import Help from "./Help";

const FrontPage = props => {
  const { setShow, setType } = props;

  const Footer = () => (
    <h3 style={{padding: "10%", textAlign: "center"}}>
      If you need help, tap{" "}
      <Help>M-Government Report is a service for reporting a birth or a death in Namibia. To start, press Report a birth or Report a death. All provided information will be sent to the authorities. <br/><br/> Tap elsewhere to close this window.</Help> at
      any time.
    </h3>
  );

  const handleClickBirth = () =>{
    setShow('birthpage')
    setType('birth')
  }

  const handleClickDeath = () =>{
    setShow('deathpage')
    setType('death')
  }

  return (
    <Layout header="M-Government Report">
      <div>
        <Card className="icon-card" onClick={handleClickBirth}>
          <CardContent>
            <PersonAdd className="card-icon" />
            <div className="card-text">Report a birth</div>
          </CardContent>
        </Card>
        <Card onClick={handleClickDeath}>
          <CardContent>
            <PersonOutline className="card-icon" />
            <div className="card-text">Report a death</div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </Layout>
  );
};

export default FrontPage;
