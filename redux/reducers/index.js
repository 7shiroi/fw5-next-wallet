import {combineReducers} from 'redux'
import register from './register'
import otp from './otp'
import auth from './auth'
import profile from './profile'

const rootReducer = combineReducers({
  auth,
  profile,
  register,
  otp,
})

export default rootReducer