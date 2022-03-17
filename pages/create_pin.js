import Head from "next/head"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import AuthImage from "../components/AuthImage"
import Button from "../components/Button"
import PinInput from "../components/PinInput"

const create_pin = () => {
  return (
    <>
      <Head>
        <title>Create pin</title>
      </Head>
      <Container fluid>
        <Row>
          <Col lg={6} className='px-0 d-none d-lg-block'>
            <AuthImage/>
          </Col>
          <Col lg={6}>
            <Container className="d-flex flex-column justify-content-center h-lg-100 vh-100">
              <div>
                <h2>
                Secure Your Account, Your Wallet,
                and Your Data With 6 Digits PIN
                That You Created Yourself.
                </h2>
              </div>
              <div>
                <p>
                  Transfering money is easier than ever, you can access Next Wallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!
                </p>
              </div>
              <form className="mb-4">
                <div className="mb-5">
                  <PinInput />
                </div>
                <Button type='submit' isBlock={true} variant='primary'>Confirm</Button>
              </form>       
            </Container>            
          </Col>  
        </Row>
      </Container>
    </>
  )
}

export default create_pin