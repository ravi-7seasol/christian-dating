import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Layout from "../layouts/Layout";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import Signup from "./signup/Signup";
import Inbox from "./messageInbox/Inbox";
import { useLocation, useNavigate } from "react-router";
import ShowProfile from "./profile/components/ShowProfile";
import MatchOrMessage from "./match-or-message/MatchOrMessage";
import Community from "./community/Community";
import SuccessStories from "./success-stories/SuccessStories";
import Terms_of_use from "./terms-of-use/Terms_of_use";
import Privacy_Policy from "./privacy-policy/Privacy_Policy";
import { useEffect } from "react";
import AuthStorage from "../helper/AuthStorage";
import ForgotPassword from "./forgotpassword/ForgotPassword";
import EditProfile from '../pages/profile/components/EditProfile'

import { RootStateOrAny, useSelector } from "react-redux";
import SetProfileImage from "./profile/components/SetProfileImage";

const Index = () => {
  const loction = useLocation()
  const navigate = useNavigate()
  const forLayout = ["/", "/signup", "/forgot-password", "/terms-of-use", "/privacy-policy"]
  const forAuthLayout = ["/show-profile", "/profile", "/inbox", "/match_or_message", "/community", "/success_stories", "/edit-profile", "/set_profile_image"]
  const expiredRoute = ["/inbox", "/community"]

  // const dispatch = useDispatch();
  const userExpired = useSelector((state: RootStateOrAny) => state.user_Expired.user_expired)

  useEffect(() => {
    if (userExpired === "expired") {
      if (expiredRoute.includes(loction.pathname)) {
        navigate("/match_or_message")
      }
    }
  }, [userExpired]);


  useEffect(() => {
    console.log("loction", loction);
    if (AuthStorage.isUserAuthenticated()) {
      if (!forAuthLayout.includes(loction.pathname)) {
        navigate("/match_or_message")
      } else {
        if (userExpired === "expired") {
          if (expiredRoute.includes(loction.pathname)) {
            navigate("/match_or_message")
          }
        }
      }
      // ApiGet("user/validate")
      //   .then((res) => {
      //     dispatch(changeLoginState(true));
      //     // console.log("Is Authenticated", AuthStorage.isUserAuthenticated());
      //   })
      //   .catch((error) => {
      //     AuthStorage.deauthenticateUser();
      //     history.push("/");
      //   });
    } else {
      if (!forLayout.includes(loction.pathname)) {
        navigate("/");
      }
    }
  }, []);

  return (
    <>
      {forLayout.includes(loction.pathname) && (
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/terms-of-use" element={<Terms_of_use />} />
            <Route path="/privacy-policy" element={<Privacy_Policy />} />
          </Routes>
        </Layout>
      )}

      {forAuthLayout.includes(loction.pathname) &&
        AuthStorage.isUserAuthenticated()
        &&
        (
          <AuthLayout>
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/match_or_message" element={<MatchOrMessage />} />
              <Route path="/community" element={<Community />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/show-profile" element={<ShowProfile />} />
              <Route path="/success_stories" element={<SuccessStories />} />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/set_profile_image" element={<SetProfileImage />} />
            </Routes>
          </AuthLayout>
        )}
    </>
  );
};

export default Index;
