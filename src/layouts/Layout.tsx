import React, { FC } from "react";

import Footer from "./footer/Footer";
import AuthHeader from "./header/AuthHeader";
import Header from "./header/Header";
import { RootStateOrAny, useSelector } from "react-redux";
import { useLocation } from "react-router";

interface Props {
  // any props that come into the component
}

const Layout: FC<Props> = ({ children, ...props }) => {
  const { is_loggedin } = useSelector((state: RootStateOrAny) => state.login);
  const location = useLocation();
  console.log("location", location);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        padding: "50px",
      }}
    >
      {/* {is_loggedin ? 
        <AuthHeader /> 
        :  */}
      <Header />
      {/* } */}
      <div {...props}>{children}</div>
      {/* <div className="pb-308" {...props}>{children}</div> */}
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Footer />
      )}
    </div>
  );
};

export default Layout;
