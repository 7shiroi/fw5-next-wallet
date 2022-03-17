import React, { Component } from 'react'
import OtpInput from 'react-otp-input'
import PinInputStyle from '../styles/PinInput.module.css'

export default class PinInput extends Component {
  state = { otp: '' };

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
      <OtpInput 
        value={this.state.otp}
        onChange={this.handleChange}
        numInputs={6}
        isInputNum={true}
        containerStyle={PinInputStyle.pin_container}
        inputStyle={PinInputStyle.pin_input}
      />
    )
  }
}
