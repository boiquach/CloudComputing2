import React from 'react';
import {Field,reduxForm} from 'redux-form';
import validate from './validate';
import DatePickerInput from './render/renderDatePicker'
import PlaceSearch from './render/renderPlaceSearch'
import ImageUpload from './render/renderImageUpload'

const SiteFormSecondStep = props=>{
    const {handleSubmit, previousPage} = props
    return(
        <form onSubmit = {handleSubmit}>
           
            <Field name="location" label="Location" component={PlaceSearch} />
            <Field name="datetime" label="Date and Time" component={DatePickerInput} />
            <Field name="image" label = "Image" component={ImageUpload} />
            <div>
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="next">Next</button>
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