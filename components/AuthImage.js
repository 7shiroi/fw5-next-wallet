import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'
import AuthImageStyles from '../styles/AuthImage.module.css'

const AuthImage = () => {
  return (
    <div className={AuthImageStyles.background + ' vh-100'}>
      <Container className='d-flex flex-column justify-content-center h-100'>
        <h1>Next Wallet</h1>   
        <div className='d-flex justify-content-center'>
          <Image className='img-fluid' src="/images/png-phone2.png" alt="phone" width={400} height={600} />  
          <Image className='img-fluid' src="/images/png-phone.png" alt="phone" width={400} height={600} />      
        </div>
        <h2>App that Covering Banking Needs.</h2>
        <p>
          Next Wallet is an application that focussing in banking needs for all users
          in the world. Always updated and always following world trends.
          5000+ users registered in Next Wallet everyday with worldwide
          users coverage.
        </p>
      </Container>
    </div>
  )
}

export default AuthImage