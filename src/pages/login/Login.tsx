import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { error, log } from "console";
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
  const [errorMsg, setErrorMsg] = useState("");
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    image: "",
    msg: "",
    status: "",
    user_id: "",
    username: ""
  })


  const onInputValueChange = (e: any) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
    if (e.target.name === "rememberMe") {
      setRememberMe(e.target.checked);
    }
  }


  useEffect(() => {
    const email = AuthStorage.getStorageData(STORAGEKEY.email);
    if (email) {
      setLoginData({ ...loginData, email: email });
    }
  }, [])

  const logIn = () => {
    const body = xwwwFormUrlencoded(loginData);
    ApiPost('loginuser', body)
      .then((res: any) => {

        if (rememberMe) {
          AuthStorage.setStorageData(STORAGEKEY.email, loginData.email, rememberMe);
        }
        if (res) {
          AuthStorage.setStorageData(STORAGEKEY.token, res.token, true);
          setErrorMsg(res.msg);
          setUserLoginData({ ...userLoginData, email: res.email, image: res.image, msg: res.msg, status: res.status, user_id: res.user_id, username: res.username });
        }

        if (res.status === "true") {
          navigate("/show-profile");
        }
      }).catch((error) => {
        console.log(error);

      })

  }
  useEffect(() => {
    if (userLoginData.email !== "" && userLoginData.image !== "", userLoginData.msg !== "", userLoginData.status !== "", userLoginData.user_id !== "", userLoginData.username !== "") {
      AuthStorage.setStorageData(STORAGEKEY.userData, JSON.stringify(userLoginData), true)
    }
  }, [userLoginData])



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
              <div className="Terms-of-use">
                <p><Link to="/terms-of-use?from=login" className="forgot-password">Terms of use</Link></p>
                <p><Link to="/privacy-policy?from=login" className="forgot-password">Privacy Policy</Link></p>
              </div>
              <br />
              {errorMsg && errorMsg !== "User Successfully logged in" && < label className="ErrMsg" htmlFor="error"> <FontAwesomeIcon icon={faTimesCircle} />{errorMsg}</label>}
              <div style={{ marginTop: "6rem" }}>
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
      </Container >
    </div >
  );
};

export default Login;
