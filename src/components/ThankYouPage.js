import React from "react";
import { Grid, Button } from "@material-ui/core";
import { PersonOutline, PersonAdd } from "@material-ui/icons";

import Layout from "./Layout";
import "../css/ThankYouPage.css";

const ThankYouPage = props => {
  const { setShow, type, setType, info, setInfo } = props;

  const Footer = () => {
    const handleClick = () =>{
      setShow("frontpage");
      type === "birth"
        ? setInfo({
            ...info,
            step: 1,
            reporterId: "",
            motherId: "",
            fatherId: "",
            firstName: "",
            lastName: "",
            timeOfBirth: "",
            gender: ""
          })
        : setInfo({
            ...info,
            step: 1,
            reporterId: "",
            deceasedId: "",
            timeOfDeath: ""
          });
      setType('')  
    }
    
    return(
      <Grid container direction="row" justify="center" style={{marginTop: "3rem"}}>
        <Button color="primary" variant="contained" onClick={handleClick} style={{width: "7rem"}}>
          Back to start
        </Button>
      </Grid>
      )}

  return (
    <Layout header="M-Government report">
      <div>
        {type==='birth' && <PersonAdd className="person-icon"/>}
        {type==='death' && <PersonOutline className="person-icon"/>}
      </div>
      <div style={{padding:"10%"}}>Thank you for your report to the M-Government system.</div>
      <Footer/>
    </Layout>
  );
};

export default ThankYouPage;
