import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {BsArrowUp, BsPlusLg, BsGrid} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {ImExit} from 'react-icons/im'
import MenuBarStyle from '../styles/MenuBar.module.css'

const MenuBar = () => {
  const route = useRouter()
  const [active, setActive] = useState('/')
  useEffect(() => {
    setActive(route.pathname)
  }, [route.pathname])
  const navigation = [
    {name: 'Dashboard', url: '/', icon: BsGrid },
    {name: 'Transfer', url: '/transfer', icon: BsArrowUp },
    {name: 'Top Up', url: '/topup', icon: BsPlusLg },
    {name: 'Profile', url: '/profile', icon: AiOutlineUser },
  ]
  return (
    <div className={`${MenuBarStyle.menu} d-flex flex-column justify-content-between`}>
      <div>
        {navigation.map((obj, idx) => {
          const Icon = obj.icon
          return (
            <Link key={idx} href={obj.url} passHref>
              <div className={`${MenuBarStyle.menu_items} mb-4 ${active===obj.url ? MenuBarStyle.active : ''} `}>
                <Icon className='me-4'/>
                {obj.name}
              </div>
            </Link>
          )
        })}

      </div>
      <div>
        <Link href='/logout' passHref>
          <div className={`${MenuBarStyle.menu_items}`}>
            <ImExit className='me-4' />
            Logout
          </div>
        </Link>
      </div>
    </div>
  )
}

export default MenuBar