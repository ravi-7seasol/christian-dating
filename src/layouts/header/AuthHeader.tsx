import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const AuthHeader: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const handleRedirect = () => {
    navigate("/show-profile")
  }
  return (
    <>
      <div className="small-header">
        <div className="authheader">
          <div>
            <img src="./assets/img/application-menu.png" alt="" height="5%" />
          </div>
          <div>
            <h1>{location.pathname === "/show-profile" && "Profile" || location.pathname === "/match_or_message" && "Match or Message" || location.pathname === "/inbox" && "Inbox" || location.pathname === "/community" && "Community"}</h1>
            {location.pathname === "/community" && <p className="header-bottom-text">Share words of encouragement, voice and express concerns, share favorite scriptures and the good things God has done, is doing, and will do in your life!</p>}
          </div>
          <div className="profile-pic" >
            <img src="./assets/img/Ellipse.png" alt="" height="5%" onClick={handleRedirect} />
            <div className="notification"></div>
          </div>
        </div>
      </div>
      <Navbar bg="light" className="authnave">
        <Navbar.Brand href="#home">
          <img
            src="./assets/img/Group 28.png"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/match_or_message">Match-or-Message</Link>
            <Link to="/community">Community</Link>
            <Link to="/inbox">Inbox</Link>
            <Link to="/success_stories">Success-stories</Link>
            <div className="profile-pic" >
              <img src="./assets/img/Ellipse.png" alt="" onClick={handleRedirect} />
              <div className="notification"></div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default AuthHeader;
