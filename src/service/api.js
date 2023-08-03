import axios from 'axios';
const API_KEY = 'tzrYPMWCkMl8QJ7RTOvCGFHY6cja6hKkGAxLf7onkhboy65dgPc6bURG';
axios.defaults.headers.common['Authorization'] = API_KEY;
export const fetchImg = async params => {
  const { data } = await axios.get(`https://api.pexels.com/v1/search`, {
    params: {
      query: 'tree',
      ...params,
    },
  });
  return data;
};
