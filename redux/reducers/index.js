import {combineReducers} from 'redux'
import register from './register'
import otp from './otp'
import auth from './auth'
import profile from './profile'
import users from './users'
import transfer from './transfer'

const rootReducer = combineReducers({
  auth,
  profile,
  register,
  otp,
  transfer,
  users,
})

export default rootReducer