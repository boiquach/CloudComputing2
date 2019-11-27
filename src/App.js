import React, {Component} from 'react';
import SiteMap from "./components/SiteMap"
import SiteInfo from "./components/SiteInfo"
import CreateSite from './components/CreateSite'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import {fetchSites,logout} from './actions/siteAction'
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import './style.css'

class App extends Component{
  componentWillMount=()=>{
    this.props.fetchSites();
  }
  
  handleLogout=()=>{
    this.props.logout()
  }
  
  render(){
    
    let currentPath=window.location.pathname;
    let url = currentPath.split('/')
    var id = ''

    if(url[1]==="site" && url[2]!==""){
      id = url[2]
      console.log(id)
    }
    console.log(this.props.isLogin)
    return(
      <BrowserRouter>
      
      <div>
        <div>
          <nav className="navbar navbar-expand-lg bg-light navbar-light">
            <a className="navbar-brand" href="/">Viet Nam Sach va Xanh</a>

            
            <ul className="navbar-nav text-right ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/create_site">Create a Site</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/join_site">Join a Site</a>
              </li>
              {(!this.props.isLogin || this.props.isLogin===null) && <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>}
              {this.props.isLogin && <li className="nav-item">
                <a className="nav-link" href="" onClick={this.handleLogout.bind(this)} >Logout</a>
              </li>}
              {/* <li className="nav-item">
                <a className="nav-link" href=""></a>
              </li> */}

            </ul>
            
          </nav>
        </div>
        <Route exact path ={'/'} render={(props)=> <Home {...props} />} />
        <div className="container">
          <Route exact path={'/login'} render={(props)=><Login {...props} />} />
          <Route exact path ={'/join_site'} render={(props)=> <SiteMap sites = {this.props.sites} {...props} />} />
          <Route exact path={'/create_site'} render={(props)=><CreateSite {...props} />} />
          <Route exact path={'/signup'} render={(props)=><SignUp {...props} />} />
          {id!=='' && <Route exact path={`/site/${id}`} render={(props)=><SiteInfo siteId = {id} {...props}/>} />}
        </div>
      </div>
      </BrowserRouter>
    )
  }
}
const mapStateToProps= state =>{
  return{
    sites:state.sites.sites,
    isLogin:state.isLogin.isLogin
  }
};

const mapDispatchToProps = (dispatch)=>{
  return{
    fetchSites: () => dispatch(fetchSites()),
    logout: () => dispatch(logout())
}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
