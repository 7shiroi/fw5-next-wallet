import {combineReducers} from 'redux'
import register from './register'
import otp from './otp'
import auth from './auth'

const rootReducer = combineReducers({
  auth,
  register,
  otp,
})

export default rootReducer