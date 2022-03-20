import http from "../../helpers/http"

export const getProfile = (token) => {
  return {
    type: 'GET_PROFILE',
    payload: http(token).get('/profile')
  }
}

export const getPhoneNumbers = (token) => {
  return {
    type: 'GET_PHONE_NUMBER',
    payload: http(token).get('/profile/phones')
  }
}

export const getBalance = (token) => {
  return {
    type: 'GET_BALANCE',
    payload: http(token).get('/profile/balance')
  }
}