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
        padding: "50px 30px 0 30px",
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
