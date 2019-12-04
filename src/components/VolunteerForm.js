import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addVolunteerEmail} from '../actions/siteAction'

class VolunteerForm extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            errorShown:false,
            
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
        if(this.props.list!==undefined){
            if(this.props.list.includes(this.state.email)){
                console.log('existed')
                this.setState({
                    errorShown:!this.props.errorShown
                })
            }
            else{
                console.log('new')
                this.props.addVolunteerEmail(data)
                this.props.openJoin()
            }
        }
        else{
            console.log('new')
            this.props.addVolunteerEmail(data)
            this.props.openJoin()
        }
        
    }

    render(){
        return(

            <div>
                <div className="form-group">
                    <span>Email</span>
                    <input name="email" className="form-control" type="text" value={this.state.email} onChange={this.handleChange} required/>
                    {this.state.errorShown && <span>This email has already joined this site.</span>}
                </div>
                <button className="info_button" onClick={this.add}>Register</button>
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