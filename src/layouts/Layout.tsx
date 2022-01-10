import { FC } from "react";
import { useLocation } from "react-router";

interface Props {
  // any props that come into the component
}

const Layout: FC<Props> = ({ children, ...props }) => {
  const location = useLocation();

  return (
    <div className="layout-padding" style={{height:"100vh", overflowY:"auto"}}>
      <div {...props}>{children}</div>
    </div>
  );
};

export default Layout;
