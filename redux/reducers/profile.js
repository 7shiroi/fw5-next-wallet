const initialState = {
  profileData: {},
  phoneNumber: [],
  isLoading: false,
  error: [],
  message: '',
}

const profile = (state=initialState, action) => {
  switch(action.type){
    case 'GET_PROFILE_PENDING': {
      state.isLoading = true;
      state.error = []
      state.message = ""
      return {...state}
    }
    case 'GET_PROFILE_FULFILLED': {
      const {data} = action.payload
      state.isLoading = false;
      state.message = data.message
      state.profileData = data.results
      return {...state}
    }
    case 'GET_PROFILE_REJECTED': {
      state.isLoading = false;
      state.message = data.message
      return {...state}
    }
    case 'GET_PHONE_NUMBER_PENDING': {
      state.isLoading = true;
      state.error = []
      state.message = ""
      return {...state}
    }
    case 'GET_PHONE_NUMBER_FULFILLED': {
      const {data} = action.payload
      state.isLoading = false;
      state.message = data.message
      state.phoneNumber = data.results
      return {...state}
    }
    case 'GET_PHONE_NUMBER_REJECTED': {
      state.isLoading = false;
      state.message = data.message
      return {...state}
    }
    case 'RESET_PROFILE_STATE': {
      state = initialState
      return {...state}
    }
    default : {
      return {...state}
    }  
  }
}

export default profile