import ReactFacebookLogin, {
  ReactFacebookFailureResponse,
  ReactFacebookLoginInfo,
} from "react-facebook-login";
import { useNavigate } from "react-router";
import Buttons from "../../components/Buttons";
import InputField from "../../components/Inputfield";
import GoogleLogin from "react-google-login";
import LogiWithInstagram from "./LogiWithInstagram";
import { Container } from "react-bootstrap";
import Header from "../../layouts/header/Header";
import { useEffect, useState } from "react";
import { xwwwFormUrlencoded } from "../../helper/utils";
import { ApiPost} from "../../helper/API/ApiData";


const GoogleAppId =
  "1043350539750-lldkb9r1i0pc3d3l66lupb9np2olict4.apps.googleusercontent.com";
const FacbookAppId = "634703847650865";

const Signup = () => {
  const navigate = useNavigate();
  
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirm_password:""
  })
  const [formErrors, setFormErrors]=useState<any>()
  const onInputValueChange = (e: any) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    })
  }


  const validation = (values:any) => {
    const error:any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!values.email) {
      error.email = "Please Enter Email ";
    }else if (!values.email.match(regex)) {
      error.email = "Enter Valid Email";  
    } 
    if (!values.password) {
      error.password = "Please Enter Password";
    }else if (values.password.length < 8) {
      error.password = "minimum length of the password is 8";
    } 
    if (!values.confirm_password) {
      error.confirm_password = "Please Enter Confirm Password";
    }else if (signupData.password !== signupData.confirm_password) {
      error.confirm_password="Password is not same"
    }
    return error;
  }
  




 


  const goToProfileSetting = () => {

    setFormErrors(validation(signupData));
    if (formErrors && Object.keys(formErrors).length === 0) {
      const body = xwwwFormUrlencoded(signupData);
      ApiPost('signupuser', body)
      .then((res: any) => {
        console.log("res", res.status);
        if (res.status === "true") {
          navigate("/profile");
        }
        
       
      }).catch((error) => {
        console.log(error);

      })

      
    }
    
  };

  const componentClicked = () => {
    console.log("facbook component clicked");
  };

  const responseFacebook = (response: ReactFacebookLoginInfo) => {
    console.log("facbook response ======= response", response);
  };

  const failureResponseFacebook = (response: ReactFacebookFailureResponse) => {
    console.log(
      "facbook failureResponseFacebook ===== failureResponseFacebook",
      response
    );
  };

  const responseGoogle = (response: any) => {
    console.log("google response", response);
  };
  const responseGoogle1 = (response: any) => {
    console.log("google response failer", response);
  };

  const Google = () => {
    document
      .getElementById("google")!
      .getElementsByTagName("button")[0]
      .click();
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
      >
        <Container>
          <div className="login-card">
            <Header />
            <div className="login">
              <h2>Sign up</h2>
              <form>
                <InputField
                  name="email"
                  maxLength={undefined}
                  value={signupData.email}
                  lablestyleClass="login-label"
                  InputstyleClass="login-input"
                  onChange={(e) => {
                    onInputValueChange(e);
                  }}
                  disabled={false}
                  label="Email address"
                  placeholder="email@example.com"
                  type="email"
                  fromrowStyleclass=""
                />
                <span>{formErrors && formErrors.email}</span>
                <div className="input-field">
                  <InputField
                    name="password"
                    maxLength={undefined}
                    value={signupData.password}
                    lablestyleClass="login-label"
                    InputstyleClass="login-input"
                    onChange={(e) => {
                      onInputValueChange(e);
                    }}
                    disabled={false}
                    label="Password"
                    placeholder="*********"
                    type="password"
                    fromrowStyleclass=""
                  />
                  
                  {formErrors && formErrors.password===undefined?<img src="./assets/img/check-one.png" alt="check" />:""}
                  
                </div>
                <div className="input-field">
                  <InputField
                    name="confirm_password"
                    maxLength={undefined}
                    value={signupData.confirm_password}
                    lablestyleClass="login-label"
                    InputstyleClass="login-input"
                    onChange={(e) => {
                      onInputValueChange(e)
                    }}
                    disabled={false}
                    label="Confirm Password"
                    placeholder="*********"
                    type="password"
                    fromrowStyleclass=""
                  />{formErrors && formErrors.confirm_password===undefined?<img src="./assets/img/check-one.png" alt="check" />:""}
                  
                  {/* <img src="./assets/img/check-one.png" alt="check" /> */}
                   <span>{formErrors && formErrors.confirm_password}</span>
                </div>

                <div style={{ marginTop: "3rem" }}>
                  <Buttons
                    children="Sign up"
                    onClick={goToProfileSetting}
                    ButtonStyle="login-btn"
                    disabled={false}
                  />
                  <div className="signup-with-social text-center mt-4">
                    <span>Or sign up with socials</span>
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
    </>
  );
};

export default Signup;
