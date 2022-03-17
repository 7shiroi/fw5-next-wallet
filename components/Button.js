import React from 'react'
import {Button as BsButton} from 'react-bootstrap'

const Button = ({isBlock=false, variant, children, ...rest}) => {
  return (
    <>
      {isBlock && <div className='d-grid'>
        <BsButton variant={variant} {...rest}>
          {children}
        </BsButton>
      </div>}
      {!isBlock && 
        <BsButton variant={variant} {...rest}>
          {children}
        </BsButton>}
    </>
  )
}

export default Button