import React, { useState } from "react";
import Buttons from "../../components/Buttons";
import Personal from "./components/Personal";
import Prefrences from "./components/Prefrences";

const Profile = () => {
  const [stepDone, setStepDone] = useState(1);
  const handleNext = () => {
    if (stepDone < 4) {
      setStepDone(stepDone + 1);
    }
  };
  return (
    <>
      <div>
        <div className="header mt-3">
          <div className="d-flex justify-content-between align-items-center">
            <h1>Profile</h1>
            <div className="steps">
              <div className={`step ${stepDone >= 1 && "done"}`}></div>
              <div className={`step ${stepDone >= 2 && "done"} `}></div>
              <div className={`step ${stepDone >= 3 && "done"} `}></div>
              <div className={`step ${stepDone == 4 && "done"} `}></div>
            </div>
          </div>
        </div>
        {stepDone === 1 && <Personal />}
        {stepDone === 2 && <Prefrences />}

        <div className="login">
          <div style={{ marginTop: "2rem", marginBottom: "1rem" }}>
            <Buttons
              children="Next"
              onClick={() => handleNext()}
              ButtonStyle="login-btn"
              disabled={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
