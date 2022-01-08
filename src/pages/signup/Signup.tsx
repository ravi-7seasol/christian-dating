import { Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import Buttons from "../../components/Buttons";
import InputField from "../../components/Inputfield";
import Header from "../../layouts/header/Header";

const Signup = () => {
  const navigate = useNavigate();
  const goToProfileSetting = () => {
    navigate("/profile");
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center h-100">
        <Container>
          <div className="login-card">
            <Header />
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
                  <img src="./assets/img/check-one.png" alt="check" />
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
                  <img src="./assets/img/check-one.png" alt="check" />
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
                      <img src="./assets/img/facebook-icon.png" alt="icon" />
                    </figure>
                    <figure>
                      <img src="./assets/img/instagram-icon.png" alt="icon" />
                    </figure>
                    <figure>
                      <img src="./assets/img/gmail-icon.png" alt="icon" />
                    </figure>
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
