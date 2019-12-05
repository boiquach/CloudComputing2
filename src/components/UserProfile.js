import React, { Component } from "react";
// import { fetchUser } from '../actions/siteAction'
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import ProfileEditForm from "./ProfileEditForm";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
    this.openEdit.bind(this);
  }
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  openEdit = () => {
    this.setState({
      editing: !this.state.editing
    });
  };
  render() {
    return (
      <Route>
        <div>
          {this.props.isLogin ? (
            <div>
              <div className="align">
                <div className="align map profile">
                  {!this.state.editing ? (
                    <div className="invite">
                      <div className="profile_text">
                        <h5>Profile</h5>
                        <p>
                          <span>
                            <b>Email:</b>{" "}
                          </span>{" "}
                          {this.props.user.email} <br />
                          <span>
                            <b>First Name:</b>{" "}
                          </span>{" "}
                          {this.props.user.firstname} <br />
                          <span>
                            <b>Last Name:</b>{" "}
                          </span>{" "}
                          {this.props.user.lastname} <br />
                          <span>
                            <b>Phone:</b>{" "}
                          </span>{" "}
                          {this.props.user.phone} <br />
                        </p>
                        <button className="info_button" onClick={this.openEdit}>
                          Edit
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <ProfileEditForm
                        closeEdit={this.openEdit}
                        user={this.props.user}
                        userId={this.props.userId}
                      />
                    </div>
                  )}
                  <div>
                    <img
                      style={{ width: `300px` }}
                      src="https://cdn1.iconfinder.com/data/icons/gardening-81/512/Bud-512.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Redirect to={{ pathname: "/login" }} />
          )}
        </div>
      </Route>
    );
  }
}

const mapStateToProps = state => {
  return {
    // userId: state.userId.userId,
    // user: state.user.user,
    // isLogin: state.isLogin.isLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
