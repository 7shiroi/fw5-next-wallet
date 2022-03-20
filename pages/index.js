import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'
import Button from '../components/Button'
import {BsPlusLg} from 'react-icons/bs'
import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai'
import BarChart from '../components/BarChart'
import HistoryDashboard from '../components/HistoryDashboard'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'
import TopUpModal from '../components/TopUpModal'
import { useState } from 'react'

export default function Home() {
  const profile = useSelector(state => state.profile)
  const [modalShow, setModalShow] = useState(false);

  return (
    <Layout>
      <Head>
        <title>Next Wallet</title>
        <meta name="description" content="Next Wallet your future wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopUpModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <Row>
        <Container className='d-flex flex-column flex-sm-row justify-content-between primary-bg round-container'>
          <div className='d-flex flex-column justify-content-around py-4'>
            <div>
              Balance
            </div>
            {
              profile.balance >= 0 &&
              <h1>
                Rp. {Number(profile.balance).toLocaleString('id-ID')}
              </h1>
            }
            {
              profile.phoneNumber.length > 0 &&
              <div>
                {profile.phoneNumber[profile.phoneNumber.length - 1]}
              </div>
            }
          </div>
          <div className='d-flex flex-row flex-sm-column justify-content-around pb-4 pb-sm-0'>
            <Button variant="primary">
              <AiOutlineArrowUp /> Transfer
            </Button>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              <BsPlusLg /> Top Up
            </Button>
          </div>
        </Container>
      </Row>
      <Row>
        <Col lg={7} className='round-container white-bg py-3 my-3'>
          <div className='d-flex justify-content-between my-3'>
            <div>
              <AiOutlineArrowDown color='#1EC15F' size={24} />
              <div><small>Income</small></div>
              <h4>Rp. {Number(2120000).toLocaleString('id-ID')}</h4>
            </div>
            <div>
              <AiOutlineArrowUp color='#FF5B37' size={24} />
              <div><small>Expense</small></div>
              <h4>Rp. {Number(1560000).toLocaleString('id-ID')}</h4>
            </div>
          </div>
          <BarChart />
        </Col>
        <Col lg={5} className='round-container white-bg py-3 my-3'>
          <div className='d-flex flex-column justify-content-around h-100'>
            <h4 className='my-4'>Transaction History</h4>
            <HistoryDashboard image="/images/profile.png" name="Samuel Suhi" type="Accept" nominal={50000} />
            <HistoryDashboard image="/images/profile.png" name="Netflix" type="Transfer" nominal={149000} />
            <HistoryDashboard image="/images/profile.png" name="Christine something really long" type="Accept" nominal={15000} />
            <HistoryDashboard image="/images/profile.png" name="Roberto Chandler" type="Top Up" nominal={249000} />
          </div>
        </Col>
      </Row>
    </Layout>
  )
}
