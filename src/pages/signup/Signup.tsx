import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../../components/Buttons";
import CheckBox from "../../components/Checkbox";
import InputField from "../../components/Inputfield";
import {
  faCheck,
  faCheckCircle,
  faCheckSquare,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = () => {
  return (
    <>
      <div className="login">
        <h2>Sign up</h2>
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
            label="Email address"
            placeholder="email@example.com"
            type="email"
            fromrowStyleclass=""
          />
          <div className="input-field">
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
              label="Password"
              placeholder="*********"
              type="password"
              fromrowStyleclass=""
            />
            <img src="./assets/images/check-one.png" alt="check" />
          </div>
          <div className="input-field">
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
              label="Confirm Password"
              placeholder="*********"
              type="password"
              fromrowStyleclass=""
            />
            <img src="./assets/images/check-one.png" alt="check" />
          </div>

          <div style={{ marginTop: "3rem" }}>
            <Buttons
              children="Sign up"
              onClick={() => {}}
              ButtonStyle="login-btn"
              disabled={false}
            />
            <div className="signup-with-social text-center mt-4">
              <span>Or sign up with socials</span>
            </div>
            <div className="signup-with-social-icons">
              <figure>
                <img src="./assets/images/facebook-icon.png" alt="icon" />
              </figure>
              <figure>
                <img src="./assets/images/instagram-icon.png" alt="icon" />
              </figure>
              <figure>
                <img src="./assets/images/gmail-icon.png" alt="icon" />
              </figure>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
