import { Routes, Route, Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Layout from "../layouts/Layout";
import HomePage from "./homepage/Homepage";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import Signup from "./signup/Signup";

const Index = () => {
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
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route  path="/signup" element={<Signup />} />
          <Route  path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </>
  );
};

export default Index;
