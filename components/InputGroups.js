import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import InputGroupsStyle from '../styles/InputGroups.module.css'

const InputGroups = ({icon, name, type, required=false, ...rest }) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text className={`${InputGroupsStyle.underline} ${InputGroupsStyle.inputlabel}`} id={name}>{icon}</InputGroup.Text>
      <FormControl
        className={`${InputGroupsStyle.underline}`}
        name={name}
        type={type}
        required={required}
        aria-label={name}
        aria-describedby={name}
        {...rest}
      />
    </InputGroup>
  )
}

export default InputGroups