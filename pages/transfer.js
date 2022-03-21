import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import { Container, Form, Row } from 'react-bootstrap'
import InputGroups from '../components/InputGroups'
import {BsSearch} from 'react-icons/bs'
import UserContact from '../components/UserContact'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../redux/actions/users'
import { setTransferData} from '../redux/actions/transfer'
import {HiOutlinePencil} from 'react-icons/hi'
import Button from '../components/Button'
import Input from '../components/Input'
import { useRouter } from 'next/router'

const transfer = () => {
  const [recepientSelected, setRecepientSelected] = useState(false)
  const [errorAmount, setErrorAmount] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const users = useSelector(state => state.users)
  const profile = useSelector(state => state.profile)
  const transfer = useSelector(state => state.transfer)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
      const token = window.localStorage.getItem('token')
      dispatch(getAllUsers(token))
  }, [])

  const handleSelectRecepient = (e) => {
    e.preventDefault()
    const data = {
      id: e.target.dataset.id,
      name: e.target.dataset.name,
      phoneNumber: e.target.dataset.phonenumber,
      picture: e.target.dataset.picture,
    }
    dispatch(setTransferData(data))
    setRecepientSelected(true)
  }

  const handleContinue = (e) =>{
    e.preventDefault()
    const amount = e.target.elements['amount'].value
    if(Number(amount) > profile.balance){
      setErrorAmount(true)
      setErrorMsg('Exceeding Limit!')
    }
    else if (Number(amount) < 1000 ){
      setErrorAmount(true)
      setErrorMsg('Minimal transfer is 1000')
    }
    else{
      const data = transfer.transferData
      data.amount = amount
      if (e.target.elements['notes'].value){
        data.notes = e.target.elements['notes'].value
      }
      dispatch(setTransferData(data))
      router.push('/transfer/confirm')
    }
  }

  return (
    <Layout>
      <Head>
        <title>Transfer</title>
        <meta name="description" content="Next Wallet your future wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        !recepientSelected &&
        <Container className='round-container white-bg py-3'>
          <Row>
            <h4>Search Receiver</h4>
          </Row>
          <Row>
            <InputGroups 
                icon={<BsSearch />}
                name='search'
                type='text'
                variant='transparent'
                placeholder='Search receiver here'
              />
          </Row>
          {
            users.users.length > 0 &&
            users.users.map((obj,idx) => {
              if(profile.profileData.id === obj.id) {
                return 
              }
              return(
                <Row key={idx} className='mb-3'>
                  <UserContact 
                    picture={obj.picture ? obj.picture : '/images/noprofilepicture.png'}
                    name={obj.fullName}
                    phoneNumber={obj.phone.length > 0 ? obj.phone[obj.phone.length - 1].number : 'Phone Number not Registered'}
                    important={true}
                    onClick={handleSelectRecepient}
                    data-id={obj.id}
                    data-name={obj.fullName}
                    data-phonenumber={obj.phone.length > 0 ? obj.phone[obj.phone.length - 1].number : 'Phone Number not Registered'}
                    data-picture={obj.picture ? obj.picture : '/images/noprofilepicture.png'}
                  />
                </Row>
              )
            })
          }
        </Container>
      }
      {
        recepientSelected &&
        <Container className='round-container white-bg py-3'>
          <Row className='mb-3'>
            <h4>Transfer Money</h4>
          </Row>
          <Row className='mb-4'>
            <UserContact 
              name={transfer.transferData.name}
              phoneNumber={transfer.transferData.phoneNumber}
              picture={transfer.transferData.picture}
            />
          </Row>
          <Row className='mb-5'>
            <small>
              Type the amount you want to transfer and then
              press continue to the next steps.
            </small>
          </Row>
          <Row>
            <form onSubmit={handleContinue}>
              <div className='d-flex flex-column align-items-center'>
                <div className='mb-4'>
                  <Input 
                    type='number'
                    name='amount'
                    placeholder='0.00'
                    className='text-center'
                    autoComplete='off'
                    invalid={errorAmount}
                    required
                  />
                </div>
                <div className='mb-4'>
                  <strong>Rp. {Number(profile.balance).toLocaleString('id-ID')} Available</strong>
                </div>
                <div className='mb-4'>
                  <InputGroups 
                    icon={<HiOutlinePencil />}
                    name='notes'
                    type='text'
                    placeholder='Add some notes'
                    autoComplete='off'
                  />
                </div>
                {
                  errorAmount &&
                  <div className='error-message'>
                    {errorMsg}
                  </div>
                }
              </div>
              <div className='text-end'>
                <Button type='submit' variant='primary'>Continue</Button>
              </div>
            </form>
          </Row>
        </Container>
      }
      
    </Layout>
  )
}

export default transfer