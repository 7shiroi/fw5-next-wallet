import Head from "next/head"
import { Col, Container, Row } from "react-bootstrap"
import {FaEnvelope, FaLock} from "react-icons/fa"
import InputGroups from "../components/InputGroups"

const login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Container>
        <Row>
          <Col lg={6}>

          </Col>
          <Col lg={6}>
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
            <InputGroups
              icon={<FaEnvelope />}
              name='email'
              type='email'
              placeholder = 'Enter your email'
            />
            <InputGroups
              icon={<FaLock />}
              name='password'
              type='password'
              placeholder = 'Enter your password'
            />
          </Col>  
        </Row>
      </Container>
    </>
  )
}

export default login