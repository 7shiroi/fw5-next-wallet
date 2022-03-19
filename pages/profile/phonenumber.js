import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import {FiTrash} from 'react-icons/fi'
import Button from '../../components/Button'
import Link from 'next/link'
import { getPhoneNumbers } from '../../redux/actions/profile'

const phonenumber = () => {
  const profile = useSelector(state => state.profile)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const token = window.localStorage.getItem('token')
    dispatch(getPhoneNumbers(token))
  }, [])

  return (
    <Layout>
      <Container className='white-bg round-container py-3'>
        <div className='mb-2'>
          <strong>
            Manage Phone Number
          </strong>
        </div>
        <div className='mb-4'>
          <small>
            You can only delete the phone number and then you must add another phone number.
          </small>
        </div>
        {profile.phoneNumber.length > 0 &&
          profile.phoneNumber.map((obj, idx) => {
            return (
              <div key={idx} className='d-flex justify-content-between shadow-sm py-2 px-4 mb-4 round-container'>
                <div>
                  <small>Primary</small>
                  <h5>
                    {obj.number}
                  </h5>
                </div>
                <div className='d-flex align-items-center'>            
                  <FiTrash color='#BBBBBE' size={20} />
                </div>
              </div>
            )
          })
        }
        {
          profile.phoneNumber.length === 0 && 
          <div className='shadow-sm py-2 px-4 mb-4 round-container'>
            {`You haven't registered any number`}
          </div>
        }


        <div>
          <Link href='/profile/phonenumber/add' passhref>
            <Button variant='primary' isBlock={true}>Add Phone Number</Button>
          </Link>
        </div>
      </Container>
    </Layout>
  )
}

export default phonenumber