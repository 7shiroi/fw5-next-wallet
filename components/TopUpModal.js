import { Modal } from "react-bootstrap"
import { useDispatch } from "react-redux"
import http from "../helpers/http"
import { getBalance } from "../redux/actions/profile"
import Button from "./Button"
import Input from "./Input"

const TopUpModal = (props) => {
  const dispatch = useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new URLSearchParams()
    const token = window.localStorage.getItem('token')
    data.append('amount', e.target.elements['amount'].value)
    await http(token).post('/transactions/topup', data)
    await dispatch(getBalance(token))
    props.onHide()
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
        <h4>Top Up</h4>
        <p>
          Enter the amount of money, and click submit
        </p>
        <form onSubmit={handleSubmit}>
          <div className='round-container border border-1 text-center mb-3'>
            <Input 
              type='text'
              name='amount'
              className='py-2 my-3'
            />
          </div>
          <div className='text-end'>
            <Button type='submit' variant='primary' >
              Submit
            </Button>
          </div>

        </form>
      </Modal.Body>
    </Modal>
  )
}

export default TopUpModal