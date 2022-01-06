import React, { useState } from "react";
import { useNavigate } from "react-router";
import Buttons from "../../components/Buttons";
import Lifestyle from "./components/Lifestyle";
import Personal from "./components/Personal";
import Prefrences from "./components/Prefrences";
import SetProfileImage from "./components/SetProfileImage";

const Profile = () => {
  const [stepDone, setStepDone] = useState(1);
  // const [verified, setVerified] = useState<any>(false);
  const nevigate = useNavigate()
  const handleNext = () => {
    if (stepDone < 5) {
      setStepDone(stepDone + 1);
    }else{
      nevigate("/show-profile")
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
              <div className={`step ${stepDone >= 4 && "done"} `}></div>
            </div>
          </div>
        </div>
        {stepDone === 1 && <Personal />}
        {stepDone === 2 && <Prefrences />}
        {stepDone === 3 && <Lifestyle />}
        {stepDone >= 4 &&  <SetProfileImage stepDone={stepDone} />}

        <div className="login">
          <div style={{ marginTop: stepDone>4? "8rem":"4rem", marginBottom: "1rem" }}>
            <Buttons
              children={stepDone > 3 ? "See your profile!" : "Next"}
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
