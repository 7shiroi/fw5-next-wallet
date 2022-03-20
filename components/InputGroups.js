import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import InputGroupsStyle from '../styles/InputGroups.module.css'

const InputGroups = ({icon, name, type, variant='underline', required=false, invalid=false, prefix='', ...rest }) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text className={`${variant==='underline' ? InputGroupsStyle.underline : InputGroupsStyle.transparent} ${InputGroupsStyle.inputlabel} ${invalid ? InputGroupsStyle.invalid : ''}`} id={name}>{icon}</InputGroup.Text>
      {prefix &&
        <InputGroup.Text className={`${variant==='underline' ? InputGroupsStyle.underline : InputGroupsStyle.transparent} ${InputGroupsStyle.inputlabel} ${invalid ? InputGroupsStyle.invalid : ''}`}>
          {prefix}
        </InputGroup.Text>
      }
      <FormControl
        className={`${variant==='underline' ? InputGroupsStyle.underline : InputGroupsStyle.transparent} ${invalid ? InputGroupsStyle.invalid : ''}`}
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