import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateReport} from '../actions/siteAction'

class ReportEditForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            brands: [""],
            types: [],
            otherTypes:[""],
            defaultTypes: ["abc", "def", "ghi","Others"]
        }
        this.addFieldBrand.bind(this)
        this.addFieldType.bind(this)
        this.handleChange.bind(this)
        this.submit.bind(this)
    }

    componentDidMount = () => {
        if (this.props.report !== undefined) {
            Object.keys(this.props.report).forEach((key, index) => {
                if (key==="owner"){
                    return
                }
                else{
                    if (this.props.report[key] !== undefined) {
                        // console.log(key)
                        
                        this.setState({
                            [key]: this.props.report[key]
                        })

                    }
                }
            })
        }
    }

    addFieldBrand = () => {
        const current = this.state.brands
        current.push("")
        this.setState({
            brands: current
        })
    }

    addFieldType = () => {
        const current = this.state.otherTypes
        current.push("")
        this.setState({
            otherTypes: current
        })
    }

    submit = () =>{
        // const typesArr = this.state.types
        // if(typesArr.includes("Others")){
        //     var index = typesArr.indexOf("Others")
        //     typesArr.splice(index,1)
        // }
        const reportObj={
            owner:this.props.userId,
            total:this.state.total,
            brands:this.state.brands,
            otherTypes:this.state.otherTypes,
            types:this.state.types
        }
        const obj ={
            siteId:this.props.siteId,
            report: reportObj
        }
        this.props.updateReport(obj)
    }

    handleChange = e => {
        if (e.target.name === "brands") {

            var current = this.state.brands
            current[e.target.tabIndex] = e.target.value
            this.setState({
                [e.target.name]: current
            })
        }
        else if (e.target.name==="otherTypes"){
            var current = this.state.otherTypes
            current[e.target.tabIndex] = e.target.value
            this.setState({
                [e.target.name]: current
            })
        }
        else if (e.target.name === "type") {
            console.log(e.target)
            if (this.state.types.includes(e.target.value)) {
                const current = this.state.types
                var index = current.indexOf(e.target.value)
                current.splice(index, 1)
                this.setState({
                    types: current
                })
            }
            else {
                const current = this.state.types
                current.push(e.target.value)
                this.setState({
                    types: current
                })
            }
        }
        else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    render() {
        // const typesOf= ["abc","def","ghhi"]
        return (

            <div>
                <div className="form-group">
                    <span>Total amount</span>
                    <input className="form-control" name="total" type="number" value={this.state.total} onChange={this.handleChange} />kg
                </div>
                <span>Types</span>
                {this.state.defaultTypes.map((type, index) => {
                    return (
                        <div className="form-group" key={index}>
                            <label>{type}</label>
                            <input onChange={this.handleChange} className="form-control" type="checkbox" name="type" value={type} checked={this.state.types.includes(type)} />
                        </div>
                    )
                })}

                {this.state.types.includes("Others") && this.state.otherTypes.map((type, index) => {
                    return (
                        <div className="form-group" key={index}>
                            <input tabIndex={index} className="form-control" type="text" name="otherTypes" value={type} onChange={this.handleChange} />
                            {index === this.state.otherTypes.length - 1 && <button onClick={this.addFieldType}>Add</button>}
                        </div>
                    )
                })}

                <span>Brands</span>
                {this.state.brands.map((brand, index) => {
                    return (
                        <div className="form-group" key={index}>
                            <input tabIndex={index} className="form-control" type="text" name="brands" value={brand} onChange={this.handleChange} />
                            {index === this.state.brands.length - 1 && <button onClick={this.addFieldBrand}>Add</button>}
                        </div>
                    )
                })}



                <button onClick={this.submit}>Submit</button>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        updateReport: (obj) =>dispatch(updateReport(obj))
    }
}

export default connect(null,mapDispatchToProps)(ReportEditForm)