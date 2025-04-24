// import { useState } from "react";
// import { Platform } from "react-native";

// export interface BankDetails {
//   accountHolderName: string;
//   sortCode: string;
//   accountNumber: string;
//   confirmAccountNumber: string;
//   document?: string;
//   flag?: number;
// }

// // const BASE_URL = 'https://fe67-49-249-92-34.ngrok-free.app';
// const BASE_URL =
//   Platform.OS === "web"
//     ? "http://localhost:3000"
//     : "https://fe67-49-249-92-34.ngrok-free.app";

// export const useBankApi = () => {
//   const [loading, setLoading] = useState(false);

//   const postBankDetails = async (details: any) => {
//     try {
//       setLoading(true);
//       const formData = new FormData();
//       formData.append("accountHolderName", details.accountHolderName);
//       formData.append("sortCode", details.sortCode);
//       formData.append("accountNumber", details.accountNumber);
//       formData.append("confirmAccountNumber", details.confirmAccountNumber);

//       // Only add the document if it exists
//       // if (details.document) {
//       //   formData.append('document', {
//       //     uri: details.document.uri,
//       //     name: details.document.name,
//       //     type: details.document.mimeType,
//       //   } as any);
//       // }

//       if (details.accountNumber !== details.confirmAccountNumber) {
//         throw new Error("Account numbers do not match");
//       }

//       const response = await fetch(`${BASE_URL}/api/bank-detail`, {
//         method: "POST",
//         headers: {
//           // Don’t set Content-Type — let fetch handle it
//         },
//         body: formData
//       });
      
//       // 👇 Read response as text first
//       const responseText = await response.text();
//       let data;
      
//       try {
//         // 👇 Try parsing as JSON
//         data = JSON.parse(responseText);
//       } catch (err) {
//         console.error('❌ Response is not valid JSON:', responseText);
//         throw new Error('Server returned an unexpected response');
//       }
      
//       if (!response.ok) {
//         throw new Error(data.message || "Failed to submit bank details");
//       }
      
//       return data;
//     } catch (error) {
//       console.error("Error in postBankDetails:", error);
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };


//   const getBankDetails = async (id: number) => {
//     try {
//       setLoading(true);

//       const response = await fetch(`${BASE_URL}/api/bank-detail/${id}`);
//       const data = await response.json();

//       if (!response.ok)
//         throw new Error(data.message || "Failed to fetch bank details");

//       return data;
//     } catch (error) {
//       console.error("Error in getBankDetails:", error);
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     postBankDetails,
//     getBankDetails,
//     loading,
//   };
// };


















import { useState } from "react";
import { Platform } from "react-native";

export interface BankDetails {
  accountHolderName: string;
  sortCode: string;
  accountNumber: string;
  confirmAccountNumber: string;
  flag?: number;
}

// const BASE_URL = 'https://fe67-49-249-92-34.ngrok-free.app';
const BASE_URL =
  Platform.OS === "web"
    ? "http://localhost:3000"
    : "https://fe67-49-249-92-34.ngrok-free.app";

export const useBankApi = () => {
  const [loading, setLoading] = useState(false);

  const postBankDetails = async (details: BankDetails) => {
    try {
      setLoading(true);

      // Validate if account number and confirmAccountNumber match
      if (details.accountNumber !== details.confirmAccountNumber) {
        throw new Error("Account numbers do not match");
      }

      const response = await fetch(`${BASE_URL}/api/bank-details`, {
        method: "POST",
        headers: {
          // Don't set Content-Type, fetch will handle it
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(details), // Send as JSON without FormData
      });
      console.log("respomse=====>",response)

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to submit bank details");
      }

      return data;
    } catch (error) {
      console.error("Error in postBankDetails:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getBankDetails = async (id: any) => {
    try {
      setLoading(true);

      const response = await fetch(`${BASE_URL}/api/bank-details/${id}`);
      const data = await response.json();
      console.log("data---->",data)

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch bank details");
      }

      return data;
    } catch (error) {
      console.error("Error in getBankDetails:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    postBankDetails,
    getBankDetails,
    loading,
  };
};
