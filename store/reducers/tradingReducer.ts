const initialState = {
    tradingName: '',
    isSameAsRegistered: true,
    address: {
      postCode: '',
      addressLine1: '',
      addressLine2: '',
      townCity: '',
      county: '',
      country: '',
    },
  };
  
  const tradingReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'SET_TRADING_NAME':
        return {
          ...state,
          tradingName: action.payload,
        };
      case 'SET_SAME_AS_REGISTERED':
        return {
          ...state,
          isSameAsRegistered: action.payload,
        };
      case 'SET_TRADING_ADDRESS':
        return {
          ...state,
          address: {
            ...state.address,
            ...action.payload,
          },
        };
      default:
        return state;
    }
  };
  
  export default tradingReducer;
  