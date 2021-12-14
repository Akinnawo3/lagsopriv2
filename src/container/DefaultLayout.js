/**
 * App Layouts
 */
import React, {Component} from "react";
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";

// app default layout
import RctAppLayout from "Components/RctAppLayout";

// router service
import routerService from "../services/_routerService";
import Spinner from "Components/spinner/Spinner";
import RctThemeProvider from "./RctThemeProvider";
import LinearProgress from "@material-ui/core/LinearProgress";

class DefaultLayout extends Component {
  render() {
    const {match, isLoading, authUserProfile} = this.props;
    console.log(authUserProfile);
    return (
      <RctAppLayout>
        {isLoading && <Spinner />}
        {routerService &&
          routerService.map((route, key) => {
            return (
              <Route
                key={key}
                path={`${match.url}/${route.path}`}
                component={authUserProfile.user_type === "superadmin" || authUserProfile.access_tab.includes(route.permision) || route.path === "login" ? route.component : () => <h1>Unauthorised</h1>}
              />
            );
          })}
      </RctAppLayout>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.loading.loading,
  isLoadingStatus: state.loading.loadingStatus,
  authUserProfile: state.authUser.userProfile,
});

export default withRouter(connect(mapStateToProps)(DefaultLayout));
