const initialState = {
  accountHolderName: '',
  sortCode: '',
  accountNumber: '',
  confirmAccountNumber: '',
  
};

const bankReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_BANK_DETAILS':
      return {
        ...state,
        accountHolderName: action.payload.accountHolderName,
        sortCode: action.payload.sortCode,
        accountNumber: action.payload.accountNumber,
        confirmAccountNumber: action.payload.confirmAccountNumber,
      };
    case 'SET_BANK_STATEMENT':
      return {
        ...state,
        statement: action.payload,
      };
    case 'SET_VOID_CHEQUE':
      return {
        ...state,
        cheque: action.payload,
      };
    default:
      return state;
  }
};

export default bankReducer;
