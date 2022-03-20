const initialState = {
  transferData: {},
  isLoading: false,
  error: false,
  message: '',
}

const users = (state=initialState, action) => {
  switch(action.type){
    case 'SET_TRANSFER_DATA': {
      state.transferData = action.payload
      return {...state}
    }
    case 'RESET_TRANSFER_STATE':{
      state = initialState
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}

export default users