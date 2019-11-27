import React, { Component } from 'react';
import SiteForm from './SiteForm';
import { connect } from 'react-redux';
import { addSite } from '../actions/siteAction'
import { Route, Redirect } from 'react-router-dom'


class CreateSite extends Component {

  render() {
    console.log(this.props.isLogin)
    return (
      <Route>
        {this.props.userId!==null ? <div>
          <SiteForm onSubmit={this.props.handleSubmit} />
        </div>:
        <Redirect to={{
          pathname:"/login"
        }} />
        }

      </Route>)
  }
}
const mapStateToProps = state => {
  return {
    sites: state.sites.sites,
    user: state.user.user,
    isLogin: state.isLogin.isLogin,
    userId:state.userId.userId

  }
};

const mapDispatchToProps= (dispatch) => {
    return {
      handleSubmit: (site) => {
        site.owner = sessionStorage.getItem('user')
        dispatch(addSite(site))

      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CreateSite);