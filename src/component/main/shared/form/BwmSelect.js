import React from 'react';

export const BwmSelect = ({
  input,
  label,
  options,
  className,
  meta: { touched, error, warning }
}) => {

  function renderOptions() {
    console.log(options)
    return options.map((option, index) => {
      return <option key={index} value={option}> {option} </option>
    });
  }

  return (
    <div className='form-group'>
      <label>{label}</label>
        <select {...input} className={className} >
          {renderOptions()}
        </select>
        {touched &&
          ((error && <div className='alert alert-danger'>{error}</div>))}
    </div>
  )
}
