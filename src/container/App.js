/**
 * App.js Layout Start Here
 */
import React, {Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import {NotificationContainer} from "react-notifications";
import RctThemeProvider from "./RctThemeProvider";
import RctDefaultLayout from "./DefaultLayout";
import {
  AsyncSessionLoginComponent,
  AsyncSessionRegisterComponent,
  AsyncSessionLockScreenComponent,
  AsyncSessionForgotPasswordComponent,
  AsyncSessionPage404Component,
  AsyncSessionPage500Component,
} from "Components/AsyncComponent/AsyncComponent";
import Cookies from "universal-cookie";

const cookies = new Cookies();

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      cookies.remove("user_id");
      location.replace("/login");
    }
    return Promise.reject(error);
  }
);

/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
const InitialPath = ({component: Component, authUser, isAdmin, ...rest}) => (
  <Route
    {...rest}
    render={(props) =>
      authUser && (isAdmin === "superadmin" || isAdmin === "admin") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: {from: props.location},
          }}
        />
      )
    }
  />
);

class App extends Component {
  render() {
    const {location, match, user, userProfile} = this.props;

    if (location.pathname === "/") {
      if (user === null) {
        return <Redirect to={"/login"} />;
      } else {
        return <Redirect to={"/admin/dashboard"} />;
      }
    }

    if (location.pathname === "/login") {
      if (user) {
        return <Redirect to={"/"} />;
      }
    }

    return (
      <RctThemeProvider>
        <NotificationContainer />
        <InitialPath path={`${match.url}admin`} authUser={user} isAdmin={userProfile?.user_type} component={RctDefaultLayout} />
        <Route path="/" component={AsyncSessionLoginComponent} />
      </RctThemeProvider>
    );
  }
}

// map state to props
const mapStateToProps = ({authUser}) => {
  const {user, userProfile} = authUser;
  return {user, userProfile};
};

export default connect(mapStateToProps)(App);
