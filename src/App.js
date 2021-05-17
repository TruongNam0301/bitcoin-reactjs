import { Router } from "react-router";

import React from "react";

import history from "./history";

import Loading from "./components/Loading";
const Home = React.lazy(() => import("./views/home"));

function App() {
  return (
    <Router history={history}>
      <React.Suspense fallback={<Loading />}>
        <Home />
      </React.Suspense>
    </Router>
  );
}

export default App;
