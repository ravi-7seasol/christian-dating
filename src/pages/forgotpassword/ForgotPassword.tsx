import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Buttons from "../../components/Buttons";
import InputField from "../../components/Inputfield";
import { ApiPost } from "../../helper/API/ApiData";
import { xwwwFormUrlencoded } from "../../helper/utils";
import Header from "../../layouts/header/Header";

const ForgotPassword = () => {

  const [emailData, setEmailData] = useState({
    email: "",
  });
  const [successMsg, setSuccessMsg] = useState("");

  const onInputValueChange = (e: any) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value
    })
  }

  const forgotPassword = () => {
    const body = xwwwFormUrlencoded(emailData);
    ApiPost('forgotpassword', body)
      .then((res: any) => {
        setSuccessMsg(res.msg);
      }).catch((error) => {
        console.log(error);

      })
  }
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center main-page"
        style={{ height: "100vh" }}
      >
        <Container>
          <div className="login-card">
            <Header />
            <div className="login">
              <h2 className="forgot-password-text">Forgot password</h2>
              <form>
                <InputField
                  name="email"
                  maxLength={undefined}
                  value={emailData.email}
                  lablestyleClass="login-label"
                  InputstyleClass="login-input"
                  onChange={(e: any) => { onInputValueChange(e) }}
                  disabled={false}
                  label="Email address"
                  placeholder="email@example.com"
                  type="email"
                  fromrowStyleclass=""
                />

                <br />
                {
                  successMsg ? < label className="SuccessMsg"><FontAwesomeIcon icon={faCheckCircle} /> {successMsg}</label> : null
                }


                <div style={{ marginTop: "9rem" }}>
                  <Buttons
                    children="Log in"
                    onClick={() => { forgotPassword() }}
                    ButtonStyle="login-btn"
                    disabled={false}
                  />
                  <br />
                  <div className="text-center w-100 mt-2 dont-have-account">
                    Back to &nbsp;
                    <Link to="/" className="dont-have-account-link me-1">
                      Sign in
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            {/* <Footer /> */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default ForgotPassword;
