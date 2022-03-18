import React from 'react'
import OtpInput from 'react-otp-input'
import { useDispatch, useSelector } from 'react-redux';
import PinInputStyle from '../styles/PinInput.module.css'

const PinInput = () => {
  const otp = useSelector(state => state.otp);
  const dispatch = useDispatch()

  const handleChange = (otp) => dispatch({ type: 'UPDATE_OTP', payload:{otp} });
  return (
    <OtpInput 
      value={otp.otp}
      onChange={handleChange}
      numInputs={6}
      isInputNum={true}
      containerStyle={PinInputStyle.pin_container}
      inputStyle={PinInputStyle.pin_input}
    />
  )
}


export default PinInput