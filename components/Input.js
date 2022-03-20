import React from 'react'
import Styles from '../styles/input.module.css'

const Input = ({type, name, variant='underline', className='', ...rest}) => {
  return (
    <input
      type={type}
      name={name}
      className={`${variant === 'underline' ? Styles.underline : '' } ${className}`}
      {...rest}
    />
  )
}

export default Input