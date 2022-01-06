import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Layout from "../layouts/Layout";
import HomePage from "./homepage/Homepage";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import Signup from "./signup/Signup";
import Inbox from "./messageInbox/Inbox";
import { useLocation } from "react-router";
import MatchOrMessage from "./match-or-message/MatchOrMessage";

const Index = () => {
  const loction = useLocation()
  const forLayout = ["/", "/signup", "/login"]
  const forAuthLayout = ["/profile", "/inbox", "/match_or_message"]

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
      {forLayout.includes(loction.pathname) &&
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Layout>
      }

      {forAuthLayout.includes(loction.pathname) &&
        <AuthLayout>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/match_or_message" element={<MatchOrMessage />} />
            <Route path="/inbox" element={<Inbox />} />
          </Routes>
        </AuthLayout>
      }
      
    </>
  );
};

export default Index;
