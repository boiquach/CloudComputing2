import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchSites} from "../actions/siteAction";

class List extends Component{
    // componentWillMount(){
    //     this.props.fetchSites();
    // }
    // componentWillReceiveProps(props) {
        
    // }


    render(){
        return(
            <div>
                abc
                {/* {this.props.data!==null?
                    this.props.data.map((student,key)=>
                    <div>

                        <li>{student.name}</li>

                    </div>
                    ):
                // <div>

                //     abc
                // </div>:
        console.log("null")
        } */}
            </div>
            
        )
        
    }


}

const mapStateToProps= state =>({
    data:state.data.data
})

const mapDispatchToProps = dispatch=>({
    fetchSites: () => dispatch(fetchSites())
})


export default connect(mapStateToProps, mapDispatchToProps)(List);