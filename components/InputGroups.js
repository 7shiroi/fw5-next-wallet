import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'

const InputGroups = ({icon, name, type, ...rest }) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id={name}>{icon}</InputGroup.Text>
      <FormControl
        name={name}
        type={type}
        aria-label={name}
        aria-describedby={name}
        {...rest}
      />
    </InputGroup>
  )
}

export default InputGroups