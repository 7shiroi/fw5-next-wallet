import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from './Footer'
import MenuBar from './MenuBar'
import NavbarComponent from './NavbarComponent'

const Layout = ({children}) => {
  return (
    <>
      <NavbarComponent />
      <Container className='py-4'>
        <Row>
          <Col md={3}>
            <MenuBar />
          </Col>
          <Col md={9}>
            {children}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Layout