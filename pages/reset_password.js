import Head from "next/head"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import {FaEnvelope, FaLock} from "react-icons/fa"
import AuthImage from "../components/AuthImage"
import Button from "../components/Button"
import InputGroups from "../components/InputGroups"

const reset_password = () => {
  return (
    <>
      <Head>
        <title>Login</title>
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
                Did You Forgot Your Password?
                Don’t Worry, You Can Reset Your
                Password In a Minutes.
                </h2>
              </div>
              <div>
                <p>
                  To reset your password, you must type your email and we will send a link to your email and you will be directed to the reset password screens.
                </p>
              </div>
              <form className="mb-4">
                <div>
                  <InputGroups
                    icon={<FaEnvelope />}
                    name='email'
                    type='email'
                    required={true}
                    placeholder = 'Enter your email'
                  />
                </div>
                <Button type='submit' isBlock={true} variant='primary'>Confirm</Button>
              </form>              
              <div>
                <p>{`Don't have an account? Let's`} <Link href='/register'>Sign Up</Link></p>
              </div>
            </Container>            
          </Col>  
        </Row>
      </Container>
    </>
  )
}

export default reset_password