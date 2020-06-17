import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SiteFormFirstStep from './SiteFormFirstStep';
import SiteFormSecondStep from './SiteFormSecondStep';
import SiteFormThirdStep from './SiteFormThirdStep';

class SiteForm extends Component {
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
            page: 1
        }
    }

    nextPage() {
        this.setState({ page: this.state.page + 1 })
    }
    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }


    render() {
        const numbers = [1, 2, 3]
        const stages = ["Site's name and description","Location and Date","Other information"]
        const { onSubmit } = this.props
        const { page } = this.state
        return (
            <div className="align">
                
                <div className="form_block">
                    <div className="map">
                        <div className="align"><h4>Register a Clean Up Site</h4> </div>
                        <div className="align"><img style={{width:`60px`,height:`60px`}} src="tree.png" /></div>
                        
                        
                    </div>
                    
                    <br/>
                    <div className="tab" >

                        {numbers.map((number,index) => {
                            return (
                                <div>
                                    {this.state.page === number ? <button disabled className="active"><b>{`Step ${number}: ${stages[index]}`}</b></button> : <button disabled>Step {number}</button>}
                                </div>
                            )
                        })}
                    </div>
                    <div className="align">
                        <div className="site_form">
                        <div className="form_content">
                        
                                {page === 1 && <SiteFormFirstStep onSubmit={this.nextPage} />}
                                {page === 2 && <SiteFormSecondStep previousPage={this.previousPage} onSubmit={this.nextPage} />}
                                {page === 3 && <SiteFormThirdStep previousPage={this.previousPage} onSubmit={onSubmit} />}
                            </div>
                        </div>
                    </div>
                </div></div>
        )
    }
}

SiteForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default SiteForm