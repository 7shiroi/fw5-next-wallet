import React from 'react'
import Styles from '../styles/HistoryDashboard.module.css'
import Image from 'next/image'

const HistoryDashboard = ({image, name, type, nominal, ...rest}) => {
  return (
    <div className='d-flex justify-content-between'>
      <div className='d-flex'>
        <Image width={56} height={56} src={image} alt={name} />
        <div className='d-flex flex-column ms-3'>
          <div>
            {name}
          </div>
          <div>
            <small>{type}</small>
          </div>
        </div>
      </div>
      <div className={`${type==='Transfer' ? Styles.redInfo : Styles.greenInfo} d-flex align-items-center`}>
        {type==='Transfer' ? '-' : '+'}Rp. {Number(nominal).toLocaleString('id-ID')}
      </div>
    </div>
  )
}

export default HistoryDashboard