import React from 'react'
import { Container } from 'react-bootstrap'
import FooterStyles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={FooterStyles.bg}>
      <Container className='py-3'>
        <div className='d-flex flex-column flex-md-row justify-content-between'>
          <div className='order-3 order-md-1'>
            2020 Zwallet. All right reserved.
          </div>
          <div className='d-flex flex-column flex-md-row justify-content-end align-items-md-center align-items-end order-2'>
            <div className='me-md-5'>
              <strong>
                +62 5637 8882 9901
              </strong>
            </div>
            <div>
              <strong>
                contact@zwallet.com
              </strong>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer