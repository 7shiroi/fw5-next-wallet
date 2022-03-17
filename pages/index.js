import Head from 'next/head'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import MenuBar from '../components/MenuBar'
import NavbarComponent from '../components/NavbarComponent'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Wallet</title>
        <meta name="description" content="Next Wallet your future wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarComponent />
      <Container>
        <Row>
          <Col md={3}>
            <MenuBar />
          </Col>
          <Col md={9}>

          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
