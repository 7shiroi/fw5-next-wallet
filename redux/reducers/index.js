import {combineReducers} from 'redux'
import register from './register'
import otp from './otp'
import auth from './auth'
import profile from './profile'
import users from './users'
import transfer from './transfer'
import history from './history'

const rootReducer = combineReducers({
  auth,
  history,
  profile,
  register,
  otp,
  transfer,
  users,
})

export default rootReducer