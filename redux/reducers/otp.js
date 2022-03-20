const initialState = {
  otp: ''
}

const otp = (state=initialState, action) => {
  switch(action.type){
    case 'UPDATE_OTP':{
      state.otp = action.payload.otp
      return {...state}
    }
    case 'RESET_OTP':{
      state = initialState
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}

export default otp