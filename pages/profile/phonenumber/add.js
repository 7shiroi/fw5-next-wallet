import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import InputGroups from '../../../components/InputGroups'
import Layout from '../../../components/Layout'
import {FiPhone} from 'react-icons/fi'
import Button from '../../../components/Button'
import http from '../../../helpers/http'
import Link from 'next/link'

const add = () => {
  const [status, setStatus] = useState('input') //status: [input, added, failed]
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const token = window.localStorage.getItem('token')
    const data = new URLSearchParams()
    data.append('number', `+62 ${e.target.elements['number'].value}`)
    const addPhoneNumber = await http(token).post('/profile/phones',data);
    if(addPhoneNumber.data.message === "Phone added!"){
      setStatus("added")
    }else{
      setStatus("failed")
    }
  }
  return (
    <Layout>
      {
        status === 'input' &&
        <Container className='white-bg round-container py-3'>
          <div className='mb-2'>
            <strong>
              Add Phone Number
            </strong>
          </div>
          <div className='mb-4'>
            <small>
              Add at least one phone number for the transfer ID so you can start transfering your money to another user.
            </small>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <InputGroups 
                type='text' 
                name='number' 
                prefix='+62' 
                icon={<FiPhone />} 
                placeholder='Enter your phone number'  
              />
            </div>
            <div>
              <Button type='submit' variant='primary' isBlock={true}>Add Phone Number</Button>
            </div>
          </form>
        </Container>
      }
      {
        status === 'added' &&
        <Container className='white-bg round-container py-3'>
          <div className='mb-2'>
            <strong>
              Add Phone Number
            </strong>
          </div>
          <div className='mb-4'>
            <small>
              Your phone number has been registered!
            </small>
          </div>
  
          <Link href='/profile/phonenumber' passHref>
            <Button variant='primary' isBlock={true}>Manage Phone Number</Button>
          </Link>
        </Container>
      }
      {
        status === 'failed' &&
        <Container className='white-bg round-container py-3'>
          <div className='mb-2'>
            <strong>
              Add Phone Number
            </strong>
          </div>
          <div className='mb-4'>
            <small>
              Something wrong when we tried to register your number. Please try again!
            </small>
          </div>
  
          <Button variant='primary' isBlock={true} onClick={setStatus('input')}>Retry</Button>
        </Container>
      }
    </Layout>
  )
}

export default add