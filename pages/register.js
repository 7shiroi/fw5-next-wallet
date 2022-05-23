import Head from "next/head"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import {FaEnvelope, FaLock} from "react-icons/fa"
import {AiOutlineUser} from "react-icons/ai"
import AuthImage from "../components/AuthImage"
import InputGroups from "../components/InputGroups"
import Button from "../components/Button"
import { useDispatch, useSelector } from "react-redux"
import { validateRegister } from "../redux/actions/register"
import { useState } from "react"
import { useRouter } from "next/router"

const register = () => {
  const router = useRouter()
  const registerState = useSelector(state => state.register)
  const dispatch = useDispatch()
  const [passwordInvalid, setPasswordInvalid] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: "RESET_REGISTER_STATE"})
    const data = {
      firstName: e.target.elements['firstName'].value,
      lastName: e.target.elements['lastName'].value,
      email: e.target.elements['email'].value,
      password: e.target.elements['password'].value,
    }
    dispatch(validateRegister(data))
    if(registerState.error.length > 0){
      registerState.error.forEach((obj) =>{
        switch (obj.name) {
          case 'password': setPasswordInvalid(true)
        }
      })
    }else{
      router.push('/create-pin')
    }
  }

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
                  Transfering money is easier than ever, you can access Next Wallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!
                </p>
              </div>
              <form className="mb-4" onSubmit={handleSubmit}>
                <div>
                  <InputGroups
                    icon={<AiOutlineUser />}
                    name='firstName'
                    type='text'
                    required={true}
                    placeholder = 'Enter your first name'
                  />
                  <InputGroups
                    icon={<AiOutlineUser />}
                    name='lastName'
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
                    invalid={passwordInvalid}
                    placeholder = 'Enter your password'
                  />
                </div>
                {registerState.error.length > 0 && 
                  <div className="text-center error-message mb-3">{registerState.error[0].errorMsg}</div>
                }
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