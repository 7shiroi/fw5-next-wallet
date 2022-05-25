import React from 'react'
import Styles from '../styles/Input.module.css'

const Input = ({type, name, variant='underline', invalid=false, className='', ...rest}) => {
  return (
    <input
      type={type}
      name={name}
      className={`${variant === 'underline' ? Styles.underline : '' } ${invalid ? Styles.invalid : '' } ${className}`}
      {...rest}
    />
  )
}

export default Input