import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Layout from '../../components/Layout'

const personal = () => {
  const profile = useSelector(state => state.profile)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  useEffect(() => {
    if (profile.profileData.fullName){
      const nameAsArray = profile.profileData.fullName.split(' ')
      if (nameAsArray.length > 1){
        setLastName(nameAsArray[nameAsArray.length-1])
        setFirstName(nameAsArray.slice(0,-1).join(' '))
      }
    }
  }, [profile.profileData])
  return (
    <Layout>
      <Container className='white-bg round-container py-3'>
        <div className='mb-2'>
          <strong>Personal Information</strong>
        </div>
        <div className='mb-4'>
          <small>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</small>
        </div>
        <div className='shadow-sm py-2 px-4 mb-4 round-container'>
          <small>First Name</small>
          <h5>
            {firstName}
          </h5>
        </div>
        <div className='shadow-sm py-2 px-4 mb-4 round-container'>
          <small>Last Name</small>
          <h5>
            {lastName}
          </h5>
        </div>
        <div className='disabled shadow-sm py-2 px-4 mb-4 round-container'>
          <small>Verified E-mail</small>
          <h5>
            {profile?.profileData.email}
          </h5>
        </div>
        <div className='d-flex justify-content-between shadow-sm py-2 px-4 round-container'>
          <div>
            <small>Phone Number</small>
            {
              profile?.phoneNumber.length > 0 &&
              <h5>
                {profile?.phoneNumber[profile?.phoneNumber.length - 1]}
              </h5>
            }
            {
              profile?.phoneNumber.length === 0 &&
              <h5>
                {`You haven't registered any phone number`}
              </h5>
            }
          </div>
          <div className='d-flex align-items-center'>            
            <Link href="/profile/phonenumber">
              Manage
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default personal