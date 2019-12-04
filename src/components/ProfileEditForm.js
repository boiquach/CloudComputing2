import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editUser } from '../actions/siteAction'

class ProfileEditForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            phone: "",
            email:""
        }

        this.handleChange.bind(this)
        this.submit.bind(this)
    }

    componentDidMount() {
        Object.keys(this.props.user).forEach((key, index) => {

            if (this.props.user[key] !== undefined) {

                this.setState({
                    [key]: this.props.user[key]
                })

            }
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = () => {
        const user = {
            email: this.props.user.email,
            phone: this.state.phone,
            firstname: this.state.firstname,
            lastname: this.state.lastname
        }

        this.props.editUser(this.props.userId, user)
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <span>First Name: </span>
                    <input className="form-control" type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <span>Last Name: </span>
                    <input className="form-control" type="text" onChange={this.handleChange} value={this.state.lastname} name="lastname" />
                </div>
                <div className="form-group">
                    <span>Phone: </span>
                    <input className="form-control" type="text" name="phone" onChange={this.handleChange} value={this.state.phone} />
                </div>
                <button className="next fill" onClick={this.submit}>Update</button>
                <button className="next" onClick={this.props.closeEdit}>Close</button>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editUser: (id, user) => dispatch(editUser(id, user))
    }
}

export default connect(null, mapDispatchToProps)(ProfileEditForm)