import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchReport, fetchSite } from '../actions/siteAction'
import { Route, Redirect } from 'react-router-dom'
import ReportEditForm from './ReportEditForm'

class Report extends Component {
    constructor(props){
        super(props)
        this.state={
            editing:false
        }
        this.openEdit.bind(this)
    }
    componentDidMount() {
        this.props.fetchSite(this.props.siteId)
        this.props.fetchReport(this.props.siteId)
    }

    openEdit = ()=>{
        this.setState({
            editing:!this.state.editing
        })
    }

    render() {
        return (
            <Route>
                {this.props.isLogin ?
                <div>
                    {!this.props.fetching ? 
                    <div>

                        {!this.props.fetchingFail ?
                        <div>
                            {!this.props.fetchingReport ?
                            <div>
                                {!this.props.reportFail ?
                                <div className="align">
                                    <div className="form_block">
                                        <div className="align"><h4>Outcome Report</h4></div>
                                    
                                    {this.state.editing ?
                                    <div> <ReportEditForm closeEdit={this.openEdit} site={this.props.site} userId={this.props.userId} siteId={this.props.siteId} report={this.props.report} />
                                    
                                    </div>
                                    :
                                    <div className="site_form edit">
                                            <div>
                                                <div><b>Total amount of garbage: </b>{this.props.report.total} kg</div>
                                                <div></div>
                                                {/* <b>Total amount of garbage: </b>{this.props.report.total} kg */}
                                            </div>
                                            <b>Types of garbage: </b>
                                                <ul>
                                                {this.props.report.types.map(type=>{
                                                    return(
                                                    <li>{type}</li>
                                                    )
                                                })}
                                                </ul>
                                            <b>Brands: </b>
                                                <ul>
                                                {this.props.report.brands.map(brand=>{
                                                    return(
                                                    <li>{brand}</li>
                                                    )
                                                })}
                                                </ul>
                                            
                                        
                                        <div className="align">
                                        <button className="info_button" onClick={this.openEdit}>Update</button>
                                        </div>
                                    </div>
                                    
                                    }

                                    </div>
                                    
                                </div>
                                :
                                <div className="align">
                                    <div className="form_block">
                                        <div className="align">
                                    Report does not exist yet. Please fill in the form below.
                                    </div>
                                    
                                    <ReportEditForm site={this.props.site} userId={this.props.userId} siteId={this.props.siteId} />
                                    </div>
                                </div>
                                
                                }
                            </div>
                            :
                            <div>Loading report...</div>
                            }
                        </div>
                        :
                        <div>Site does not exist.</div>
                        }
                    </div>
                    
                    :
                    
                    <div>Loading...</div>
                    
                    
                    }
                
                
                
                
                
                </div> :
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
        userId: state.userId.userId,
        report: state.report.report,
        fetching: state.fetching.fetching,
        fetchingFail: state.fetchingFail.fetchingFail,
        fetchingReport: state.fetchingReport.fetchingReport,
        reportFail: state.reportFail.reportFail,
        site: state.site.site,
        isLogin: state.isLogin.isLogin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchReport: id => dispatch(fetchReport(id)),
        fetchSite: id => dispatch(fetchSite(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Report)