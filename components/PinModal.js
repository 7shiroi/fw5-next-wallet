import { useEffect } from "react"
import { Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import http from "../helpers/http"
import { getBalance } from "../redux/actions/profile"
import Button from "./Button"
import Input from "./Input"
import PinInput from "./PinInput"

const PinModal = (props) => {
  const otp = useSelector(state => state.otp)
  const transfer = useSelector(state => state.transfer)
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new URLSearchParams()
    const token = window.localStorage.getItem('token')
    data.append('amount', transfer.transferData.amount)
    data.append('recipient', transfer.transferData.id)
    data.append('pin', otp)
    if(transfer.transferData.notes){
      data.append('notes', transfer.transferData.notes)
    }
    const transfer = await http(token).post('/transactions/transfer', data)
    console.log(transfer)
    dispatch({type: "RESET_OTP"})
    // props.onHide()
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
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
            transfer.message === 'Wrong PIN!'&&
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