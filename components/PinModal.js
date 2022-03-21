import { useEffect, useState } from "react"
import { Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import http from "../helpers/http"
import Button from "./Button"
import PinInput from "./PinInput"
import { useRouter } from 'next/router'

const PinModal = (props) => {
  const transfer = useSelector(state => state.transfer)
  const otp = useSelector(state => state.otp)
  const dispatch = useDispatch()
  const router = useRouter()
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new URLSearchParams()
    const token = window.localStorage.getItem('token')
    data.append('amount', transfer.transferData.amount)
    data.append('recipient', transfer.transferData.id)
    data.append('pin', otp.otp)
    if(transfer.transferData.notes){
      data.append('notes', transfer.transferData.notes)
    }
    const transferRequest = await http(token).post('/transactions/transfer', data)
      .catch((error) => {
        setIsError(true)
      })
    dispatch({type: "RESET_OTP"})
    if(transferRequest){
      router.push('/')
    }
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {console.log(isError)}
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <h4>Enter Pin to Transfer</h4>
        <p>
          Enter your 6 digits PIN for confirmation to continue transferring money. 
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <PinInput/>
          </div>
          {
            isError &&
            <div className="error-message">
              <strong>{transfer.message}</strong>
            </div>
          }
          <div className='text-end'>
            <Button id="submitButton" className='px-3 py-2' type='submit' variant='primary' >
              Submit
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default PinModal