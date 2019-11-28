import React, { Component } from "react";
// import {Link} from 'react-router-dom'
//using amplify tool to control  authenticated user
//using Hub to get notyfy on user from amplify
import { Auth } from "aws-amplify";

function checkUser() {
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
      </div>
    );
  }
}

export default Home;
