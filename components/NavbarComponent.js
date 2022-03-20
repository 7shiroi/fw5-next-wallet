import Link from 'next/link'
import React, { useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {AiOutlineBell} from 'react-icons/ai'
import Image from 'next/image'
import { useDispatch, useSelector } from "react-redux"
import { getBalance, getPhoneNumbers, getProfile } from '../redux/actions/profile'

const NavbarComponent = () => {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.profile)

  useEffect(()=>{
    const token = window.localStorage.getItem('token')
    dispatch(getProfile(token))
    dispatch(getPhoneNumbers(token))
    dispatch(getBalance(token))
  },[])

  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container className='py-3'>
        <Link href="/" passHref><Navbar.Brand>Next Wallet</Navbar.Brand></Link>
        <div className="ms-auto d-flex">
          <Link href="/profile" passHref>
            <Image src={profile?.profileData.picture ? profile?.profileData.picture : "/images/noprofilepicture.png"} alt='profile' width={52} height={52} /> 
          </Link>
          <div className='mx-3 d-none d-lg-flex flex-column justify-content-center'>
            <div>
              <strong>{profile?.profileData.fullName}</strong>
            </div>
            {
              profile?.phoneNumber.length > 0 &&
              <div>
                <small>{profile?.phoneNumber[profile?.phoneNumber.length-1]}</small>
              </div>
            }
          </div>
          <div className='d-flex align-items-center ms-2'>
            <AiOutlineBell size={20} />
          </div>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent