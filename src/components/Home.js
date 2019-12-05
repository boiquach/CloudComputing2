import React, { Component } from "react";
import { connect } from "react-redux";
// import {Link} from 'react-router-dom'

import { fetchSites, createSite, editSite } from "../Redux/actions/siteAction";

import {
  login,
  logout,
  checkUser,
  jointSite,
  createPost,
  updateProfile,
  memberPutCommentOnPost
} from "../Redux/actions/userAction";

// import { Hub, graphqlOperation } from "aws-amplify";
// import API from "@aws-amplify/api";
// import * as subscriptions from "../graphql/subscriptions";

// function checkUser() {
//   //require Amplify config in index.js
//   Auth.currentAuthenticatedUser()
//     .then(user => console.log({ user }))
//     .catch(err => console.log(err));
// }

// function signOut() {
//   Auth.signOut()
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// }

class Home extends Component {
  render() {
    console.log("Home props: ", this.props);
    const newSite = {
      name: "new site name",
      description: "new site description"
    };
    const createNewSite = () => this.props.createSite(newSite);
    const jointToSite = () => {
      const userId = this.props.user.id;
      const siteID = this.props.sites[0].id;
      console.log("joint to site: ", userId, " - ", siteID);
      jointSite(userId, siteID);
      //note: this will triger the listening subscription
    };

    const editASite = () => {
      const editedSite = {
        id: this.props.sites[1].id,
        description: "updated description",
        // name: "edited name...",
        long: "edited long"
      };
      this.props.editSite(editedSite);
    };

    const updateUserProfile = () => {
      const newProfile = {
        id: this.props.user.id,
        lastName: "updated last name"
        // name: "edited name...",
        // long: "edited long"
      };
      this.props.updateProfile(newProfile);
    };

    const putComment = () => {
      this.props.memberPutCommentOnPost("fadfa", "fdd", "fadfa");
    };

    return (
      <div>
        <div>
          <div className="banner">
            <div className="title_text">
              <h1>Viet Nam Sach va Xanh</h1>
              <br />

              <a className="button home" href="/join_site">
                Join
              </a>

              <a className="button home" href="/create_site">
                Create
              </a>
            </div>
          </div>
          <div className="container">
            <div className="align txt">
              <div className="home_text">
                <div className="home_text_align">
                  <h4>Welcome to Keep Vietnam Clean and Green</h4>
                  <p>
                    Vietnam Clean and Green’s mission is to reduce littering in
                    Vietnam and to bring about momentous societal change. We’ll
                    raise public awareness about the negative impacts of
                    littering and highlight the importance of individual
                    responsibility. To accomplish this mission, we seek to
                    cooperate with companies, educational institutions,
                    government agencies, NGOs and anyone else who believes in a
                    cleaner country and world.
                  </p>
                </div>
              </div>
              <div>
                <img
                  style={{ width: `300px`, height: `300px` }}
                  src="tree.png"
                />
                {/* <img style={{width:`60px`,height:`60px`}} src="home.png" /> */}
              </div>
              {/* 
              {this.props.notifications ? (
                <div>show list of notifications</div>
              ) : (
                <h></h>
              )} */}
            </div>
          </div>
        </div>

        {/* <div className="banner">
          <div className="title_text">
            <h1>Clean Up </h1>
            <br />

            <a className="button home" href="/join_site">
              Join
            </a>

            <a className="button home" href="/create_site">
              Create
            </a>
          </div>
        </div> */}
        {/* {this.props.sites
          ? this.props.sites.map((site, i) => (
              <div key={i}>
                <p>id: {site.id}</p>
                <p>address: {site.address}</p>
                <p>lat: {site.lat}</p>
                <p>long: {site.long}</p>
                and more info....read in props....
              </div>
            ))
          : null} */}
        <div>
          {/* {this.props.user.email ? (
            <p>
              <b>current user:</b>
              {this.props.user.id}
              {this.props.user.iconUrl}
              {this.props.user.firstName}
              {this.props.user.lastName}
              {this.props.user.email}
              {this.props.user.phone}
              {this.props.user.image}
              {/* {this.props.user.jointedSites} */}
          {/* {this.props.user.posts} */}
          {/* {this.props.user.reports} */}
          {/* {this.props.user.comments} */}
          {/* </p> */}
          {/* ) : null */}
        </div>
        {/* <button onClick={this.props.signIn}>Sign In</button>
        <button onClick={this.props.checkUser}>get User info</button>
        <button onClick={this.props.signOut}>Sign Out</button>
        <button onClick={updateUserProfile}>update user profile</button>
        <button>put image to aws(not yet)</button>
        <button>put avatar to aws(not yet)</button>
        <br />
        <button onClick={this.props.fetchSites}>fetch Sites</button>
        <button onClick={createNewSite}>create site</button>
        <button onClick={editASite}>update site </button>
        <button onClick={jointToSite}>joint site</button>
        <button onClick={createPost}>post news to site</button>
        <button onClick={putComment}>comment to a post </button> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    sites: state.siteReducer.sites,
    user: state.userReducer.user,
    allState: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSites: () => dispatch(fetchSites()),
    checkUser: () => dispatch(checkUser()),
    signIn: () => dispatch(login()),
    signOut: () => dispatch(logout()),
    createSite: newSite => dispatch(createSite(newSite)),
    editSite: editedSite => dispatch(editSite(editedSite)),
    updateProfile: newProfile => dispatch(updateProfile(newProfile)),
    memberPutCommentOnPost: (dfa, fa, fd) =>
      dispatch(memberPutCommentOnPost(dfa, fa, fd))
    // jointSite: () => dispatch(jointSite())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
