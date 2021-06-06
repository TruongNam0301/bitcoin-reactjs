import { Router, Switch, Route, useLocation } from "react-router";
import React, { useEffect, useState } from "react";
import history from "./history";
import Loading from "./components/Loading";
import Menu from "./components/Menu/index";
import Footer from "./components/Footer/Footer";
import Footer2 from "./components/Footer/Footer2";
import MainFooter from "./components/Footer/MainFooter";

const Home = React.lazy(() => import("./views/home"));
const InforPage = React.lazy(() => import("./views/inforPage"));
const About = React.lazy(() => import("./views/about"));
function App() {
  const [isCoinPage, setIsCoinPage] = useState("false");

  return (
    <Router history={history}>
      <React.Suspense fallback={<Loading />}>
        <Menu>
          <Switch>
            <Route path="/" forceRefresh={true} exact component={InforPage} />
            <Route path="/btc/:id" children={<Home />} />
            <Route path="/about" component={About} />
          </Switch>
        </Menu>
        <MainFooter />
      </React.Suspense>
    </Router>
  );
}

export default App;
