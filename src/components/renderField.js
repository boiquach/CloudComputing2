import React from 'react'

const renderField = ({className, input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} className={className} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

export default renderField