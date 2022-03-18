import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import AuthImage from "../components/AuthImage"
import Button from "../components/Button"
import PinInput from "../components/PinInput"
import { useRouter } from "next/router"
import { registerUser } from "../redux/actions/register"

const create_pin = () => {
  const registerState = useSelector(state => state.register)
  const otp = useSelector(state => state.otp.otp)
  const router = useRouter()
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  
  useEffect(() => {
    if(otp.length < 6){
      document.getElementById("confirmButton").disabled = true;
    }else {
      document.getElementById("confirmButton").disabled = false;
    }
  }, [otp])

  const handleSubmit = async (e) =>{
    e.preventDefault()
    dispatch({type: 'ADD_PIN', payload:{pin:otp}})
    await dispatch(registerUser(registerState.userData))
    if(registerState.message === "Register failed") {
      setError(true)
    }else{
      setError(false)
    }
  } 

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
              {error===null && 
                <>
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
                  <form className="mb-4" onSubmit={handleSubmit}>
                    <div className="mb-5">
                      <PinInput />
                    </div>
                    <Button id="confirmButton" type='submit' isBlock={true} variant='primary' disabled >Confirm</Button>
                  </form>
                </>
              }
              {
                error===true && 
                <>
                  <div>
                    <h2 className="error-message">
                      Registration Failed!
                    </h2>
                  </div>
                  <div>
                    <p>
                      Something was wrong during your registration process. Please try to do registration again to have all access to our features in Next Wallet!
                    </p>
                  </div>
                  <Link href='/register' passHref><Button isBlock={true} variant='primary'>Retry</Button></Link>
                </>
              }
              {
                error===false && 
                <>
                  <div>
                    <h2>
                      Your PIN Was Successfully Created
                    </h2>
                  </div>
                  <div>
                    <p>
                      Your PIN was successfully created and you can now access all the features in Next Wallet. Login to your new account and start exploring!
                    </p>
                  </div>
                  <Link href='/login' passHref><Button isBlock={true} variant='primary'>Login Now</Button></Link>
                </>
              }
            </Container>            
          </Col>  
        </Row>
      </Container>
    </>
  )
}

export default create_pin