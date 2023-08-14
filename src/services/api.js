import axios from 'axios';

axios.defaults.baseURL = 'https://restcountries.com/v3.1';
// https://restcountries.com/#endpoints

// export const fetchCountries = async () => {
//   const response = await axios.get('/all');
//   const countries = countriesNormalize(response.data);
//   return countries;
// };

// export const fetchRegions = async region => {
//   const { data } = await axios.get(`/region/${region}`);
//   const countries = countriesNormalize(data);
//   return countries;
// };
// 'https://dummyjson.com/users/search?q=John'

export const fetchUsersByName = async name => {
  const { data } = await axios.get(
    `https://dummyjson.com/users/search?q=${name}`
  );
  return data;
};

export const fetchUsers = async name => {
  const { data } = await axios.get(`https://dummyjson.com/users/`);
  return data;
};
