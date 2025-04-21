const initialState = {
    owner: {
      title: '',
      firstName: '',
      lastName: '',
      dob: '',
      nationality: '',
    },
    contact: {
      email: '',
      phone: '',
    },
    address: {
      postCode: '',
      houseNo: '',
      street: '',
      city: '',
      county: '',
      country: '',
    },
    image:{
        path:""
    }
  };
  
  const ownerReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'SET_OWNER_DETAILS':
        return {
          ...state,
          owner: action.payload,
        };
      case 'SET_CONTACT_DETAILS':
        return {
          ...state,
          contact: action.payload,
        };
      case 'SET_ADDRESS_DETAILS':
        return {
          ...state,
          address: action.payload,
        };
      case 'SET_IMG_DETAILS':
        return{
              ...state,
              image: action.payload
            }
      default:
        return state;
    }
  };
  
  export default ownerReducer;
  