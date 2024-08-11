import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1'; // Replace with your backend URL

// Register a new user
export const registerUser = async (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

// Login user
export const loginUser = async (userData) => {
    try {
      return await axios.post(`${API_URL}/login`, userData);
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        throw error;
      } else if (error.request) {
        // Request was made but no response received
        throw new Error('No response from server');
      } else {
        // Something happened in setting up the request
        throw new Error('Error in request setup');
      }
    }
  };

// Get user profile (protected route)
export const getUserProfile = async (token) => {
  return axios.get(`${API_URL}/admin/dashboard`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
