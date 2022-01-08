import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Buttons from "../../components/Buttons";
import CheckBox from "../../components/Checkbox";
import InputField from "../../components/Inputfield";
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";

const Login = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/show-profile");
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <Container>
        <div className="login-card">
          <Header />
          <div className="login">
            <h2>Login</h2>
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
              <div className="d-flex justify-content-between mt-2">
                <div className="d-flex align-items-center">
                  <CheckBox
                    type="checkbox"
                    label=""
                    name=""
                    id=""
                    value={""}
                    styleCheck="remember-checkbox"
                    onChange={() => {}}
                    checked={false}
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
                  onClick={handleRedirect}
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
