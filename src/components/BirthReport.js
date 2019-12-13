import React from "react";

import '../css/Report.css'

const BirthReport = ({ info }) => {
  return (
    <div>
      <p>Please confirm the information below. In case of mistakes, go to previous screens to correct them.</p>
      <div className='report-title'>Identification number of the reporter</div>
      <div>{info.reporterId ? info.reporterId : '-'}</div>
      <div className='report-title'>Identification number of the mother</div>
      <div>{info.motherId ? info.motherId : '-'}</div>
      <div className='report-title'>Identification number of the father</div>
      <div>{info.fatherId ? info.fatherId : '-'}</div>
      <div className='report-title'>First name of the child</div>
      <div>{info.firstName ? info.firstName : '-'}</div>
      <div className='report-title'>Last name of the child </div>
      <div>{info.lastName ? info.lastName : '-'}</div>
      <div className='report-title'>Date of birth</div>
      <div>{info.timeOfBirth ? info.timeOfBirth.getDate()+'/'+(info.timeOfBirth.getMonth()+1)+'/'+info.timeOfBirth.getFullYear() : '-'}</div>
      <div className='report-title'>Gender</div>
      <div>{info.gender ? info.gender : '-'}</div>
      <div className='report-title'>Phone number</div>
      <div>{info.phone ? info.phone : '-'}</div>
      <div className='report-title'>E-mail</div>
      <div>{info.email ? info.email : '-'}</div>
      <div className='report-title'>Address</div>
      <div>{info.address ? info.address : '-'}</div>
    </div>
  );
};

export default BirthReport;
