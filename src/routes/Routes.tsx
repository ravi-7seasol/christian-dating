import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import Loader from "../components/loader/Loader";
// import { Switch } from 'react-router'
import Pages from "../pages";

function Routes() {
  const { is_loading } = useSelector((state: RootStateOrAny) => state.loading);
  return (
    <div>
      {is_loading && <Loader />}
      {/* <Switch> */}
      <Pages />
      {/* </Switch> */}
    </div>
  );
}

export default Routes;
