import { Router } from "react-router";

import React from "react";

import history from "./history";

import Loading from "./components/Loading";
import Menu from "./components/Menu";
import Footer from "./components/Footer"
import Banner from "./views/inforPage/Banner";
const Home = React.lazy(() => import("./views/home"));

function App() {
  return (
    <Router history={history}>
      <React.Suspense fallback={<Loading/>}>
        <Banner/>
        {/* <Menu>
          <Home />
        </Menu>
        <Footer/> */}
      </React.Suspense>
    </Router>
  );
}

export default App;
