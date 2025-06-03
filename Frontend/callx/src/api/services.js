import api from './config';

// Example API service functions
export const userService = {
  // Get user data
  getUser: async (userId) => {
    try {
      const response = await api.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Create new user
  createUser: async (userData) => {
    try {
      const response = await api.post('/users', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update user
  updateUser: async (userId, userData) => {
    try {
      const response = await api.put(`/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Delete user
  deleteUser: async (userId) => {
    try {
      const response = await api.delete(`/users/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

// Example of how to use in a component:
/*
import { userService } from '../api/services';

function UserComponent() {
  const handleGetUser = async () => {
    try {
      const user = await userService.getUser('123');
      console.log(user);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  return (
    <button onClick={handleGetUser}>Get User</button>
  );
}
*/ 