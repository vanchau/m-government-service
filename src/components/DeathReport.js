import React from "react";

const DeathReport = ({ info }) => {

  return (
    <div>
      <p>Please confirm the information below. In case of mistakes, go to previous screens to correct them.</p>
      <div className='report-title'>Reporter's identification number</div>
      <div>{info.reporterId ? info.reporterId : '-'}</div>
      <div className='report-title'>Identification of the deceased</div>
      <div>{info.deceasedId ? info.deceasedId : '-'}</div>
      <div className='report-title'>Date of death</div>
      <div>{info.timeOfDeath ? info.timeOfDeath.getDate()+'/'+(info.timeOfDeath.getMonth()+1)+'/'+info.timeOfDeath.getFullYear() : '-'}</div>
      <div className='report-title'>Phone number</div>
      <div>{info.phone ? info.phone : '-'}</div>
      <div className='report-title'>E-mail</div>
      <div>{info.email ? info.email : '-'}</div>
      <div className='report-title'>Address</div>
      <div>{info.address ? info.address : '-'}</div>
    </div>
  );
};

export default DeathReport;
