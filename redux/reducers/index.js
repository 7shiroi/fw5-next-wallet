import {combineReducers} from 'redux'
import register from './register'
import otp from './otp'

const rootReducer = combineReducers({
  register,
  otp,
})

export default rootReducer