import axios from 'axios';

// Example API call to fetch tariff data
export const getTariffData = async () => {
  try {
    const response = await axios.get('/api/tariffs');
    return response.data;
  } catch (error) {
    console.error('Error fetching tariff data', error);
  }
};
