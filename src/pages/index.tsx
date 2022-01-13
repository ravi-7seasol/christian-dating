import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Layout from "../layouts/Layout";
import HomePage from "./homepage/Homepage";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import Signup from "./signup/Signup";
import Inbox from "./messageInbox/Inbox";
import { useLocation, useNavigate } from "react-router";
import ShowProfile from "./profile/components/ShowProfile";
import MatchOrMessage from "./match-or-message/MatchOrMessage";
import Community from "./community/Community";
import SuccessStories from "./success-stories/SuccessStories";
import { useEffect } from "react";
import AuthStorage from "../helper/AuthStorage";
import ForgotPassword from "./forgotpassword/ForgotPassword";
import EditProfile from '../pages/profile/components/EditProfile'

const Index = () => {
  const loction = useLocation()
  const navigate = useNavigate()
  const forLayout = ["/", "/signup", "/profile","/forgot-password"]
  const forAuthLayout = ["/show-profile", "/inbox", "/match_or_message", "/community", "/success_stories", "/edit-profile"]

  // const dispatch = useDispatch();
  useEffect(() => {
    console.log("loction", loction);

    if (AuthStorage.isUserAuthenticated()) {
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
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Layout>
      )}

      {forAuthLayout.includes(loction.pathname) && (
        <AuthLayout>
          <Routes>
            <Route path="/match_or_message" element={<MatchOrMessage />} />
            <Route path="/community" element={<Community />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/show-profile" element={<ShowProfile />} />
            <Route path="/success_stories" element={<SuccessStories />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Routes>
        </AuthLayout>
      )}
    </>
  );
};

export default Index;
