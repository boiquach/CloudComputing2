import React, { Component } from "react";
import SiteMap from "./components/SiteMap";
import SiteInfo from "./components/SiteInfo";
import CreateSite from "./components/CreateSite";
import Home from "./components/Home";
import { fetchSites } from "./actions/siteAction";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./style.css";

//Hub for check user changes
import { Hub } from "aws-amplify";

//for graphql...
import API, { graphqlOperation } from "@aws-amplify/api";
import PubSub from "@aws-amplify/pubsub";
import * as mutations from "./graphql/mutations";
// import * as queries from "./graphql/queries";
// import * as subscriptions from "./graphql/subscriptions";
//config api
import cloudConfig from "./aws-exports";
API.configure(cloudConfig);
PubSub.configure(cloudConfig);

class App extends Component {
  componentWillMount = () => {
    this.props.fetchSites();
    Hub.listen("auth", data => {
      const { payload } = data;
      console.log("A new auth event has happened: ", data);
      if (payload.event === "signIn") {
        console.log("a user has signed in!");
      }
      if (payload.event === "signOut") {
        console.log("a user has signed out!");
      }
    });
  };

  render() {
    let currentPath = window.location.pathname;
    let url = currentPath.split("/");
    var id = "";

    if (url[1] === "site" && url[2] !== "") {
      id = url[2];
      console.log(id);
    }

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
    sites: state.sites.sites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSites: () => dispatch(fetchSites())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

//todo: check how to intergrate these:
// async function getData() {
//   try {
//     const sitesData = await API.graphql(
//       graphqlOperation(queries.listSites, { limit: 100 })
//     );
//     console.log("getdata: ", sitesData.data.listSites.items);
//     dispatch({ type: QUERY, sites: sitesData.data.listSites.items });
//   } catch (err) {
//     console.warn("Failed to get data ", err);
//   }
// }
// getData();
// async function getUserID() {
//   return await Auth.currentAuthenticatedUser();
//   // return UserID.username;
// }
// getUserID().then(user => {
//   console.log("userid owner: ", user.username);
//   try {
//     const subscription = API.graphql(
//       graphqlOperation(subscriptions.onCreateSite, {
//         owner: user.username
//       })
//     ).subscribe({
//       next: eventData => {
//         // console.log("error subsciption: ", eventData);

//         const site = eventData.value.data.onCreateSite;
//         dispatch({ type: SUBSCRIPTION, site });
//       }
//     });
//     return () => subscription.unsubscribe();
//   } catch (err) {
//     console.warn("Failed to get data ", err);
//   }
// })
