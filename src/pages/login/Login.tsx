import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { log } from "console";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Buttons from "../../components/Buttons";
import CheckBox from "../../components/Checkbox";
import InputField from "../../components/Inputfield";
import { ApiPost, ApiPostNoAuth } from "../../helper/API/ApiData";
import { xwwwFormUrlencoded } from "../../helper/utils";
import Header from "../../layouts/header/Header";
import AuthStorage from "../../helper/AuthStorage";
import STORAGEKEY from "../../config/APP/app.config";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })
  const [rememberMe, setRememberMe] = useState(false);


  const onInputValueChange = (e: any) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
    if (e.target.name === "rememberMe") {
      setRememberMe(e.target.checked);
    }

  }

  const handleRedirect = () => {
    navigate("/show-profile");
  };

  useEffect(() => {
    const email = AuthStorage.getStorageData(STORAGEKEY.email);
    if (email) {

      // const emailId:string = localStorage.getItem(STORAGEKEY.email) ?? '';

      //    setLoginData({ email:JSON.parse(email) , password:"" })
      // const email: string = AuthStorage.getStorageData(STORAGEKEY.email) ?? '';

      // const emailId: string = AuthStorage.getStorageData(STORAGEKEY.email) ?? '';
      setLoginData({ ...loginData, email: email });



    }
    console.log("EMAIL", localStorage.getItem(STORAGEKEY.email));


  }, [])

  const logIn = () => {

    const body = xwwwFormUrlencoded(loginData);


    ApiPost('loginuser', body)
      .then((res: any) => {
        console.log("res", res);
        if (rememberMe) {

          AuthStorage.setStorageData(STORAGEKEY.email, loginData.email, rememberMe);
        }

        if (res) {
          AuthStorage.setStorageData(STORAGEKEY.token, res.token, false);

        }


        navigate("/show-profile");
      }).catch((error) => {
        console.log(error);

      })
  }



  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Container>
        <div className="login-card">
          <Header />
          <div className="login">
            <h2>Login</h2>
            <form>
              <InputField
                name="email"
                maxLength={undefined}
                value={loginData.email}
                lablestyleClass="login-label"
                InputstyleClass="login-input"
                onChange={(e: any) => {
                  onInputValueChange(e);
                }}
                disabled={false}
                label="Email address"
                placeholder="email@example.com"
                type="email"
                fromrowStyleclass=""
              />
              <label className="ErrMsg" htmlFor="error"> <FontAwesomeIcon icon={faTimesCircle} /> Email or password wrong</label>
              <InputField
                name="password"
                maxLength={undefined}
                value={loginData.password}
                lablestyleClass="login-label"
                InputstyleClass="login-input"
                onChange={(e: any) => {
                  onInputValueChange(e);
                }}
                disabled={false}
                label="Password"
                placeholder="*********"
                type="password"
                fromrowStyleclass=""
              />
              <div className="d-flex justify-content-between mt-2">
                <div className="d-flex align-items-center">
                  <CheckBox
                    type="checkbox"
                    label=""
                    name="rememberMe"
                    id=""
                    value={""}
                    styleCheck="remember-checkbox"
                    onChange={(e) => { onInputValueChange(e) }}
                    checked={rememberMe}
                  />
                  <label htmlFor="checkbox" className="rememberme-label">
                    Remember me
                  </label>
                </div>
                <Link to="/login" className="forgot-password">
                  Forgot password?
                </Link>
              </div>
              <div style={{ marginTop: "9rem" }}>
                <Buttons
                  children="Log in"
                  onClick={logIn}
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
          {/* <Footer /> */}
        </div>
      </Container>
    </div>
  );
};

export default Login;
