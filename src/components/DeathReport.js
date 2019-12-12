import React from "react";

const DeathReport = ({ info }) => {

  return (
    <div>
      <div>Please confirm the information below. In case of mistakes, go to previous screens to correct them.</div>
      <br/>
      <div className='report-title'>Reporter's identification number</div>
      <div>{info.reporterId ? info.reporterId : '-'}</div>
      <div className='report-title'>Identification of the deceased</div>
      <div>{info.deceasedId ? info.deceasedId : '-'}</div>
      <div className='report-title'>Time of death</div>
      <div>{info.timeOfDeath ? info.timeOfDeath : '-'}</div>
    </div>
  );
};

export default DeathReport;
