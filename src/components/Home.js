import React, { Component } from "react";
// import {Link} from 'react-router-dom'

import { Auth } from "aws-amplify";
import * as graphqlActions from "../Redux/actions/graphqlActions";

function checkUser() {
  //require Amplify config in index.js
  Auth.currentAuthenticatedUser()
    .then(user => console.log({ user }))
    .catch(err => console.log(err));
}

function signOut() {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
class Home extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <div className="title_text">
            <h1>Clean Up</h1>
            <br />

            <a className="button home" href="/join_site">
              Join
            </a>

            <a className="button home" href="/create_site">
              Create
            </a>
          </div>
        </div>
        <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
        <button onClick={checkUser}>Check User</button>
        <button onClick={signOut}>Sign Out</button>
        <button onClick={graphqlActions.fetchSites}>
          fetch Sites from graphql
        </button>
      </div>
    );
  }
}

export default Home;
