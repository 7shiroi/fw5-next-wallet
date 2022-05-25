import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Head from 'next/head'
import { Container, Row } from 'react-bootstrap'
import UserContact from '../../components/UserContact'
import { useSelector } from 'react-redux'
import Button from '../../components/Button'
import PinModal from '../../components/PinModal'

const Confirm = () => {
  const [modalShow, setModalShow] = useState(false);
  const transfer = useSelector(state => state.transfer)
  const profile = useSelector(state => state.profile)
  const date = new Date(Date.now())
  return (
    <Layout>
      <Head>
        <title>Transfer</title>
        <meta name="description" content="Next Wallet your future wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className='round-container white-bg py-3'>
        <Row className='mb-2'>
          <h4>Transfer To</h4>
        </Row>
        <Row className='mb-4'>
          <UserContact 
            name={transfer.transferData.name}
            phoneNumber={transfer.transferData.phoneNumber}
            picture={transfer.transferData.picture}
          />
        </Row>
        <Row className='mb-3'>
          <h4>Details</h4>
        </Row>
        <Row className='round-container shadow-sm mb-3'>
          <div className='px-4 py-2'>
            <div>
              <small>Amount</small>
            </div>
            <div>
              <h3>
                Rp {Number(transfer.transferData.amount).toLocaleString('id-ID')}
              </h3>
            </div>
          </div>
        </Row>
        <Row className='round-container shadow-sm mb-3'>
          <div className='px-4 py-2'>
            <div>
              <small>Balance Left</small>
            </div>
            <div>
              <h3>
                Rp {Number(profile.balance - transfer.transferData.amount).toLocaleString('id-ID')}
              </h3>
            </div>
          </div>
        </Row>
        <Row className='round-container shadow-sm mb-3'>
          <div className='px-4 py-2'>
            <div>
              <small>{`Date & Time`}</small>
            </div>
            <div>
              <h3>
                {date.toLocaleDateString('en-US')} {date.toLocaleTimeString('en-US')}
              </h3>
            </div>
          </div>
        </Row>
        {
          transfer.transferData.notes &&
          <Row className='round-container shadow-sm mb-3'>
            <div className='px-4 py-2'>
              <div>
                <small>Notes</small>
              </div>
              <div>
                <h3>
                  {transfer.transferData.notes}
                </h3>
              </div>
            </div>
          </Row>
        }
        <div className='text-end'>        
          <Button className='px-3 py-2' onClick={() => {setModalShow(true)}}>Continue</Button>
        </div>
      </Container>
    
      <PinModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </Layout>
  )
}

export default Confirm