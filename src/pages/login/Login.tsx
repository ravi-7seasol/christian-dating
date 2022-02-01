import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { error, log } from "console";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
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
import { setIsLoading } from "../../redux/actions/loadingAction";
import { useLocation } from "react-router";
import { cssTransition, toast } from "react-toastify";
import ReactFacebookLogin, {
  ReactFacebookFailureResponse,
  ReactFacebookLoginInfo,
} from "react-facebook-login";
import LogiWithInstagram from "../signup/LogiWithInstagram";
import GoogleLogin from "react-google-login";

const GoogleAppId =
  "1043350539750-lldkb9r1i0pc3d3l66lupb9np2olict4.apps.googleusercontent.com";
const FacbookAppId = "634703847650865";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const [splash, setSplash] = useState(true)
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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
    dispatch(setIsLoading(true))
    const body = xwwwFormUrlencoded(loginData);
    ApiPost('loginuser', body)
      .then((res: any) => {
        dispatch(setIsLoading(false))
        if (rememberMe) {
          AuthStorage.setStorageData(STORAGEKEY.email, loginData.email, rememberMe);
        }
        if (res) {
          AuthStorage.setStorageData(STORAGEKEY.token, res.token, true);
          setErrorMsg(res.msg);
        }
        let newData = res
        delete newData.token
        delete newData.msg
        AuthStorage.setStorageData(STORAGEKEY.userData, JSON.stringify(newData), true)
        if (res.status === "true" && location.search === "?from=signup") {
          navigate("/profile");
        }
        else if (res.status === "true") {
          navigate("/match_or_message")
        }
      }).catch((error) => {
        console.log(error);
        dispatch(setIsLoading(false))

      })
  }

  const componentClicked = () => {
    console.log("facbook component clicked");
  };

  const responseFacebook = (response: ReactFacebookLoginInfo) => {
    console.log("facbook response ======= response", response);
    const code = {
      code: response.id,
      email: response.email,
    }
    const body = xwwwFormUrlencoded(code)
    ApiPost("signupusersocial", body)
      .then((res: any) => {
        console.log("res", res)
        if (res.msg === "User Successfully logged in") {
          AuthStorage.setStorageData(STORAGEKEY.token, res.token, true);
          setErrorMsg(res.msg);
          let newData = res
          delete newData.token
          delete newData.msg
          AuthStorage.setStorageData(STORAGEKEY.userData, JSON.stringify(newData), true)
          // if (res.msg === "User Successfully logged in") {
          navigate("/profile");
          // }
        } else {
          toast.error("User Not Loggin", {
            // position: toast.POSITION.TOP_CENTER,
            transition: cssTransition({
              enter: "animate__animated animate__bounceIn",
              exit: "animate__animated animate__bounceOut"
            })
          })
        }
      })
      .catch((err) => {
        console.log("err", err)
      })
  };

  const failureResponseFacebook = (response: ReactFacebookFailureResponse) => {
    console.log(
      "facbook failureResponseFacebook ===== failureResponseFacebook",
      response
    );
  };

  const Google = () => {
    document
      .getElementById("google")!
      .getElementsByTagName("button")[0]
      .click();
  };

  const responseGoogle = (response: any) => {
    console.log("google response", response);

    const code = {
      code: response.googleId,
      email: response.profileObj.email
    }
    const body = xwwwFormUrlencoded(code)
    ApiPost("signupusersocial", body)
      .then((res: any) => {
        console.log("res", res)
        if (res.msg === "User Successfully logged in") {
          AuthStorage.setStorageData(STORAGEKEY.token, res.token, true);
          setErrorMsg(res.msg);
          let newData = res
          delete newData.token
          delete newData.msg
          AuthStorage.setStorageData(STORAGEKEY.userData, JSON.stringify(newData), true)
          // if (res.msg === "User Successfully logged in") {
          navigate("/profile");
          // }
        }
        else {
          toast.error("User Not Loggin", {
            // position: toast.POSITION.TOP_CENTER,
            transition: cssTransition({
              enter: "animate__animated animate__bounceIn",
              exit: "animate__animated animate__bounceOut"
            })
          })
        }
      })
      .catch((err) => {
        console.log("err", err)
      })
  };

  const responseGoogle1 = (response: any) => {
    console.log("google response failer", response);
  };

  return (
    <>
      {
        splash ?
          <div className="d-flex justify-content-center align-items-center main-page" style={{ height: "100vh" }}>
            <Container style={{ height: '60vh' }}>
              <div className="splash-card login-card">
                <div className="top-baloon"></div>
                <div className="login-header splash-logo">
                  <div className="header-logo d-flex     align-items-center">
                    <img src="./assets/img/header-logo.png" alt="header-logo" className="me-3" />
                    <div className="text">
                      <h5>Christian Dating</h5>
                      <p>Build Divine Connections</p>
                    </div>
                  </div>
                </div>
                <Button style={{ width: "100%", padding: "15px", marginTop: "" }} className="animation" onClick={() => { setSplash(false) }}>Get started</Button>
              </div>
            </Container>
          </div>

          :

          <div className="d-flex justify-content-center align-items-center main-page" style={{ height: "100vh" }}>
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
                      <Link to="/forgot-password" className="forgot-password">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="Terms-of-use">
                      <p><Link to="/terms-of-use?from=login" className="forgot-password">Terms of use</Link></p>
                      <p><Link to="/privacy-policy?from=login" className="forgot-password">Privacy Policy</Link></p>
                    </div>
                    <br />
                    {errorMsg && errorMsg !== "User Successfully logged in" && < label className="ErrMsg" htmlFor="error"> <FontAwesomeIcon icon={faTimesCircle} />{errorMsg}</label>}
                    <div style={{ marginTop: "1rem" }}>
                      <Buttons
                        children="Log in"
                        onClick={logIn}
                        ButtonStyle="login-btn animation"
                        disabled={false}
                      />
                      <br />
                      <div className="text-center w-100 mt-2 dont-have-account">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="dont-have-account-link">
                          Sign up here
                        </Link>
                      </div>
                      <div className="signup-with-social text-center mt-4">
                        <span>Or sign in with socials</span>
                      </div>
                      <div className="signup-with-social-icons">
                        <figure>
                          {/* <img src="./assets/img/facebook-icon.png" alt="icon" /> */}
                          <ReactFacebookLogin
                            appId={FacbookAppId}
                            autoLoad={false}
                            fields="name,email,picture"
                            onClick={componentClicked}
                            callback={responseFacebook}
                            onFailure={failureResponseFacebook}
                            icon={
                              <img
                                src="./assets/img/facebook-icon.png"
                                alt="icon"
                              />
                            }
                            textButton=""
                          />
                        </figure>
                        <figure>
                          {/* <img src="./assets/img/instagram-icon.png" alt="icon" /> */}
                          <LogiWithInstagram />
                        </figure>
                        <figure onClick={() => Google()}>
                          <img src="./assets/img/gmail-icon.png" alt="icon" />
                        </figure>
                        <div id="google">
                          <GoogleLogin
                            clientId={GoogleAppId}
                            autoLoad={false}
                            buttonText=""
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle1}
                          // cookiePolicy={'single_host_origin'}
                          // icon={<img src="./assets/img/gmail-icon.png" alt="icon" />}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Container>
          </div>
      }
    </>
  );
};

export default Login;
