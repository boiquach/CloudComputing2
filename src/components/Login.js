import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/siteAction'
import {Route,Redirect} from "react-router-dom"

class Login extends Component {


    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',

        }
        this.handleChange.bind(this)
        this.submit.bind(this)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = () => {
        this.props.login(this.state.email, this.state.password)
    }

    render() {

        return (

            <Route>

                {this.props.isLogin ?
                    <Redirect to={{ pathname: "/" }} />
                    :
                    <div>
                        <div className="form-group">

                            <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">

                            <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <button onClick={this.submit}>Login</button>

                        <a href="/signup">Register an account</a>
                    </div>
                }



            </Route>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isLogin: state.isLogin.isLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)