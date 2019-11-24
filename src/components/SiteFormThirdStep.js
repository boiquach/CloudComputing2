import React from 'react';
import {Field,reduxForm} from 'redux-form';
import validate from './validate';

const renderError=({meta:{touched, error}}) =>(
    touched && error ? <span>{error}</span>:false
)

const SiteFormThirdStep = props=>{
    const {handleSubmit, previousPage,pristine,submitting} = props
    return(
        <form onSubmit = {handleSubmit}>
            <div>
                How many Clean Up bags do you require? <br/>
                <div>
                    <label><Field name="kit" type="radio" component="input" value="0" />{''}0</label>
                
                    <label><Field name="kit" type="radio" component="input" value="10" />{''}10</label>
                
                    <label><Field name="kit" type="radio" component="input" value="20" />{''}20</label>
                    <Field name="kit" component={renderError} /><br/>
                </div>
            
            </div>

            <div>
                Do you require a sharp container? <br/>
                <div>
                    <label><Field name="container" type="radio" component="input" value="Yes" />{''}Yes</label>
                
                    <label><Field name="container" type="radio" component="input" value="No" />{''}No</label>
                
                    <Field name="container" component={renderError} /><br/>
                </div>
            
            </div>

            <div>
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
            </div>
        </form>

    )

}

export default reduxForm({
    form:'site',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(SiteFormThirdStep)