import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchReports } from '../actions/siteAction'
import { Route, Redirect } from "react-router-dom"

class Report extends Component {
    componentDidMount = () => {
        this.props.fetchReports()
    }
    render() {
        return (
            <Route>
                {this.props.isLogin ?
                    <div>

                        {!this.props.fetchingReport ?
                            <div>
                                {!this.props.reportFail ?
                                    <div>
                                        <div className="align"><h4>Reports</h4></div>
                                        <div className="site_card_center">

                                            {this.props.reports.map(report => {
                                                return (
                                                    <div className="report_card" key={report.id}>

                                                        <div><b>ID: </b>{report.id}</div>
                                                        
                                                        <div><b>Total amount of garbage: </b>{report.info.total} kg</div>

                                                        <b>Types of garbage: </b>   
                                                        <ul>
                                                            {report.info.types.map(type => {
                                                                return (
                                                                    <li>{type}</li>
                                                                )
                                                            })}
                                                        </ul>
                                                        <b>Brands: </b>
                                                        <ul>
                                                            {report.info.brands.map(brand => {
                                                                return (
                                                                    <li>{brand}</li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    :
                                    <div className="align">

                                        Failed to fetch reports. You might not have permission to view this page.
                                </div>

                                }
                            </div>
                            :
                            <div>Loading reports...</div>
                        }
                    </div>

                    :
                    <Redirect to={{
                        pathname: "/login"
                    }} />
                }

            </Route>

        )
    }
}

const mapStateToProps = state => {
    return {
        reports: state.reports.reports,
        isLogin: state.isLogin.isLogin,
        fetchingReport:state.fetchingReport.fetchingReport,
        reportFail:state.reportFail.reportFail
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchReports: () => dispatch(fetchReports())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Report)