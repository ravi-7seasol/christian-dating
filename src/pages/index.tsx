import { Routes, Route, Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Layout from "../layouts/Layout";
import HomePage from "./homepage/Homepage";
import Profile from "./profile/Profile";

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
        </Routes>
      </Layout>
      <AuthLayout>
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
      </AuthLayout>

    </>
  );
};

export default Index;
