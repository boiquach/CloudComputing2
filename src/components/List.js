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
                        {(this.props.sites !== null && this.props.sites !== undefined) ?
                            <ul>
                                {this.props.sites.map(site => {
                                    return (
                                        <li key={site.id}>
                                            <a href={`site/${site.id}`}>{site.info.name}</a>
                                        </li>
                                    )
                                })}
                            </ul> : <div>Loading...</div>

                        }

                    </div>
                    :
                    <Redirect to={{ pathname: "/login" }} />
                }

            </Route>

        )

    }


}

const mapStateToProps = state => ({
    sites: state.sites.sites,
    userId: state.userId.userId,
    isLogin: state.isLogin.isLogin
})

const mapDispatchToProps = dispatch => ({
    fetchSitesByUser: id => dispatch(fetchSitesByUser(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(List);