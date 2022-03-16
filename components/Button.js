import React from 'react'
import {Button as BsButton} from 'react-bootstrap'

const Button = ({isBlock=false, children, ...rest}) => {
  return (
    
    <BsButton >
      {children}
    </BsButton>
  )
}

export default Button