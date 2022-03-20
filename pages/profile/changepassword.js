import React from 'react'
import { Container } from 'react-bootstrap'
import Layout from '../../components/Layout'
import {FaLock} from "react-icons/fa"
import InputGroups from '../../components/InputGroups'
import Button from '../../components/Button'

const changepassword = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    
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
      </Container>
    </Layout>
  )
}

export default changepassword