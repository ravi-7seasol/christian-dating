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
import { userExpired } from "../../redux/actions/userExpiredAction";
import { userProfileImage } from "../../redux/actions/userProfileImage";
import Subscription from "../../pages/components/Subscription";
import Payment from "../../pages/components/Payment";

interface Props {
  showMenu: any;
}
const AuthHeader: React.FC<Props> = ({ showMenu, ...props }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);
  const [navpopup, setNavpopup] = useState(false)
  const [chatList, setChatList] = useState<any>();
  const [profile, setProfile] = useState<any>();
  const [subscriptionModal, setSubscriptionModal] = useState(false);
  const [getPackage, setGetPackage] = useState();
  const [paymentModal, setPaymentModal] = useState(false);

  const openMenu = () => {
    setNavpopup(false)
    setShowProfile(!showProfile);
  };
  const handleRedirect = () => {
    navigate("/match_or_message");
  };
  const profileImg = useSelector((state: RootStateOrAny) => state.profile_Image.profileImage)
  const userProfileImg = useSelector((state: RootStateOrAny) => state.user_profile_Image.profileImage)
  const userExpiredData = useSelector((state: RootStateOrAny) => state.user_Expired.user_expired)
  const dispatch = useDispatch()

  useEffect(() => {
    if (getPackage) {
      if (getPackage) {
        setSubscriptionModal(false)
        setPaymentModal(true)
      }
    }
  }, [getPackage]);

  const stripePayment = (paymentId: any) => {
    console.log("paymentId",paymentId);
    if (paymentId && getPackage) {
      let data = {
        token: AuthStorage.getToken(),
        email: AuthStorage.getStorageJsonData("userData").email,
        package_id: getPackage,
        stripeToken: paymentId
      };
      const body = xwwwFormUrlencoded(data);
      ApiPost("paywithstripe", body)
        .then((res: any) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }


  useEffect(() => {
    dispatch(setIsLoading(true))
    const id = {
      id: AuthStorage.getStorageJsonData(STORAGEKEY.userData).user_id,
      viewer: AuthStorage.getStorageJsonData(STORAGEKEY.userData).user_id
    }
    const body = xwwwFormUrlencoded(id);

    ApiPost(`getsingleuser`, body)
      .then((res: any) => {
        dispatch(getProfileImage(res.user[0].image))
        dispatch(userProfileImage(res.user[0].image))
        dispatch(userExpired(res.user[0].if_expired))
        dispatch(setIsLoading(false))

      }).catch((error: any) => {
        console.log(error);
        dispatch(setIsLoading(false))

      })
  }, [])


  useEffect(() => {
    setProfile(userProfileImg)
  }, [userProfileImg])

  useEffect(() => {
    getChatList()
  }, []);

  useEffect(() => {
    if (subscriptionModal === true) {
      navigate("match_or_message")
    }
  }, [subscriptionModal]);


  const MINUTE_MS = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      getChatList()
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  })

  const getChatList = () => {
    const tokenID = AuthStorage.getStorageData(STORAGEKEY.token);

    const token = {
      token: tokenID,
    };

    const body = xwwwFormUrlencoded(token);

    ApiPost("getchatlist", body)
      .then((res: any) => {
        if (res.status === "false") {
          setChatList(null)
        } else {
          setChatList(res.total_unseen_messages);
        }

      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    console.log('chatList', chatList);
  }, [chatList]);

  useEffect(() => {
    if (showProfile) {
      setShowProfile(false)
    }
    else if (navpopup) {
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
      <Navbar bg="light" className="authnave " >
        <Container onClick={() => {navpopup && setNavpopup(false); showProfile && setShowProfile(false)}}>
          <Navbar.Brand >
            <img
              src="./assets/img/Group 28.png"
              className=" align-top uncommon-logo"
              onClick={handleRedirect}
            />
            <button onClick={() => { setNavpopup(!navpopup); setShowProfile(false) }} style={{ border: "none", background: "transparent" }}><img src="./assets/img/application-menu.png" className="menu-logo" alt="" height="5%" /></button>
          </Navbar.Brand>

          <Navbar.Collapse
            id="basic-navbar-nav"
          >
            <div className="page-name text-center w-100">
              <h1 className="" >{location.pathname === "/show-profile" && "Profile" || location.pathname === "/match_or_message" && "Match or Message" || location.pathname === "/inbox" && "Inbox" || location.pathname === "/community" && "Community"}</h1>
            </div>
            <Nav className="ml-auto">
              <div className="navLinks">
                <Link to="/match_or_message">Match or Message</Link>
                <span onClick={() => userExpiredData && userExpiredData === "expired" ? setSubscriptionModal(true) : ''}><Link to="/community">Community</Link></span>
                <span onClick={() => userExpiredData && userExpiredData === "expired" ? setSubscriptionModal(true) : ''}><Link to="/inbox">Inbox {chatList !== '0' && <span className={chatList ? "messages-counts-header" : ""} > {parseInt(chatList) > 99 ? `99+` : chatList} </span>}</Link></span>
                {/* .inbox-main .messages-counts */}
                <Link to="/success_stories">Success stories</Link>
              </div>

              <div className="profile-pic position-relative">
                <button onClick={openMenu} style={{ border: "none", background: "transparent" }}>
                  <img
                    src={profile ? profile : "./assets/img/nonprofileImg.png"}
                    alt=""
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = "./assets/img/nonprofileImg.png";
                    }}
                  />
                </button>
                <div className="notification"></div>
                {showProfile && (
                  <div className="auth-show-profile">
                    <ul>
                      <li onClick={() => setShowProfile(false)}>
                        <Link to="/edit-profile">Edit Profile</Link>
                      </li>
                      <li onClick={() => setShowProfile(false)}>
                        <Link to="/show-profile">My Profile</Link>
                      </li>
                      <li onClick={() => setShowProfile(false)}>
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
              <span><Link to="/match_or_message" onClick={() => setNavpopup(false)} >Match or Message</Link></span>
              <span onClick={() => userExpiredData && userExpiredData === "expired" ? setSubscriptionModal(true) : ''}><Link to="/community" onClick={() => setNavpopup(false)}>Community</Link> </span>
              <span onClick={() => userExpiredData && userExpiredData === "expired" ? setSubscriptionModal(true) : ''}><Link to="/inbox" onClick={() => setNavpopup(false)}>Inbox {chatList !== "0" && <span className={chatList ? "messages-counts" : ""} >  {parseInt(chatList) > 99 ? `99+` : chatList} </span>}</Link></span>
              <span><Link to="/success_stories" onClick={() => setNavpopup(false)}>Success stories</Link></span>
            </div>
          </div>
        }
      </Navbar>
      {
        subscriptionModal && <Subscription show={subscriptionModal} onHide={() => setSubscriptionModal(false)} packageData={setGetPackage} packageData2={setGetPackage} />
      }
      {
        paymentModal && <Payment show={paymentModal} onHide={() => { setPaymentModal(false) }} paymentDone={(paymentId: any) => stripePayment(paymentId)} />
      }
    </>
  );
};

export default AuthHeader;
