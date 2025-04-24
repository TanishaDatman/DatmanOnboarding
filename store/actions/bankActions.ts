export const setBankDetails = (details: {
    accountHolderName: string;
    sortCode: string;
    accountNumber: string;
    confirmAccountNumber: string;
  }) => ({
    type: 'SET_BANK_DETAILS',
    payload: details,
  });
  
  export const setBankStatement = (document: any) => ({
    type: 'SET_BANK_STATEMENT',
    payload: document,
  });
  
  export const setVoidCheque = (document: any) => ({
    type: 'SET_VOID_CHEQUE',
    payload: document,
  });
  