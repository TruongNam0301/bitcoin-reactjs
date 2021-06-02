import { Router, Switch, Route } from "react-router";

import React from "react";

import history from "./history";

import Loading from "./components/Loading";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
const Home = React.lazy(() => import("./views/home"));

const InforPage = React.lazy(() => import("./views/inforPage"));
function App() {
  return (
    <Router history={history}>
      <React.Suspense fallback={<Loading />}>
        <Menu>
          <Switch>
            <Route path="/" exact component={InforPage} />

            <Route path="/btc/:id" children={<Home />} />
          </Switch>
        </Menu>
        <Footer />
      </React.Suspense>
    </Router>
  );
}

export default App;
