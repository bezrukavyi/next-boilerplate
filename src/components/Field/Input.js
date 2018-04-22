import React from 'react'
import classnames from 'classnames'

const Input = ({ name, label, type, ...props }) => {
  const touched = props.touched[name]
  const error = props.errors[name]
  const value = props.values[name]

  return (
    <div className={classnames('form-group', { 'label__off': !label })}>
      <span className='form-group__label'>{label}</span>
      <input
        type={type}
        name={name}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={value || ''}
      />
      {error && <div className='form-group__error'>{error}</div>}
    </div>
  )
}

export default Input
