import React from "react";
import history from "./history";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Menu from "./components/Menu/index";
import MainFooter from "./components/Footer/MainFooter";
import ScrollToTop from "./hooks/ScrollToTop";

const Home = React.lazy(() => import("./views/home"));
const InforPage = React.lazy(() => import("./views/inforPage"));
const About = React.lazy(() => import("./views/about"));
const Login = React.lazy(() => import("./views/login"));
const SignUp = React.lazy(() => import("./views/signUp"));

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <BrowserRouter history={history}>
        <ScrollToTop />
        <Menu>
          <div style={{ paddingTop: "60px" }}>
            <Switch>
              <Route path="/" forceRefresh={true} exact component={InforPage} />
              <Route path="/btc/:id" children={<Home />} title="Index Page" />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/sign_up" component={SignUp} />
            </Switch>
          </div>
        </Menu>
        <MainFooter />
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
