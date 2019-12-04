import React from 'react';
import {Field,reduxForm} from 'redux-form';
import validate from './validate';
import DatePickerInput from './render/renderDatePicker'
import PlaceSearch from './render/renderPlaceSearch'

const SiteFormSecondStep = props=>{
    const {handleSubmit, previousPage} = props
    return(
        <form onSubmit = {handleSubmit}>
            <label>Location: </label>
            <Field name="location" label="Location" component={PlaceSearch} />
            <label>Date and Time: </label>
            <Field name="datetime" label="Date and Time" component={DatePickerInput} required />
            
            <div className="align">
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <div className="align">
                <button type="submit" className="next">Next</button></div>
            </div>
        </form>

    )

}

export default reduxForm({
    form:'site',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(SiteFormSecondStep)