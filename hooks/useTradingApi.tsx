import { useState } from 'react';
import { Platform } from 'react-native';

export interface TradingDetails {
  tradingName: string;
  postCode?: string;
  addressLine1?: string;
  addressLine2?: string;
  townCity?: string;
  county?: string;
  country?: string;
  isSameAsRegistered?: boolean;
}

// const BASE_URL = 'https://fe67-49-249-92-34.ngrok-free.app';
const BASE_URL =
  Platform.OS === 'web'
    ? 'http://localhost:3000'
    : 'https://85f4-49-249-92-34.ngrok-free.app';

export const useTradingApi = () => {
  const [loading, setLoading] = useState(false);

  const postTradingDetails = async (details: any) => {
    try {
      setLoading(true);

      console.log("details in trading are......",details)
      
      const response = await fetch(`${BASE_URL}/api/trading-detail`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  // 👈 Important!
          },
        body: JSON.stringify({
            tradingName: details.tradingName,
            postCode: details.postCode || '',
            addressLine1: details.addressLine1 || '',
            addressLine2: details.addressLine2 || '',
            townCity: details.townCity || '',
            county: details.county || '',
            country: details.country || '',
            isSameAsRegistered: details.isSameAsRegistered ?? true,
          }),
      });
  
      const data = await response.json();  // No need for JSON.parse(text) again
  
      if (!response.ok) throw new Error(data.message || 'Failed to submit details');
  
      return data;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getTradingDetails = async (id: any) => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/api/trading-detail/${id}`, { method: 'GET' });
      const data = await response.json();
  
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
    postTradingDetails,
    getTradingDetails,
    loading,
  };
};
