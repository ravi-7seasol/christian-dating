import { useLocation } from "react-router";

const AuthHeader: React.FC = () => {
  const location = useLocation()
  return (
    <>
      <div className="authheader">
        <div>
          <img src="./assets/img/application-menu.png" alt="" height="5%" />
        </div>
        <div>
          <h1>{location.pathname === "/show-profile" && "Profile" || location.pathname === "/match_or_message" && "Match or Message" || location.pathname === "/inbox" && "Inbox" || location.pathname === "/community" && "Community"}</h1>
          {location.pathname === "/community" && <p className="header-bottom-text">Share words of encouragement, voice and express concerns, share favorite scriptures and the good things God has done, is doing, and will do in your life!</p>}
        </div>
        <div className="profile-pic" >
          <img src="./assets/img/Ellipse.png" alt="" height="5%" />
          <div className="notification"></div>
        </div>
      </div>
    </>
  );
};

export default AuthHeader;
