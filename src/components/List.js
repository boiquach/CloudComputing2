import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSitesByUser } from "../actions/siteAction";
import { Route, Redirect } from "react-router-dom"

class List extends Component {
    componentDidMount() {
        this.props.fetchSitesByUser(this.props.userId)
    }

    render() {
        return (

            <Route>
                {this.props.isLogin ?

                    <div>

                        {!this.props.fetching ? 
                        <div>

                            {this.props.sites !== null && this.props.sites !== undefined ?
                            <div >
                                {this.props.sites.length > 0 ? 
                                <div className="form_block">
                                    <h4 className="align">Sites You Have Created</h4>
                                <div className="site_card_center">

                                    
                                    {this.props.sites.map(site => {
                                        return (
                                            <div className="site_card" key={site.id}>
                                                <a href={`site/${site.id}`}><h5>{site.info.name}</h5></a>
                                                <ul>
                                                    <li><b>Location: </b>{site.info.location}</li>
                                                    <li><b>Date: </b>{`${new Date(site.info.datetime.seconds * 1000)}`}</li>
                                                </ul>
                                                <br />
                                                <div className="align">
                                                    <a href={`/report/${site.id}`}>Outcome Report</a></div>
                                            </div>
                                        )
                                    })}


                                </div> </div>: 
                                <div>You haven't created any clean up site.</div>}
                        </div>
                        
                        :<div>
                        You haven't created any clean up site.
                            
                            </div>}
                        </div>
                        :<div>Loading...</div>}
                    </div>
                    :
                    <Redirect to={{ pathname: "/login" }} />
                }

            </Route>

        )

    }


}

const mapStateToProps = state => ({
    sites: state.sitesUser.sitesUser,
    userId: state.userId.userId,
    isLogin: state.isLogin.isLogin,
    fetching:state.fetching.fetching
})

const mapDispatchToProps = dispatch => ({
    fetchSitesByUser: id => dispatch(fetchSitesByUser(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(List);