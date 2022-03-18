import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import { Container, Form, Row } from 'react-bootstrap'
import InputGroups from '../components/InputGroups'
import {BsSearch} from 'react-icons/bs'

const transfer = () => {
  return (
    <Layout>
      <Head>
        <title>History</title>
        <meta name="description" content="Next Wallet your future wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className='round-container white-bg py-3'>
        <Row>
          <h4>Transaction History</h4>
        </Row>
        <Row>
          <InputGroups 
              icon={<BsSearch />}
              name='search'
              type='text'
              variant='transparent'
              placeholder='Search receiver here'
            />
        </Row>
      </Container>
    </Layout>
  )
}

export default transfer