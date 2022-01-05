import { Routes, Route, Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import HomePage from "./homepage/Homepage";
import Inbox from "./messageInbox/Inbox";

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
          <Route path="/" element={<Inbox />} />
        </Routes>
      </Layout>

    </>
  );
};

export default Index;
