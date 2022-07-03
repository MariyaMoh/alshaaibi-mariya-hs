import axios from 'axios';

const API_URL = '/api/goals';

const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
