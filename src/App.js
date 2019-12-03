import React, { Component } from "react";
import SiteMap from "./components/SiteMap";
import SiteInfo from "./components/SiteInfo";
import CreateSite from "./components/CreateSite";
import Home from "./components/Home";
import { fetchSites } from "./Redux/actions/siteAction";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./style.css";

// import * as siteActionTypes from "./Redux/actions/actionTypes";
import * as supscriptionListeners from "./Redux/actions/supscriptionListeners";

class App extends Component {
  componentDidMount() {
    supscriptionListeners.userAuthenticationListenner();
    supscriptionListeners.newMemberListenner();
    supscriptionListeners.newPostListenner();
    supscriptionListeners.newSiteListenner();
    supscriptionListeners.newCommentListenner();
    supscriptionListeners.newReportListenner();
  }

  render() {
    let currentPath = window.location.pathname;
    let url = currentPath.split("/");
    var id = "";

    if (url[1] === "site" && url[2] !== "") {
      id = url[2];
      console.log(id);
    }
    // console.log("App props: ", this.props);
    return (
      <BrowserRouter>
        <div>
          <div>
            <nav className="navbar navbar-expand-lg bg-light navbar-light">
              <a className="navbar-brand" href="/">
                Viet Nam Sach va Xanh
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
          <div className="container">
            <Route
              exact
              path={"/join_site"}
              render={props => <SiteMap sites={this.props.sites} {...props} />}
            />
            <Route
              exact
              path={"/create_site"}
              render={props => <CreateSite {...props} />}
            />
            {id !== "" && (
              <Route
                exact
                path={`/site/${id}`}
                render={props => <SiteInfo siteId={id} {...props} />}
              />
            )}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    sites: state.sites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSites: () => dispatch(fetchSites())
    // ,newSiteCreated: newSite =>
    //   dispatch({ type: siteActionTypes.ADD_SITE, payload: newSite })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
