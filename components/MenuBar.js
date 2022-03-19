import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {BsArrowUp, BsPlusLg, BsGrid} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {ImExit} from 'react-icons/im'
import MenuBarStyle from '../styles/MenuBar.module.css'
import { useDispatch } from 'react-redux'

const MenuBar = () => {
  const route = useRouter()
  const [active, setActive] = useState('/')
  const dispatch = useDispatch()

  useEffect(() => {
    setActive(route.pathname)
  }, [route.pathname])
  const navigation = [
    {name: 'Dashboard', url: '/', icon: BsGrid },
    {name: 'Transfer', url: '/transfer', icon: BsArrowUp },
    {name: 'Top Up', url: '/topup', icon: BsPlusLg },
    {name: 'Profile', url: '/profile', icon: AiOutlineUser },
  ]

  const handleLogout = () => {
    dispatch({type: 'AUTH_LOGOUT'})
  }

  return (
    <div className={`${MenuBarStyle.menu} d-flex flex-column justify-content-between py-4 h-100`}>
      <div>
        {navigation.map((obj, idx) => {
          const Icon = obj.icon
          return (
            <Link key={idx} href={obj.url} passHref>
              <div className={`${MenuBarStyle.menu_items} mb-4 ps-4 ${active===obj.url ? MenuBarStyle.active : ''} `}>
                <Icon className='me-4'/>
                {obj.name}
              </div>
            </Link>
          )
        })}

      </div>
      <div>
        <a onClick={handleLogout}>
          <div className={`${MenuBarStyle.menu_items} ps-4`}>
            <ImExit className='me-4' />
            Logout
          </div>
        </a>
      </div>
    </div>
  )
}

export default MenuBar