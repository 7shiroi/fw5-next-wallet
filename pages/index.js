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
import { useEffect, useState } from 'react'
import {AiOutlinePhone,AiOutlineDownload} from 'react-icons/ai'
import {BiLockAlt} from 'react-icons/bi'
import {TiVendorMicrosoft} from 'react-icons/ti'
import {FaDropbox, FaAirbnb, FaGooglePlay} from 'react-icons/fa'
import {SiDell, SiApple} from 'react-icons/si'
import Link from 'next/link'


export default function Home() {
  const profile = useSelector(state => state.profile)
  const [modalShow, setModalShow] = useState(false);
  const [token, setToken] = useState(null)

  useEffect(() => {
  setToken(window.localStorage.getItem('token'))

  },[])

  return (
    <>
      <Head>
        <title>Next Wallet</title>
        <meta name="description" content="Next Wallet your future wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!token &&
      <>
        <header className='primary-bg vh-100'>
          <Container className='py-5 h-100'>
            <div className='d-flex justify-content-between px-5'>
              <div>
                <h2>
                  Next Wallet
                </h2>
              </div>
              <div className='d-flex'>
                <div className='me-4'>
                  <Link href='/login' passHref>
                    <Button variant='outline-primary' className='px-3 py-2'>Login</Button>
                  </Link>
                </div>
                <div>
                  <Link href='/register' passHref>
                    <Button variant='primary' className='px-3 py-2'>Sign Up</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='h-100 d-flex flex-column align-items-center justify-content-center text-center'>
              <div className='mb-5'>
                <h1>Awesome App<br/>For Saving Time.</h1>
              </div>
              <div className='mb-5'>
                We bring you a mobile app for banking problems that<br/>
                oftenly wasting much of your times.
              </div>
              <div>
                <Button variant='primary'>Try It Free</Button>
              </div>
            </div>
          </Container>
        </header>  
        <section className='white-bg vh-100'>
          <Container className='h-100 d-flex flex-column align-items-center justify-content-center text-center'>
            <div className='mb-5'>
              <h1>
                <span className='accent-text'>Why</span> Choose Next Wallet?
              </h1>
            </div>
            <div className='mb-5'>
              We have some great features from the application and it’s totally free to use by all users around the world.
            </div>
            <Row>
              <Col md={4} className='py-4'>
                <div className='primary-bg circle-container d-inline-block mb-4'>
                  <AiOutlinePhone size={24} />
                </div>
                <h4 className='mb-4'>24/7 Support</h4>
                <div>
                  We have 24/7 contact support so you can contact us whenever you want and we will respond it.
                </div>
              </Col>
              <Col md={4} className='grey-bg py-4'>
                <div className='primary-bg circle-container d-inline-block mb-4'>
                  <BiLockAlt size={24} />
                </div>
                <h4 className='mb-4'>Data Privacy</h4>
                <div>
                  We make sure your data is safe in our database and we will encrypt any data you submitted to us.
                </div>
              </Col>
              <Col md={4} className='py-4'>
                <div className='primary-bg circle-container d-inline-block mb-4'>
                  <AiOutlineDownload size={24} />
                </div>
                <h4 className='mb-4'>Easy Download</h4>
                <div>
                  Next Wallet is 100% totally free to use it’s now available on Google Play Store and App Store.
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='grey-bg'>
          <Container>
            <Row className='py-5 text-center'>
              <Col md={2} sm={4} xs={6} className='mb-3' >
                <TiVendorMicrosoft size={60} />
              </Col>
              <Col md={2} sm={4} xs={6}  className='mb-3'>
                <FaDropbox size={60} />
              </Col>
              <Col md={2} sm={4} xs={6}  className='mb-3'>
                <FaAirbnb size={60} />
              </Col>
              <Col md={2} sm={4} xs={6}  className='mb-3'>
                <FaGooglePlay size={60} />
              </Col>
              <Col md={2} sm={4} xs={6} className='mb-3' >
                <SiApple size={60} />
              </Col>
              <Col md={2} sm={4} xs={6} className='mb-3' >
                <SiDell size={60} />
              </Col>
            </Row>
          </Container>
        </section>
        <section className='white-bg'>
          <Container className='text-center py-5'>
            <Row className='grey-bg round-container mb-5 d-inline-block px-5 py-3'>
              <h1 className='accent-text'>
                Rp. 390.736.500
              </h1>
            </Row>
            <Row className='mb-5'>
              <h1>
                <span className='accent-text'>Money</span> has been transfered.
              </h1>
            </Row>
            <Row className='text-center'>
              <div>
                That amount of money has been transfered from all users. We still counting and going strong!
              </div>
            </Row>
          </Container>
        </section>
        <footer className='primary-bg'>
          <Container className='py-5'>
            <Row className='mb-5'>
              <h1>Next Wallet</h1>
            </Row>
            <Row className='mb-5'>
              <div>
                Simplify financial needs and saving much time in banking needs with one single app.
              </div>
            </Row>
            <div className='white-line mb-3'></div>
            <div className='d-flex flex-column flex-md-row justify-content-between'>
              <div className='order-3 order-md-1'>
                2022 Next Wallet. All right reserved.
              </div>
              <div className='d-flex flex-column flex-md-row justify-content-end align-items-md-center align-items-end order-2'>
                <div className='me-md-5'>
                  <strong>
                    +62 5637 8882 9901
                  </strong>
                </div>
                <div>
                  <strong>
                    contact@nextwallet.com
                  </strong>
                </div>
              </div>
            </div>
          </Container>
        </footer>
      </>
      
      }
      {
        token &&
        <Layout>
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
      }
    </>
    
  )
}
