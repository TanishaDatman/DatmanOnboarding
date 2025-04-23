export const setwhatbusiness = (companywhat: any) => ({
    type: "SET_COMPANY",
    payload: companywhat,
  });


export const setBusinessType = (businessType: any) => ({
    type: "SET_BUSINESS_TYPE",
    payload: businessType,
  });
  
  export const setCompanyDetails = (details: {
    businessType: '';
    companyNumber: string;
    legalName: string;
  }) => ({
    type: "SET_COMPANY_DETAILS",
    payload: details,
  });
  
  export const setBusinessContact = (contact: {
    email: string;
    phone: string;
    url: string;
  }) => ({
    type: "SET_BUSINESS_CONTACT",
    payload: contact,
  });

  export const setBusinessAddress = (address: {
    country: string;
    postCode: string;
    address1: string;
    address2: string;
    town: string;
    county: string;
  }) => ({
    type: "SET_BUSINESS_ADDRESS",
    payload: address,
  });
  
  export const setBusinessDocuments = (documents: {
    utility?: File | null;
    rental?: File | null;
    rates?: File | null;
  }) => ({
    type: "SET_BUSINESS_DOCUMENTS",
    payload: documents,
  });