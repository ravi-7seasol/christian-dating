import { FC, useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router";

interface Props {
  // any props that come into the component
}

const Layout: FC<Props> = ({ children, ...props }) => {
  const location = useLocation();
  // const [setOverlay, setSetOverlay] = useState(false);
  console.log("location.pathname", location.pathname);


  // "layout-padding"
  return (
    <div className= '' style={{ height: "100vh", overflowY: "auto" }}>
      <div {...props}>{children}</div>
    </div>
  );
};

export default Layout;
