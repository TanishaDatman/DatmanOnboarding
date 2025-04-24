import { useState } from 'react';
import { Platform } from 'react-native';

export interface OwnerDetails {
  title: string;
  firstName: string;
  lastName: string;
  dob: string;
  nationality: string;
}


// const BASE_URL = 'https://fe67-49-249-92-34.ngrok-free.app';
const BASE_URL =
  Platform.OS === 'web'
    ? 'http://localhost:3000'
    : 'https://fe67-49-249-92-34.ngrok-free.app';

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
      // formData.append('documentUrl', details.image);
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
      // console.error('Error submitting details:', error);
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
      // console.log("data in review is",data);
      
      if (!response.ok) throw new Error('Failed to fetch details');

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
