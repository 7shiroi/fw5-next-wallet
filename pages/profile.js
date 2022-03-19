import React, { useRef } from 'react'
import { Container, Row } from 'react-bootstrap'
import Layout from '../components/Layout'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import {TiPencil} from 'react-icons/ti'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Button from '../components/Button'
import ButtonStyles from '../styles/Button.module.css'
import http from '../helpers/http'
import Link from 'next/link'


  const profile = () => {
    const profile = useSelector(state => state.profile)
    const hiddenFileInput = useRef(null)

    const uploadFile = () => {
      hiddenFileInput.current.click()
    }

    const fileInputHandler = async (e) => {
      const reader = new FileReader();
      const image = e.target.files[0];

      const profilePicture = document.querySelector('#profilePicture');
      reader.readAsDataURL(image);

      reader.onload = (e) => {
        profilePicture.src = e.target.result;
      };

      const token = window.localStorage.getItem('token')
      
      const data = new FormData()
      data.append('picture', image)
      http(token, true).patch('/profile',data)
  };

  return (
    <Layout>
      <Container className='white-bg round-container d-flex flex-column align-items-center justify-content-between '>
        <div>
          <Image id='profilePicture' src={profile?.profileData.picture ? profile?.profileData.picture : "/images/noprofilepicture.png"} alt='profile' width={80} height={80} /> 
        </div>
        <div className='important' onClick={uploadFile}>
          <input type="file"
            ref={hiddenFileInput}
            className='d-none'
            name='image'
            accept='image'
            onChange={(e) => fileInputHandler(e)}
          />
          <small><TiPencil /> edit</small>
        </div>
        <div>
          <h3>{profile?.profileData.fullName}</h3>
        </div>
        {
          profile.phoneNumber.length > 0 &&
          <div>
            <small>{profile?.phoneNumber[profile?.phoneNumber.length - 1]}</small>
          </div>
        }
        {
          profile.phoneNumber.length === 0 &&
          <div>
            <small>No phone number</small>
          </div>
        }
        <div className='w-50 py-3'>
          <Link href='profile/personal' passHref>
            <Button isBlock={true} variant='secondary' className={`d-flex justify-content-between mb-3 ${ButtonStyles.transparent}`}>
              <div>Personal Information</div>
              <div><AiOutlineArrowRight /></div>
            </Button>
          </Link>
          <Button isBlock={true} variant='secondary' className={`d-flex justify-content-between mb-3 ${ButtonStyles.transparent}`}>
            <div>Change Password</div>
            <div><AiOutlineArrowRight /></div>
          </Button>
          <Button isBlock={true} variant='secondary' className={`d-flex justify-content-between mb-3 ${ButtonStyles.transparent}`}>
            <div>Change Pin</div>
            <div><AiOutlineArrowRight /></div>
          </Button>
          <Button isBlock={true} variant='secondary' className={`d-flex justify-content-between ${ButtonStyles.transparent}`}>
            <div>Logout</div>
          </Button>
        </div>
      </Container>
    </Layout>
  )
}

export default profile