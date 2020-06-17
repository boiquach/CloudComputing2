import React from 'react'

const renderField = ({className, input, label, type, meta: { touched, error } }) => (
  <div>
    <span><b>{`${label}:`}</b></span>
    <div>
      <input {...input} className={className} placeholder={label} type={type} />
      {touched && error && <span className="error_text">{error}</span>}
    </div>
  </div>
)

export default renderField