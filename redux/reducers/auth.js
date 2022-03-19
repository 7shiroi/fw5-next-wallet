const initialState = {
  userData: {},
  token: '',
  isLoading: false,
  error: [],
  message: '',
}

const auth = (state=initialState, action) => {
  switch(action.type){
    case 'AUTH_LOGIN_PENDING':{
      state.isLoading = false;
      state.error = []
      state.message = ''
      return {...state}
    }
    case 'AUTH_LOGIN_FULFILLED':{
      const {data} = action.payload
      if(data.results?.token) {
        state.token = data.results.token
        if (!window.localStorage.getItem('token')) {
          window.localStorage.setItem('token', state.token)
        }
      }
      state.message = data.message
      return {...state}
    }
    case 'AUTH_LOGIN_REJECTED':{
      const {data} = action.payload
      state.isLoading = false
      state.message = data.message      
      return {...state}
    }
    case 'AUTH_LOGOUT':{
      state = initialState
      if (window.localStorage.getItem('token')) {
        window.localStorage.removeItem('token')
      }
    }
    case 'CLEAR_MESSAGE':{
      state.error = []
      state.message = ''
      return {...state}
    }
    case 'RESET_AUTH_STATE':{
      state = initialState
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}

export default auth