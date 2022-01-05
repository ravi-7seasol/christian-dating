import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../../../components/Buttons";
import CheckBox from "../../../components/Checkbox";
import InputField from "../../../components/Inputfield";

const Personal = () => {
  return (
    <>
     <p className="header-text">Let’s set everything up.</p>
      <div className="login">
        <form>
          <InputField
            name=""
            maxLength={undefined}
            value={""}
            lablestyleClass="login-label"
            InputstyleClass="login-input"
            onChange={() => {
              ("");
            }}
            disabled={false}
            label="Let’s start with your name"
            placeholder="Jhon"
            type="text"
            fromrowStyleclass=""
          />
          <div>
            <label className="login-label">When were you born?</label>
            <input
              type="date"
              value="2013-01-08"
              className="login-input w-100"
            />
          </div>
          <InputField
            name=""
            maxLength={undefined}
            value={""}
            lablestyleClass="login-label"
            InputstyleClass="login-input"
            onChange={() => {
              ("");
            }}
            disabled={false}
            label="Where do you live?"
            placeholder="Town name, city"
            type="text"
            fromrowStyleclass=""
          />

          <div style={{ marginTop: "9rem" }}>
            <Buttons
              children="Log in"
              onClick={() => {}}
              ButtonStyle="login-btn"
              disabled={false}
            />
            <br />
            <div className="text-center w-100 mt-2 dont-have-account">
              Don’t have an account?{" "}
              <Link to="/signup" className="dont-have-account-link">
                Sign up here
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Personal;
