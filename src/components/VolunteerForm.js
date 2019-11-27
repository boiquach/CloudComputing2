import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addVolunteerEmail} from '../actions/siteAction'

class VolunteerForm extends Component{
    constructor(props){
        super(props)
        this.state={
            email:''
        }
        this.handleChange.bind(this)
        this.add.bind(this)
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    add = () =>{
        const data = {
            site:this.props.siteId,
            volunteer:this.state.email
        }
        this.props.addVolunteerEmail(data)
    }

    render(){
        return(

            <div>
                <div className="form-group">
                    <span>Email</span>
                    <input name="email" type="text" value={this.state.email} onChange={this.handleChange} required/>
                </div>
                <button onClick={this.add}>Register</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addVolunteerEmail: (data) => dispatch(addVolunteerEmail(data))
    }
}

export default connect(null,mapDispatchToProps)(VolunteerForm)