const initialState = {
  historiesData: [],
  isLoading: false,
  error: false,
  message: '',
}

const history = (state=initialState, action) => {
  switch(action.type){
    case 'GET_HISTORIES_PENDING':{
      state = initialState
      state.isLoading = true
      return {...state}
    }
    case 'GET_HISTORIES_FULFILLED': {
      const {data} = action.payload
      state.isLoading = false
      state.historiesData = data.results
      state.message = data.message
      return {...state}
    }
    case 'GET_HISTORIES_REJECTED': {
      const {data} = action.payload
      state.isLoading = false
      state.error = true
      state.message = data.message
      return {...state}
    }
    case 'RESET_HISTORY_STATE':{
      state = initialState
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}

export default history