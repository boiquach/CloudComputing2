import React, { Component } from 'react'
import { fetchUser } from '../actions/siteAction'
import { connect } from 'react-redux'
import { Route, Redirect } from "react-router-dom"
import ProfileEditForm from './ProfileEditForm'

class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false
        }
        this.openEdit.bind(this)
    }
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }
    openEdit = () => {
        this.setState({
            editing: !this.state.editing
        })
    }
    render() {
        return (
            <Route>
                {this.props.isLogin ?
                    <div>

                        <span>Email: </span> {this.props.user.email} <br />
                        <button onClick={this.openEdit}>Edit</button>

                        {!this.state.editing ?
                            <div>

                                <span>First Name: </span> {this.props.user.firstname} <br />
                                <span>Last Name: </span> {this.props.user.lastname} <br />
                                <span>Phone: </span> {this.props.user.phone}
                            </div>

                            :

                            <div>
                                <ProfileEditForm user={this.props.user} userId={this.props.userId} />
                            </div>

                        }



                    </div>

                    :

                    <Redirect to={{ pathname: "/login" }} />

                }
            </Route>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.userId.userId,
        user: state.user.user,
        isLogin: state.isLogin.isLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)