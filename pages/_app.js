import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import store from '../redux/store.js'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle')
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
