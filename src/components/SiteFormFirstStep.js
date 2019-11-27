import React from 'react';
import {Field,reduxForm} from 'redux-form';
import renderField from './render/renderField';
import validate from './validate';

const SiteFormFirstStep = props=>{
    const {handleSubmit} = props
    return(
        <form onSubmit = {handleSubmit}>
          
            <div className = "form-group">
                <Field className="form-control" name="name" type="text" label="Site's name" component={renderField} />
            </div>
            <div className="form-group">
                <Field className="form-control" name="description" type="text" label="Description" component={renderField} />
            </div>
            <div>
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
})(SiteFormFirstStep)
