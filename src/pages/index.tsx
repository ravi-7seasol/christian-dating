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

const Index = () => {
  const loction = useLocation();
  const forLayout = ["/", "/signup", "/profile", "/login"];
  const forAuthLayout = [ "/inbox","/show-profile"];

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
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      )}

      {forAuthLayout.includes(loction.pathname) && (
        <AuthLayout>
          <Routes>
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/show-profile" element={<ShowProfile />} />
          </Routes>
        </AuthLayout>
      )}
    </>
  );
};

export default Index;
