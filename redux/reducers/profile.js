const initialState = {
  profileData: {},
  phoneNumber: [],
  phoneNumberId: [],
  balance: 0,
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
      state.phoneNumber = []
      state.phoneNumberId = []
      state.message = ""
      return {...state}
    }
    case 'GET_PHONE_NUMBER_FULFILLED': {
      const {data} = action.payload
      state.isLoading = false;
      state.message = data.message
      data.results.forEach(obj => {
        state.phoneNumber.push(obj.number)
      });
      data.results.forEach(obj => {
        state.phoneNumberId.push(obj.id)
      });
      console.log('after',state.phoneNumber)
      
      return {...state}
    }
    case 'GET_PHONE_NUMBER_REJECTED': {
      const {data} = action.payload
      state.isLoading = false;
      state.message = data.message
      return {...state}
    }
    case 'GET_BALANCE_PENDING': {
      state.isLoading = true;
      state.error = []
      state.balance = 0
      state.message = ""
      return {...state}
    }
    case 'GET_BALANCE_FULFILLED': {
      const {data} = action.payload
      state.isLoading = false;
      state.message = data.message
      state.balance = data.results
      return {...state}
    }
    case 'GET_BALANCE_REJECTED': {
      const {data} = action.payload
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