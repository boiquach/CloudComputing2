import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import classnames from 'classnames'
import 'react-datepicker/dist/react-datepicker.css'

class DatePickerInput extends Component {

    handleChange= (date)=>{
        this.props.input.onChange(new Date(date))
    }

  render () {
    const { input,className, meta: { error, touched }, required, ...rest } = this.props
    
    return (
      <div className={classnames('form-group', { 'has-danger': error })}>
        <DatePicker {...rest}
          className={classnames(className, { 'form-control-danger': error })}
          showTimeSelect
          inline
          timeCaption="Time"
          timeFormat="HH:mm"
          dateFormat="yyyy-MM-dd@HH:mm:ss"
          timeInvervals={30}
          minDate={new Date()}
          minTime={new Date().setHours(9)}
          maxTime={new Date().setHours(21)}
          onChange={this.handleChange}
          required={required}
          placeholderText="Choose date and time for the clean up"
          selected={input.value ? new Date(input.value) : null} />
        {touched && error && <span className="error_text">{error}</span>}
      </div>
    )
  }
}


DatePickerInput.defaultProps = {
  className: 'form-control',
  required: true
}

export default DatePickerInput