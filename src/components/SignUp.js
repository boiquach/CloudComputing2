import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions/siteAction'
import { Route, Redirect } from "react-router-dom"

class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            firstname:'',
            lastname:'',
            phone:''
        }
        this.handleChange.bind(this)
        this.signup.bind(this)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signup = () => {
        const newUser={
            email:this.state.email,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            phone:this.state.phone
        }
        this.props.signup(newUser, this.state.password)
    }

    render() {
        return (
            <Route>

                {this.props.isLogin ?
                    <Redirect to={{ pathname: "/" }} />
                    :
                    <div>
                        <div>

                            <div className='form-group'>

                                <input type="email" className='form-control' value={this.state.email} name='email' onChange={this.handleChange} />
                            </div>
                            <div className='form-group'>
                                <input type="password" className='form-control' value={this.state.password} name='password' onChange={this.handleChange} />

                            </div>
                            <div className='form-group'>

                                <input type="text" className='form-control' value={this.state.firstname} name="firstname" onChange={this.handleChange} />
                            </div>

                            <div className='form-group'>

                                <input type="text" className='form-control' value={this.state.lastname} name="lastname" onChange={this.handleChange} />
                            </div>
                            <div className='form-group'>

                                <input type="text" className='form-control' value={this.state.phone} name="phone" onChange={this.handleChange} />
                            </div>

                            <button onClick={this.signup}>Register</button>

                        </div>
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


const MapDispatchToProps = (dispatch) => {
    return {
        signup: (newUser, password) => dispatch(signup(newUser, password))
    }
}

export default connect(mapStateToProps, MapDispatchToProps)(SignUp)