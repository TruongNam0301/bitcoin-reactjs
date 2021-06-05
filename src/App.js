import { Router, Switch, Route, Redirect } from "react-router";
import React from "react";
import history from "./history";
import Loading from "./components/Loading";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const Home = React.lazy(() => import("./views/home"));
const InforPage = React.lazy(() => import("./views/inforPage"));
const About = React.lazy(() => import("./views/about"));
function App() {
  return (
    <Router history={history}>
      <React.Suspense fallback={<Loading />}>
        <Menu>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/btc/:id" children={<Home />} />
            <Route path="/" forceRefresh={true} exact component={InforPage} />
          </Switch>
        </Menu>
        <Footer />
      </React.Suspense>
    </Router>
  );
}

export default App;
