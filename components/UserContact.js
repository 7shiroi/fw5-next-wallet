import React from 'react'
import Image from 'next/image'

const UserContact = ({picture, name, phoneNumber, important=false, ...rest}) => {
  return (
    <div className={`round-container bg-white shadow-sm d-flex px-3 py-2 ${important ? 'important' : ''}`} {...rest}>
      <Image src={picture} alt={name} width={70} height={70} />
      <div className='d-flex flex-column ms-3 justify-content-center'>
        <div>
          <strong>{name}</strong>
        </div>
        <div>
          <small>{phoneNumber}</small>
        </div>
      </div>
    </div>
  )
}

export default UserContact