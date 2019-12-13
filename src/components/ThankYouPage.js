import React from "react";
import { Grid, Button } from "@material-ui/core";
import { PersonOutline, PersonAdd } from "@material-ui/icons";

import Layout from "./Layout";
import "../css/ThankYouPage.css";

const ThankYouPage = props => {
  const { setShow, type, setType, info, setInfo } = props;
  const id = Math.floor(Math.random() * 1000000000);
  const header = () => {
    return(
    type==='birth' 
    ? "Birth successfully reported"
    : "Death successfully reported"
    )  
  }
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
        <Button color="primary" variant="contained" onClick={handleClick} style={{width: "12rem"}}>
          Back to start
        </Button>
      </Grid>
      )}

  return (
    <Layout header={header()}>  
      {type==='birth' && <PersonAdd className="person-icon"/>}
      {type==='death' && <PersonOutline className="person-icon"/>}
      <div style={{padding:"0% 10%", textAlign:"center"}}>Thank you for your report to the M-Government Service.</div>
      <div style={{padding:"0% 10%", textAlign:"center"}}>{`Identification number of the report: #${id}`}</div>
      <Footer/>
    </Layout>
  );
};

export default ThankYouPage;
