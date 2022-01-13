import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Layout from "../layouts/Layout";
import HomePage from "./homepage/Homepage";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import Signup from "./signup/Signup";
import Inbox from "./messageInbox/Inbox";
import { useLocation } from "react-router";
import ShowProfile from "./profile/components/ShowProfile";
import MatchOrMessage from "./match-or-message/MatchOrMessage";
import Community from "./community/Community";
import SuccessStories from "./success-stories/SuccessStories";
import Terms_of_use from "./terms-of-use/Terms_of_use";
import Privacy_Policy from "./privacy-policy/Privacy_Policy";

const Index = () => {
  const loction = useLocation()
  const forLayout = ["/", "/signup", "/profile", "/terms-of-use", "/privacy-policy"]
  const forAuthLayout = ["/show-profile", "/inbox", "/match_or_message", "/community", "/success_stories"]

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (AuthStorage.isUserAuthenticated()) {
  //     ApiGet("user/validate")
  //       .then((res) => {
  //         dispatch(changeLoginState(true));
  //         // console.log("Is Authenticated", AuthStorage.isUserAuthenticated());
  //       })
  //       .catch((error) => {
  //         AuthStorage.deauthenticateUser();
  //         history.push("/");
  //       });
  //   }
  // }, []);

  return (
    <>
      {forLayout.includes(loction.pathname) && (
        <Layout>
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/terms-of-use" element={<Terms_of_use />} />
            <Route path="/privacy-policy" element={<Privacy_Policy />} />
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
          </Routes>
        </AuthLayout>
      )}
    </>
  );
};

export default Index;
