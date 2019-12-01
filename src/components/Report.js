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
                                <div>
                                    <span>{this.props.report.total}</span>
                                    <button onClick={this.openEdit}>Update</button>
                                    {this.state.editing && <ReportEditForm site={this.props.site} userId={this.props.userId} siteId={this.props.siteId} report={this.props.report} />}
                                </div>
                                :
                                <div>

                                    Report does not exist yet. Create one?
                                    <ReportEditForm site={this.props.site} userId={this.props.userId} siteId={this.props.siteId} />

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