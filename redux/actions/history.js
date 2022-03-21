import http from "../../helpers/http"

export const getHistories = (token) => {
  return ({
    type: 'GET_HISTORIES',
    payload: http(token).get('/transactions/history')
  })
}