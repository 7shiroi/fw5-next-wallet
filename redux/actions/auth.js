import http from "../../helpers/http"

export const loginAction = (data) => {
  const userData = new URLSearchParams()
  for (const key in data) {
    userData.append(key, data[key]);
  }
  return {
    type: 'AUTH_LOGIN',
    payload: http().post('/auth/login',userData)
  }
}