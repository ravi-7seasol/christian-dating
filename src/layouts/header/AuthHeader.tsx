import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import STORAGEKEY from "../../config/APP/app.config";
import { ApiPost } from "../../helper/API/ApiData";
import AuthStorage from "../../helper/AuthStorage";
import { xwwwFormUrlencoded } from "../../helper/utils";
import { getProfileImage } from "../../redux/actions/getProfileImage";
import { setIsLoading } from "../../redux/actions/loadingAction";


interface Props {
  showMenu: any;
}
const AuthHeader: React.FC<Props> = ({showMenu, ...props}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [navpopup, setNavpopup] = useState(false)
  const openMenu = () => {
    setShowProfile(!showProfile);
  };
  const handleRedirect = () => {
    navigate("/match_or_message");
  };
  const profileImg = useSelector((state: RootStateOrAny) => state.profile_Image.profileImage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setIsLoading(true))
    const id = {
      id: AuthStorage.getStorageJsonData(STORAGEKEY.userData).user_id
    }
    const body = xwwwFormUrlencoded(id);

    ApiPost(`getsingleuser`, body)
      .then((res: any) => {
        dispatch(getProfileImage(res.user.image))
        dispatch(setIsLoading(false))

      }).catch((error: any) => {
        console.log(error);
        dispatch(setIsLoading(false))

      })
  }, [])


  useEffect(() => {
    if(showProfile ){
      setShowProfile(false)
    }
    else if(navpopup){
      setNavpopup(false)
    }
  }, [showMenu]);
  
  const logOut = () => {
    AuthStorage.deauthenticateUser()
  }
  return (
    <>
      {/* <div className="small-header">
        <div className="authheader">
          <div>
            <img src="./assets/img/application-menu.png" alt="" height="5%" />
          </div>
          <div>
            <h1>{location.pathname === "/show-profile" && "Profile" || location.pathname === "/match_or_message" && "Match or Message" || location.pathname === "/inbox" && "Inbox" || location.pathname === "/community" && "Community"}</h1>
            {location.pathname === "/community" && <p className="header-bottom-text">Share words of encouragement, voice and express concerns, share favorite scriptures and the good things God has done, is doing, and will do in your life!</p>}
          </div>
          <div className="profile-pic" >
            <img src="./assets/img/Ellipse.png" alt="" height="5%" onClick={handleRedirect}  />
            <div className="notification"></div>
          </div>
        </div>
      </div> */}
      <Navbar bg="light" className="authnave">
        <Container>
          <Navbar.Brand >
            <img
              src="./assets/img/Group 28.png"
              className=" align-top uncommon-logo"
              onClick={handleRedirect}
            />
            <button onClick={() => { setNavpopup(!navpopup) }} style={{border:"none", background:"transparent"}}><img src="./assets/img/application-menu.png" className="menu-logo" alt="" height="5%"/></button>
          </Navbar.Brand>

          <Navbar.Collapse
            id="basic-navbar-nav"
          >
            <div className="page-name text-center w-100">
              <h1 className="" >{location.pathname === "/show-profile" && "Profile" || location.pathname === "/match_or_message" && "Match or Message" || location.pathname === "/inbox" && "Inbox" || location.pathname === "/community" && "Community"}</h1>
            </div>
            <Nav className="ml-auto">
              <div className="navLinks" >
                <Link to="/match_or_message">Match or Message</Link>
                <Link to="/community">Community</Link>
                <Link to="/inbox">Inbox</Link>
                <Link to="/success_stories">Success stories</Link>
              </div>

              <div className="profile-pic position-relative">
                <button onClick={openMenu} style={{border:"none", background:"transparent"}}>
                <img
                  src={profileImg ? profileImg : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                  alt=""
                />
                </button>
                <div className="notification"></div>
                {showProfile && (
                  <div className="auth-show-profile">
                    <ul>
                      <li onClick={() =>setShowProfile(false)}>
                        <Link to="/edit-profile">Edit Profile</Link>
                      </li>
                      <li onClick={() =>setShowProfile(false)}>
                        <Link to="/show-profile">My Profile</Link>
                      </li>
                      <li onClick={() =>setShowProfile(false)}>
                        <Link onClick={logOut} to={""}>logout</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {navpopup &&
          <div className="nav-popup">
            <div className="nav-links">
              <Link to="/match_or_message" onClick={() =>setNavpopup(false)} >Match or Message</Link>
              <Link to="/community" onClick={() =>setNavpopup(false)}>Community</Link>
              <Link to="/inbox" onClick={() =>setNavpopup(false)}>Inbox</Link>
              <Link to="/success_stories" onClick={() =>setNavpopup(false)}>Success stories</Link>
            </div>
          </div>
        }
      </Navbar>
    </>
  );
};

export default AuthHeader;
