import React, { Fragment, useLayoutEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, setLoadingToFalse } from "./redux/actions/userActions";
import { loadCart } from "./redux/actions/seedActions";
import setAuthToken from "./utils/setAuthToken";
import LoadingSpinner from "./components/UI-components/LoadingSpinner";
import Modal from "./components/UI-components/Modal";

import "./App.scss";

import TopNavBar from "./layout/TopNavBar";
import Navbar from "./layout/Navbar";

import Home from "./pages/home/Home";
import Login from "./pages/users/Login";
import Registration from "./pages/users/Registration";

import CreateSeed from "./pages/seeds/CreateSeed";
import ShowSeeds from "./pages/seeds/ShowSeeds";
import Cart from "./pages/seeds/Cart";

import ResetEmail from "./pages/users/ResetEmail";
import ResetPassword from "./pages/users/ResetPassword";

import Footer from "./layout/Footer";

// import NewPayment from "./pages/payments/NewPayment";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useLayoutEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (token) {
      setAuthToken(token);
      dispatch(loadUser(token));
    } else {
      dispatch(setLoadingToFalse());
    }

    const cart = JSON.parse(localStorage.getItem("cart"));

    dispatch(loadCart(cart));
  }, [dispatch]);

  console.log("Node environment", process.env.process.env.NODE_ENV);

  return (
    <Fragment>
      <Router>
        <Modal />
        {isLoading && <LoadingSpinner asOverlay />}
        <TopNavBar />

        <Navbar />
        <main className="main-content">
          <Switch>
            <Route
              exact
              path="/password/reset/:token/:userId"
              component={ResetPassword}
            />
            <Route exact path="/password/reset" component={ResetEmail} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/seeds" component={ShowSeeds} />
            <Route exact path="/seeds/new" component={CreateSeed} />
            <Route exact path="/register" component={Registration} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </Fragment>
  );
};

export default App;
