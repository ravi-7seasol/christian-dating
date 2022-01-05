import React from "react";
import Personal from "./components/Personal";

const Profile = () => {
  return (
    <>
      <div className="header">
        <div className="d-flex justify-content-between align-items-center" >
          <h1>Profile</h1>
          <div className="steps">
            <div className="step step1"></div>
            <div className="step step2"></div>
            <div className="step step3"></div>
            <div className="step step4"></div>
          </div>
        </div>
       
      </div>
      <Personal />
    </>
  );
};

export default Profile;
