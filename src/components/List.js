import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchToDos} from "../actions/dataAction";

class List extends Component{
    componentWillMount(){
        this.props.fetchToDos();
    }
    componentWillReceiveProps(props) {
        
    }


    render(){
        return(
            <div>
                {this.props.data!==null?
                    this.props.data.map((student,key)=>
                    <div>

                        <li>{student.name}</li>

                    </div>
                    ):
                // <div>

                //     abc
                // </div>:
        console.log("null")
        }
            </div>
            
        )
        
    }


}

const mapStateToProps= state =>({
    data:state.data.data
})

const mapDispatchToProps = dispatch=>({
    fetchToDos: () => dispatch(fetchToDos())
})


export default connect(mapStateToProps, mapDispatchToProps)(List);