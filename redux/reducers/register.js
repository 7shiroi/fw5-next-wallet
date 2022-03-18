const initialState = {
  userData: {},
  isLoading: false,
  error: [],
  message: '',
}

const register = (state=initialState, action) => {
  switch(action.type){
    case 'REGISTER_USER_PENDING': {
      state.error = []
      state.isLoading = true
      return {...state}
    }
    case 'REGISTER_USER_FULFILLED': {
      const {data} = action.payload
      state.isLoading = false
      message = data.message
      return {...state}
    }
    case 'REGISTER_USER_REJECTED': {
      state.isLoading = false
      message = data.message
      return {...state}
    }
    case 'VALIDATE_USER_DATA':{
      state.error = action.payload.error
      state.userData = action.payload.userData
      return {...state}
    }
    case 'ADD_PIN':{
      state.userData.pin = action.payload.pin
      return {...state}
    }
    case 'RESET_REGISTER_STATE':{
      state = initialState
      return {...state}
    }
    case 'CLEAR_REGISTER_ERROR':{
      state.error = []
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}

export default register