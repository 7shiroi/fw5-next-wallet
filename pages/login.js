import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import {FaEnvelope, FaLock} from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import AuthImage from "../components/AuthImage"
import Button from "../components/Button"
import InputGroups from "../components/InputGroups"
import { loginAction } from "../redux/actions/auth"
import { useRouter } from "next/router"

const Login = () => {
  const [invalidCredential, setInvalidCredential] = useState()
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch({type: "RESET_AUTH_STATE"})
    const data = {
      email: e.target.elements['email'].value,
      password: e.target.elements['password'].value,
    }
    await dispatch(loginAction(data))
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      router.push('/')
      dispatch({
        type: "AUTH_LOGIN_FULFILLED",
        payload: {
          data: {
            results: token
          }
        }
      })
    }
  }, [dispatch, auth.token])
  
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
              <form className="mb-4" onSubmit={handleLogin}>
                <div>
                  <InputGroups
                    icon={<FaEnvelope />}
                    name='email'
                    type='email'
                    required={true}
                    invalid={auth?.message === 'Wrong credentials'}
                    placeholder = 'Enter your email'
                  />
                  <InputGroups
                    icon={<FaLock />}
                    name='password'
                    type='password'
                    required={true}
                    invalid={auth?.message === 'Wrong credentials'}
                    placeholder = 'Enter your password'
                  />
                </div>
                <div className="mb-4">
                  <Link href='/forgot-password'>
                    Forgot password?
                  </Link>
                </div>
                {
                  auth?.message === 'Wrong credentials' &&
                  <div className="error-message text-center mb-4">
                    {auth?.message}
                  </div>
                }
                <Button type='submit' isBlock={true} variant='primary'>Login</Button>
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

export default Login