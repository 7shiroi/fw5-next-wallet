import React from 'react'
import {Button as BsButton} from 'react-bootstrap'

const Button = ({isBlock=false, children, ...rest}) => {
  return (
    <>
      {isBlock && <div className='d-grid'>
        <BsButton {...rest}>
          {children}
        </BsButton>
      </div>}
      {!isBlock && 
        <BsButton {...rest}>
          {children}
        </BsButton>}
    </>
  )
}

export default Button