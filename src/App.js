import React, { Component } from "react";
import SiteMap from "./components/SiteMap";
import SiteInfo from "./components/SiteInfo";
import CreateSite from "./components/CreateSite";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";
import List from "./components/List";
import ReportsList from "./components/ReportsList";
import Report from "./components/Report";
import About from "./components/About";
import { fetchSites } from "./Redux/actions/siteAction";
import { logout } from "./Redux/actions/userAction";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./style.css";
import logo from "./logo.png";
// React Notification
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

// import * as siteActionTypes from "./Redux/actions/actionTypes";
import * as supscriptionListeners from "./Redux/actions/supscriptionListeners";

class App extends Component {
  componentDidMount() {
    this.props.fetchSites();
    supscriptionListeners.userAuthenticationListenner();
    supscriptionListeners.newMemberListenner();
    supscriptionListeners.newPostListenner();
    supscriptionListeners.newSiteListenner();
    supscriptionListeners.newCommentListenner();
    supscriptionListeners.newReportListenner();
  }
  // handleLogout = () => {
  //   this.props.logout();
  // };

  render() {
    let currentPath = window.location.pathname;
    let url = currentPath.split("/");
    var id = "";

    if (url[1] === "site" && url[2] !== "") {
      id = url[2];
      console.log(id);
    }
    // cons
    else if (url[1] === "report" && url[2] !== "") {
      id = url[2];
      console.log(id);
    }
    console.log("App props: ", this.props);
    return (
      <BrowserRouter>
        <div className="parent">
          <div>
            <nav className="navbar navbar-expand-lg bg-light navbar-light">
              <a className="navbar-brand" href="/">
                <img style={{ width: `60%`, height: `auto` }} src={logo}></img>
              </a>

              <ul className="navbar-nav text-right ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/create_site">
                    Create a Site
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/join_site">
                    Join a Site
                  </a>
                </li>
                {/* <li className="nav-item">
                <a className="nav link" href=""></a>
              </li> */}
              </ul>
            </nav>
          </div>
          <Route exact path={"/"} render={props => <Home {...props} />} />
          {id !== "" && (
            <Route
              exact
              path={`/site/${id}`}
              render={props => <SiteInfo siteId={id} {...this.props} />}
            />
          )}
          {/* <div className="container"> */}
          {/* <Route
              exact
              path={"/join_site"}
              render={props => <SiteMap sites={this.props.sites} {...props} />}
            />
            <Route
              exact
              path={"/create_site"}
              render={props => <CreateSite {...props} />}
            /> */}
          {/* {id !== "" && (
              <Route
                exact
                path={`/site/${id}`}
                render={props => <SiteInfo siteId={id} {...props} />}
              />
            )} */}
          {/* </div> */}
          <div className="container">
            <Route
              exact
              path={"/login"}
              render={props => <Login {...props} />}
            />
            <Route
              exact
              path={"/join_site"}
              render={props => <SiteMap {...props} />}
            />
            <Route
              exact
              path={"/create_site"}
              render={props => <CreateSite {...props} />}
            />
            <Route
              exact
              path={"/signup"}
              render={props => <SignUp {...props} />}
            />
            <Route
              exact
              path={"/profile"}
              render={props => <UserProfile {...props} />}
            />
            <Route
              exact
              path={"/reports"}
              render={props => <ReportsList {...props} />}
            />
            <Route exact path={"/list"} render={props => <List {...props} />} />
            <Route
              exact
              path={"/about"}
              render={props => <About {...props} />}
            />

            {id !== "" && (
              <Route
                exact
                path={`/report/${id}`}
                render={props => <Report siteId={id} {...props} />}
              />
            )}
            <NotificationContainer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    sites: state.siteReducer.sites,
    allState: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSites: () => dispatch(fetchSites())
    // newSite: newCreatedSite => dispatch()

    // logout: () => dispatch(logout())
    // ,newSiteCreated: newSite =>
    //   dispatch({ type: siteActionTypes.ADD_SITE, payload: newSite })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
