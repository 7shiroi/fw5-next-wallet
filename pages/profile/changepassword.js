import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../../components/Layout'
import {FaLock} from "react-icons/fa"
import InputGroups from '../../components/InputGroups'
import Button from '../../components/Button'
import http from '../../helpers/http'

const changepassword = () => {
  const [status, setStatus] = useState('input') //input, success, failed

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = window.localStorage.getItem('token')
    const data = new URLSearchParams()
    data.append('oldPassword', e.target.elements['curPassword'].value)
    data.append('newPassword', e.target.elements['newPassword'].value)
    data.append('confirmPassword', e.target.elements['confirmPassword'].value)

    const request = await http(token).post('/profile/change-password', data)
      .catch(
        setStatus('failed')
      )
    if(request){
      setStatus('success')
    }
  }
  return (
    <Layout>
      <Container className='white-bg round-container py-3'>
        <div className='mb-2'>
          <strong>
            Change Password
          </strong>
        </div>
        <div className='mb-4'>
          <small>
            You must enter your current password and then type your new password twice.
          </small>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <InputGroups 
              icon={<FaLock />}
              name='curPassword'
              type='password'
              required={true}
              placeholder='Current password'
            />
          </div>
          <div className='mb-4'>
            <InputGroups 
              icon={<FaLock />}
              name='newPassword'
              type='password'
              required={true}
              placeholder='New password'
            />
          </div>
          <div className='mb-4'>
            <InputGroups 
              icon={<FaLock />}
              name='confirmPassword'
              type='password'
              required={true}
              placeholder='Repeat new password'
            />
          </div>
          <Button isBlock={true} type='submit'>Change Password</Button>
        </form>
        {
          status === 'success' &&
          <h3>Your password has been updated!</h3>
        }
        {
          status === 'failed' &&
          <h3 className='error-message'>Failed to update your password!</h3>
        }
      </Container>
    </Layout>
  )
}

export default changepassword