import { FC } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { useLocation } from "react-router";

interface Props {
  // any props that come into the component
}

const Layout: FC<Props> = ({ children, ...props }) => {
  const location = useLocation();

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
      <Header />
      <div {...props}>{children}</div>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Footer />
      )}
    </div>
  );
};

export default Layout;
