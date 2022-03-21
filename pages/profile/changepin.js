import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import PinInput from '../../components/PinInput'
import http from '../../helpers/http'
import Link from 'next/link'

const changepin = () => {
  const otp = useSelector(state => state.otp)
  const [status, setStatus] = useState('input')
  const [errorMsg, setErrorMsg] = useState('')
  const [hasInputOldPin, setHasInputOldPin] = useState(false)
  const [oldPin, setOldPin] = useState('')
  const [newPin, setNewPin] = useState('')
  const dispatch = useDispatch()

  const handleContinue = () =>{
    setHasInputOldPin(true)
    dispatch({type: 'RESET_OTP'})
  }

  const handleChangePin = async () => {
    dispatch({type: 'RESET_OTP'})
    if(status === 'input'){
      const token = window.localStorage.getItem('token')
  
      const data = new URLSearchParams()
      data.append('oldPin', oldPin)
      data.append('newPin', newPin)
      const request = await http(token).patch('/profile/change-pin', data, {
        validateStatus: (status) =>{
          return status < 400
        }
      }).catch((error)=>{
        setStatus('failed')
        setErrorMsg(error.response.data.message)
      })
      if(request && request.status === 200){
        setStatus('success')
      }
    }
  }

  const handleTryAgain = () =>{
    setStatus('input')
    setHasInputOldPin(false)
    setErrorMsg('')
    dispatch({type: 'RESET_OTP'})
  }
  
  useEffect(() => {
    if(otp.otp.length < 6){
      if(!hasInputOldPin){
        document.getElementById("continueButton").disabled = true;
      }else{
        document.getElementById("changePinButton").disabled = true;
      }
    }else {
      if(!hasInputOldPin){
        document.getElementById("continueButton").disabled = false;
      }else{
        document.getElementById("changePinButton").disabled = false;
      }
    }
    if(status === 'input'){
      if(hasInputOldPin){
        setNewPin(otp.otp)
      }else{
        setOldPin(otp.otp)
      }
    }
  }, [otp])

  return (
    <Layout>
      {
        status === 'input' && !hasInputOldPin &&
        <Container className='white-bg round-container py-3'>
          <div className='mb-2'>
            <strong>
              Change PIN
            </strong>
          </div>
          <div className='mb-4'>
            <small>
              Enter your current 6 digits Next Wallet PIN below to continue to the next steps.
            </small>
          </div>
          <div className='mb-4'>
            <PinInput />
          </div>
          <div>
            <Button id='continueButton' isBlock={true} variant='primary' onClick={handleContinue} >Continue</Button>
          </div>
        </Container>
      }
      {
        status === 'input' && hasInputOldPin && 
        <Container className='white-bg round-container py-3'>
          <div className='mb-2'>
            <strong>
              Change PIN
            </strong>
          </div>
          <div className='mb-4'>
            <small>
              Type your new 6 digits security PIN to use in Zwallet.
            </small>
          </div>
          <div className='mb-4'>
            <PinInput />
          </div>
          <div>
            <Button id='changePinButton' isBlock={true} variant='primary' onClick={handleChangePin} >Change Pin</Button>
          </div>
        </Container>
      }
      {
        status === 'failed' &&
        <Container className='white-bg round-container py-3'>
          <div className='mb-2'>
            <strong>
              Change PIN
            </strong>
          </div>
          <div className='mb-4'>
            <small>
              Failed to change your pin.
            </small>
          </div>
          <div className='mb-4'>
            <h3 className='error-message'>{errorMsg}</h3>
          </div>
          <div>
            <Button isBlock={true} variant='primary' onClick={handleTryAgain} >Try Again</Button>
          </div>
        </Container>
      }
      {
        status === 'success' &&
        <Container className='white-bg round-container py-3'>
          <div className='mb-2'>
            <strong>
              Change PIN
            </strong>
          </div>
          <div className='mb-4'>
            <small>
              Your pin has been updated
            </small>
          </div>
          <div>
            <Link href='/' passHref>
              <Button isBlock={true} variant='primary'>Home</Button>
            </Link>
          </div>
        </Container>
      }
    </Layout>
  )
}

export default changepin