import React from 'react'
import Head from 'next/head'
import { Container, Form, Row } from 'react-bootstrap'
import HistoryDashboard from '../components/HistoryDashboard'
import Layout from '../components/Layout'

const history = () => {
  return (
    <Layout>
      <Head>
        <title>History</title>
        <meta name="description" content="Next Wallet your future wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className='round-container white-bg py-3 my-3'>
        <div className='d-flex justify-content-between'>
          <div>
            <h4>Transaction History</h4>
          </div>
          <Form.Select >
            <option>Name</option>
            <option>Type</option>
          </Form.Select>
        </div>
        <HistoryDashboard image="/images/profile.png" name="Samuel Suhi" type="Accept" nominal={50000} />
        <HistoryDashboard image="/images/profile.png" name="Samuel Suhi" type="Accept" nominal={50000} />
        <HistoryDashboard image="/images/profile.png" name="Samuel Suhi" type="Accept" nominal={50000} />
        <HistoryDashboard image="/images/profile.png" name="Samuel Suhi" type="Accept" nominal={50000} />
        <HistoryDashboard image="/images/profile.png" name="Samuel Suhi" type="Accept" nominal={50000} />
        <HistoryDashboard image="/images/profile.png" name="Samuel Suhi" type="Accept" nominal={50000} />
      </Container>
    </Layout>
  )
}

export default history