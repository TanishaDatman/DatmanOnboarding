const initialState = {
          companywhat: "",
          businessType: "",
  
    contact: {
      email: '',
      phone: '',
      url: '',
    },
    address: {
      country: '',
      postCode: '',
      address1: '',
      address2: '',
      town: '',
      county: '',
    },
    documents: {
      utility: null,
      rental: null,
      rates: null,
    },
  };
  


  const businessReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_COMPANY":
        return {
          ...state,
          companywhat: action.payload,
        };
      case "SET_BUSINESS_TYPE":
        return {
          ...state,
          businessType: action.payload,
        };
      case "SET_COMPANY_DETAILS":
        return {
          ...state,
          company: action.payload,
        };
      case "SET_BUSINESS_CONTACT":
        return {
          ...state,
          contact: action.payload,
        };
      case "SET_BUSINESS_ADDRESS":
        return {
          ...state,
          address: action.payload,
        };
      case "SET_BUSINESS_DOCUMENTS":
        return {
          ...state,
          documents: {
            ...state.documents,
            ...action.payload,
          },
        };
      default:
        return state;
    }
  };
  
  export default businessReducer;