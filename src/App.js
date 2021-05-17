import "./App.css";
import { Router } from "react-router";
import history from "./history";
import React from "react";
import Loading from "./components/Loading";


const Home = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./views/home")), 10000);
  })
});

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
