// // hooks/useOwnerApi.ts
// export interface OwnerDetails {
//     title: string;
//     firstName: string;
//     lastName: string;
//     dob: string;
//     nationality: string;
//   }
  
//   export interface DocumentFile {
//     uri: string;
//     name: string;
//     type: string;
//   }
  
//   const BASE_URL = 'http://localhost:3000'; // <-- replace this with your actual server URL
  
//   export const useOwnerApi = () => {
//     const postOwnerDetails = async (
//       details: OwnerDetails,
//       passport: DocumentFile | null,
//       license: DocumentFile | null
//     ) => {
//       try {
//         const formData = new FormData();
  
//         formData.append('title', details.title);
//         formData.append('firstName', details.firstName);
//         formData.append('lastName', details.lastName);
//         formData.append('dob', details.dob);
//         formData.append('nationality', details.nationality);
  
//         if (passport) {
//           formData.append('passport', {
//             uri: passport.uri,
//             name: passport.name,
//             type: passport.type,
//           } as any);
//         }
  
//         if (license) {
//           formData.append('license', {
//             uri: license.uri,
//             name: license.name,
//             type: license.type,
//           } as any);
//         }
  
//         const response = await fetch(`${BASE_URL}/business-detail`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//           body: formData,
//         });
  
//         const data = await response.json();
  
//         if (!response.ok) throw new Error(data.message || 'Failed to submit details');
  
//         return data;
//       } catch (error) {
//         console.error('Error submitting details:', error);
//         throw error;
//       }
//     };
  
//     const getOwnerDetails = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/upload`, {
//           method: 'GET',
//         });
  
//         const data = await response.json();
  
//         if (!response.ok) throw new Error(data.message || 'Failed to fetch details');
  
//         return data;
//       } catch (error) {
//         console.error('Error fetching details:', error);
//         throw error;
//       }
//     };
  
//     return {
//       postOwnerDetails,
//       getOwnerDetails,
//     };
//   };
  













// import { useState } from 'react';

// export interface OwnerDetails {
//   title: string;
//   firstName: string;
//   lastName: string;
//   dob: string;
//   nationality: string;
// }

// export interface DocumentFile {
//   uri: string;
//   name: string;
//   type: string;
// }

// const BASE_URL = 'https://9f31-103-6-156-87.ngrok-free.app'; // Replace with your actual server URL

// export const useOwnerApi = () => {
//   const [loading, setLoading] = useState(false);

//   const postOwnerDetails = async (
//     details: OwnerDetails,
//     passport: DocumentFile | null,
//     license: DocumentFile | null
//   ) => {
//     try {
//       setLoading(true);

//       const formData = new FormData();
//       formData.append('title', details.title);
//       formData.append('firstName', details.firstName);
//       formData.append('lastName', details.lastName);
//       formData.append('dob', details.dob);
//       formData.append('nationality', details.nationality);

//       if (passport) {
//         formData.append('passport', {
//           uri: passport.uri,
//           name: passport.name,
//           type: passport.type,
//         } as any);
//       }

//       if (license) {
//         formData.append('license', {
//           uri: license.uri,
//           name: license.name,
//           type: license.type,
//         } as any);
//       }

//       const response = await fetch(`${BASE_URL}/api/business-detail`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//         body: formData,
//       });
//       const text = await response.text();
//       console.log('Raw response:', text); 

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || 'Failed to submit details');

//       return data;
//     } catch (error) {
//       console.error('Error submitting details:', error);
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getOwnerDetails = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`${BASE_URL}/upload`, { method: 'GET' });
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || 'Failed to fetch details');

//       return data;
//     } catch (error) {
//       console.error('Error fetching details:', error);
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     postOwnerDetails,
//     getOwnerDetails,
//     loading,
//   };
// };




















// import { useState } from 'react';

// export interface OwnerDetails {
//   title: string;
//   firstName: string;
//   lastName: string;
//   dob: string;
//   nationality: string;
// }

// export interface DocumentFile {
//   uri: string;
//   name: string;
//   type: string;
// }

// const BASE_URL = 'https://9f31-103-6-156-87.ngrok-free.app';

// export const useOwnerApi = () => {
//   const [loading, setLoading] = useState(false);

//   const postOwnerDetails = async (
//     details: any,
//     document: DocumentFile | null
//   ) => {
//     try {
//       setLoading(true);

//       const formData = new FormData();
//       formData.append('title', details.title);
//       formData.append('first_name', details.firstName);
//       formData.append('last_name', details.lastName);
//       formData.append('dob', details.dob);
//       formData.append('nationality', details.nationality);
//       formData.append('emailId', details.email);
//       formData.append('phnno', details.phone);
//       formData.append('postcode', details.postCode);
//       formData.append('houseno', details.houseNo);
//       formData.append('street', details.street);
//       formData.append('town_city', details.city);
//       formData.append('county', details.county);
//       formData.append('country', details.country);


//       // if (document) {
//       //   formData.append('document', {
//       //     uri: document.uri,
//       //     name: document.name,
//       //     type: document.type,
//       //   } as any);
//       // }

//       const response = await fetch(`${BASE_URL}/api/business-detail`, {
//         method: 'POST',
//         body: formData,
//       });

//       const text = await response.text();
//       console.log('Raw response------>:', text); 

//       const data = JSON.parse(text);
//       if (!response.ok) throw new Error(data.message || 'Failed to submit details');

//       return data;
//     } catch (error) {
//       console.error('Error submitting details:', error);
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getOwnerDetails = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`${BASE_URL}/upload`, { method: 'GET' });
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || 'Failed to fetch details');

//       return data;
//     } catch (error) {
//       console.error('Error fetching details:', error);
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     postOwnerDetails,
//     getOwnerDetails,
//     loading,
//   };
// };












import { useState } from 'react';

export interface OwnerDetails {
  title: string;
  firstName: string;
  lastName: string;
  dob: string;
  nationality: string;
}

const BASE_URL = 'https://be6e-203-92-57-230.ngrok-free.app';

export const useOwnerApi = () => {
  const [loading, setLoading] = useState(false);

  const postOwnerDetails = async (details: any) => {
    try {
      setLoading(true);
      console.log("details---->",details)
      const formData = new FormData();
      formData.append('title', details.title);
      formData.append('first_name', details.firstName);
      formData.append('last_name', details.lastName);
      formData.append('dob', details.dob);
      formData.append('nationality', details.nationality);
  
      // Add other details if needed
      formData.append('emailId', details.email);
      formData.append('phnno', details.phone);
      formData.append('postcode', details.postCode);
      formData.append('houseno', details.houseNo);
      formData.append('street', details.street);
      formData.append('town_city', details.city);
      formData.append('county', details.county);
      formData.append('country', details.country);
      formData.append('flag','1')
  
      const response = await fetch(`${BASE_URL}/api/business-detail`, {
        method: 'POST',
        body: formData,
      });
  
      // Here, directly parse the JSON response
      const data = await response.json();  // No need for JSON.parse(text) again
      console.log('Raw response------>:', data);
  
      if (!response.ok) throw new Error(data.message || 'Failed to submit details');
  
      return data;
    } catch (error) {
      console.error('Error submitting details:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getOwnerDetails = async (id:any) => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/api/business-detail/${id}`, { method: 'GET' });
      const data = await response.json();
      console.log("data in review is",data);
      
      if (!response.ok) throw new Error(data.message || 'Failed to fetch details');

      return data;
    } catch (error) {
      console.error('Error fetching details:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    postOwnerDetails,
    getOwnerDetails,
    loading,
  };
};
