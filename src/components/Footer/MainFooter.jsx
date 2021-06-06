import React from "react";
import useFindPathName from "../../hooks/useFindPathName";
import Footer2 from "./Footer2";
import Footer from "./Footer";
import { useLocation } from "react-router";

function MainFooter(props) {
  const location = useLocation();
  let path = useFindPathName(location);
  return <>{path === "btc" ? <Footer /> : <Footer2 />}</>;
}

export default MainFooter;
