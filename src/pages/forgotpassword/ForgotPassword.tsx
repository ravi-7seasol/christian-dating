import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Buttons from "../../components/Buttons";
import InputField from "../../components/Inputfield";
import { ApiPost } from "../../helper/API/ApiData";
import { xwwwFormUrlencoded } from "../../helper/utils";
import Header from "../../layouts/header/Header";
import { setIsLoading } from "../../redux/actions/loadingAction";

const ForgotPassword = () => {

  const dispatch = useDispatch()
  const [emailData, setEmailData] = useState({
    email: "",
  });
  const [successMsg, setSuccessMsg] = useState("");
  const [formErrors, setFormErrors] = useState<any>()

  const onInputValueChange = (e: any) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value
    })
  }

  const validation = () => {
    let flag = false
    const error: any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailData.email) {
      error.email = "Please Enter Email ";
      flag = true
    } else if (!emailData.email.match(regex)) {
      error.email = "Enter Valid Email";
      flag = true
    }

    setFormErrors(error)

    return flag;
  }



  const forgotPassword = () => {
    if (validation()) {
      return
    }

    dispatch(setIsLoading(true))
    const body = xwwwFormUrlencoded(emailData);
    ApiPost('forgotpassword', body)
      .then((res: any) => {
        console.log("RES", res);
        dispatch(setIsLoading(false))
        if (res.status === "true") {
          dispatch(setIsLoading(false))
          setSuccessMsg(res.msg);
          setFormErrors("")
        }


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
                  successMsg && < label className="SuccessMsg"><FontAwesomeIcon icon={faCheckCircle} /> {successMsg}</label>
                }
                {
                  formErrors?.email !== undefined && < label className="ErrMsg"><FontAwesomeIcon icon={faTimesCircle} /> {formErrors.email}</label>
                }



                <div style={{ marginTop: "9rem" }}>
                  <Buttons
                    children="Send Email"
                    onClick={() => { forgotPassword() }}
                    ButtonStyle="login-btn animation"
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
