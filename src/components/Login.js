import React, { Component } from "react";
import { connect } from "react-redux";
// import { login, loginFacebook, loginGoogle } from "../Redux/actions/userAction";
import { Route, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange.bind(this);
    this.submit.bind(this);
    this.fb.bind(this);
    this.google.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = () => {
    this.props.login(this.state.email, this.state.password);
  };

  fb = () => {
    this.props.loginFacebook();
  };

  google = () => {
    this.props.loginGoogle();
  };

  render() {
    return (
      <Route>
        {this.props.isLogin ? (
          <Redirect to={{ pathname: "/" }} />
        ) : (
          <div className="align">
            <div className="form_block">
              <div className="align">
                <h4>Login</h4>
              </div>
              <div className="site_form edit">
                <div className="form-group">
                  <span>
                    <b>Email:</b>
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <span>
                    <b>Password:</b>
                  </span>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="align">
                  <a href="/signup">Register an account.</a>
                </div>
                <div className="align">
                  <div>
                    <button className="next fill" onClick={this.submit}>
                      Login
                    </button>
                  </div>
                  <div></div>
                </div>

                <div className="align">
                  <button className="next" onClick={this.fb}>
                    Login with Facebook
                  </button>
                  <button className="next" onClick={this.google}>
                    Login with Google
                  </button>
                </div>
                <div className="align"></div>
              </div>
            </div>
          </div>
        )}
      </Route>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.isLogin.isLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // login: (email, password) => dispatch(login(email, password)),
    // loginFacebook: () => dispatch(loginFacebook()),
    // loginGoogle: () => dispatch(loginGoogle())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
