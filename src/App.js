import React, {Component} from 'react';
import SiteMap from "./components/SiteMap"
import SiteInfo from "./components/SiteInfo"
import CreateSite from './components/CreateSite'
import {fetchSites} from './actions/siteAction'
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import './style.css'

class App extends Component{
  componentWillMount=()=>{
    this.props.fetchSites();
  }
  
  
  render(){
    
    let currentPath=window.location.pathname;
    let url = currentPath.split('/')
    var id = ''

    if(url[1]==="site" && url[2]!==""){
      id = url[2]
      console.log(id)
    }

    return(
      <BrowserRouter>
      <div className="container">
        <Route exact path ={'/'} render={(props)=> <SiteMap sites = {this.props.sites} {...props} />} />
        <Route exact path={'/create_site'} render={(props)=><CreateSite {...props} />} />
        {id!=='' && <Route exact path={`/site/${id}`} render={(props)=><SiteInfo siteId = {id} {...props}/>} />}
      </div>
      </BrowserRouter>
    )
  }
}
const mapStateToProps= state =>{
  return{
  sites:state.sites.sites}
};

const mapDispatchToProps
 = (dispatch)=>{
  return{
    fetchSites: () => dispatch(fetchSites())
}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
