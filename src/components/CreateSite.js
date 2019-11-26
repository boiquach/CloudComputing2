import React, { Component } from 'react';
import SiteForm from './SiteForm';
import { connect } from 'react-redux';
import { addSite } from '../actions/siteAction'


class CreateSite extends Component {

    render() {

        return (
            <div>

                

                <SiteForm onSubmit={this.props.handleSubmit} />


            </div>);
    }
}
const mapStateToProps= state =>{
    return{
    sites:state.sites.sites}
  };
  
  const mapDispatchToProps
   = (dispatch)=>{
    return{
      handleSubmit: (site) => {
        site.user="abc"
        dispatch(addSite(site))
        
        }
  }
  }

export default connect(mapStateToProps,mapDispatchToProps)(CreateSite);