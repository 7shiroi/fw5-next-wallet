import http from "../../helpers/http"

export const validateRegister = (data) => {
  const userData = {}
  let error = []
  userData.fullName = data.firstName
  userData.email = data.email
  userData.password = data.password
  if (data.lastName) {
    userData.fullName += ` ${data.lastName}`
  }
  if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,20})/.test(data.password))){
    error.push({name:'password', errorMsg:"Your password must include 1 uppercase, 1 lowercase, 1 number and at least 8 characters long!"})
  }
  return {
    type: 'VALIDATE_USER_DATA',
    payload: {
      userData,
      error,
    }
  }
}

export const registerUser = (data) => {
  const userData = new URLSearchParams()
  for (const key in data) {
    userData.append(key, data[key]);
  }
  return {
    type: 'REGISTER_USER',
    payload: http().post('/auth/register',userData)
  }
}