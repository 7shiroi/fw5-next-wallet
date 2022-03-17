import Head from "next/head"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import {FaEnvelope, FaLock} from "react-icons/fa"
import {AiOutlineUser} from "react-icons/ai"
import AuthImage from "../components/AuthImage"
import InputGroups from "../components/InputGroups"
import Button from "../components/Button"

const register = () => {
  return (
    <>
      <Head>
        <title>Register</title>
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
                Start Accessing Banking Needs
                With All Devices and All Platforms
                With 30.000+ Users
                </h2>
              </div>
              <div>
                <p>
                  Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!
                </p>
              </div>
              <form className="mb-4">
                <div>
                  <InputGroups
                    icon={<AiOutlineUser />}
                    name='first_name'
                    type='text'
                    required={true}
                    placeholder = 'Enter your first name'
                  />
                  <InputGroups
                    icon={<AiOutlineUser />}
                    name='last_name'
                    type='text'
                    placeholder = 'Enter your last name'
                  />
                  <InputGroups
                    icon={<FaEnvelope />}
                    name='email'
                    type='email'
                    required={true}
                    placeholder = 'Enter your email'
                  />
                  <InputGroups
                    icon={<FaLock />}
                    name='password'
                    type='password'
                    required={true}
                    placeholder = 'Enter your password'
                  />
                </div>
                <Button type='submit' isBlock={true} variant='primary'>Sign Up</Button>
              </form>              
              <div>
                <p>{`Already have an account? Let's `} <Link href='/login'>Login</Link></p>
              </div>
            </Container>            
          </Col>  
        </Row>
      </Container>
    </>
  )
}

export default register