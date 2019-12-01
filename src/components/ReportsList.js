import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchReports} from '../actions/siteAction'

class Report extends Component{
    componentDidMount= ()=>{
        this.props.fetchReports()
    }
    render(){
        return(
            <div>

                {this.props.reports.map(report=>{
                    return(
                        <div>{report.name}</div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        reports:state.reports.reports
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        fetchReports: ()=>dispatch(fetchReports())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Report)