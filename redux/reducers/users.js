const initialState = {
  users: [],
  isLoading: false,
  error: false,
  message: '',
}

const users = (state=initialState, action) => {
  switch(action.type){
    case 'GET_ALL_USERS_PENDING':{
      state = initialState
      state.isLoading = true
      return {...state}
    }
    case 'GET_ALL_USERS_FULFILLED':{
      const {data} = action.payload
      state.isLoading = false
      state.users = data.results
      state.message = data.message
      return {...state}
    }
    case 'GET_ALL_USERS_REJECTED':{
      const {data} = action.payload
      state.isLoading = true
      state.error = true
      state.message = data.message
      return {...state}
    }
    case 'RESET_USERS_STATE':{
      state = initialState
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}

export default users