import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import ImageUpload from "./render/renderImageUpload";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span className="error_text">{error}</span> : false;

const SiteFormThirdStep = props => {
  const { handleSubmit, previousPage, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <span>
          <b>Image*:</b>
        </span>
        <Field name="image" label="Image" component={ImageUpload} />
      </div>
      <div>
        <span>
          <b>How Many Clean Up Bags Do You Require?*</b>
        </span>
        <div className="form-group form-check">
          <label className="form-check-label">
            <Field
              className="form-check-input"
              name="kit"
              type="radio"
              component="input"
              value="0"
            />
            {""}0
          </label>
        </div>
        <div className="form-group form-check">
          <label className="form-check-label">
            <Field
              className="form-check-input"
              name="kit"
              type="radio"
              component="input"
              value="10"
            />
            {""}10
          </label>
        </div>
        <div className="form-group form-check">
          <label className="form-check-label">
            <Field
              className="form-check-input"
              name="kit"
              type="radio"
              component="input"
              value="20"
            />
            {""}20
          </label>
        </div>
        <div>
          <Field name="kit" component={renderError} />
          <br />
        </div>
      </div>

      <div>
        <span>
          <b>Do You Need Sharp Container?*</b>
        </span>
        <div className="form-group form-check">
          <label className="form-check-label">
            <Field
              className="form-check-input"
              name="container"
              type="radio"
              component="input"
              value="Yes"
            />
            {""}Yes
          </label>
        </div>
        <div className="form-group form-check">
          <label className="form-check-label">
            <Field
              className="form-check-input"
              name="container"
              type="radio"
              component="input"
              value="No"
            />
            {""}No
          </label>
        </div>
        <div>
          <Field name="container" component={renderError} />
          <br />
        </div>
      </div>

      <div className="align">
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <div className="align">
          <button
            type="submit"
            disabled={pristine || submitting}
            className="next fill"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "site",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SiteFormThirdStep);
