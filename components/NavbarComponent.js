import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {AiOutlineBell} from 'react-icons/ai'
import Image from 'next/image'

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container className='py-3'>
        <Link href="/" passHref><Navbar.Brand>Next Wallet</Navbar.Brand></Link>
        <div className="ms-auto d-flex">
          <Link href="/profile" passHref>
            <Image src="/images/profile.png" alt='profile' width={52} height={52} /> 
          </Link>
          <div className='mx-3 d-none d-lg-block'>
            <div>
              <strong>Robert Chandler</strong>
            </div>
            <div>
              <small>+62 8139 3877 7946</small>
            </div>
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