import React, { useEffect } from 'react'
import Head from 'next/head'
import { Container, Form, Row } from 'react-bootstrap'
import HistoryDashboard from '../components/HistoryDashboard'
import Layout from '../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getHistories } from '../redux/actions/history'

const history = () => {
  const history = useSelector(state => state.history)
  const dispatch = useDispatch()

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    dispatch(getHistories(token))
  }, [])


  return (
    <Layout>
      <Head>
        <title>History</title>
        <meta name="description" content="Next Wallet your future wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className='round-container white-bg py-3 my-3'>
        <div className='d-flex justify-content-between mb-5'>
          <div>
            <h4>Transaction History</h4>
          </div>
          <Form.Select >
            <option>Name</option>
            <option>Type</option>
          </Form.Select>
        </div>
        {
          history.historiesData.length > 0 &&
          history.historiesData.map((obj, idx)=>{
            return (
              <HistoryDashboard 
                key = {idx}
                image ='/images/noprofilepicture.png'
                name = {obj.anotherUserId}
                type = {obj.mutation_type.name}
                nominal = {obj.amount}
              />
            )
          })
        }
        {
          history.historiesData.length === 0 &&
          <h4>
            {`You haven't made any transaction yet!`}
          </h4>
        }
      </Container>
    </Layout>
  )
}

export default history