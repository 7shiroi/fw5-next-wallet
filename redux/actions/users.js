import http from "../../helpers/http"

export const getAllUsers = (token) => {
  return {
    type: 'GET_ALL_USERS',
    payload: http(token).get('/users')
  }
}
