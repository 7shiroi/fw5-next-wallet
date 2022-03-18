import Head from 'next/head'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import MenuBar from '../components/MenuBar'
import Button from '../components/Button'
import NavbarComponent from '../components/NavbarComponent'
import {BsPlusLg} from 'react-icons/bs'
import {AiOutlineArrowUp} from 'react-icons/ai'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Wallet</title>
        <meta name="description" content="Next Wallet your future wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarComponent />
      <Container className='py-4'>
        <Row>
          <Col md={3}>
            <MenuBar />
          </Col>
          <Col md={9}>
            <Row>
              <Container className='d-flex flex-column flex-sm-row justify-content-between primary-bg'>
                <div className='d-flex flex-column justify-content-around py-4'>
                  <div>
                    Balance
                  </div>
                  <h1>
                    Rp. {Number(120000).toLocaleString('id-ID')}
                  </h1>
                  <div>
                    +62 813-9387-7946
                  </div>
                </div>
                <div className='d-flex flex-row flex-sm-column justify-content-around pb-4 pb-sm-0'>
                  <Button variant="primary">
                    <AiOutlineArrowUp /> Transfer
                  </Button>
                  <Button variant="primary">
                    <BsPlusLg /> Top Up
                  </Button>
                </div>
              </Container>
            </Row>
            <Row>
              <Col md={7}>
              {/* add chart */}
              </Col>
              <Col md={5}>
              {/* add history */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
