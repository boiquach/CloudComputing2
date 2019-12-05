import React, { Component } from "react";
import SiteForm from "./SiteForm";
import { connect } from "react-redux";

import { createSite } from "../Redux/actions/siteAction";
import { Route, Redirect } from "react-router-dom";
import * as userActions from "../Redux/actions/userAction";
import { ConsoleLogger } from "@aws-amplify/core";

class CreateSite extends Component {
  render() {
    console.log("createSite props: ", this.props);
    this.props.user.id
      ? console.log("welcome user: ", this.props.user.name)
      : this.props.checkUser();

    // console.log(this.props.isLogin);
    return (
      <Route>
        {this.props.user.id ? (
          <div>
            <SiteForm onSubmit={this.props.handleSubmit} />
          </div>
        ) : (
          <div>not yet login ...</div>
          //  { this.props.checkUser()}

          // <Redirect
          //   to={{
          //     pathname: "/login"
          //   }}
          // />
        )}
      </Route>
    );
  }
}
const mapStateToProps = state => {
  return {
    // sites: state.siteReducer.sites,
    // isLogin: state.isLogin.isLogin,
    // userId: state.userId.userId,
    user: state.userReducer.user,
    allState: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: site => {
      // site.owner = sessionStorage.getItem("user");
      site.datetime = String(site.datetime);
      // datetimenew Date(date).getDate().toString()
      console.log("createsite submit: ", site);
      dispatch(createSite(site));
    },
    checkUser: () => dispatch(userActions.checkUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateSite);
