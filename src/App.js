import { Router } from "react-router";

import React from "react";

import history from "./history";

import Loading from "./components/Loading";
import Menu from "./components/Menu";
const Home = React.lazy(() => import("./views/home"));

function App() {
  return (
    <Router history={history}>
      <React.Suspense fallback={<Loading />}>
        <Menu>
          <Home />
        </Menu>
      </React.Suspense>
    </Router>
  );
}

export default App;
