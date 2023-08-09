import { useEffect, useState } from 'react';
import { fetchCountries, fetchRegions } from 'services/api';

export const useCountries = region => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getCountries = async (fetchDataFn, param) => {
    try {
      setLoading(true);
      // fetchCountries().then(res => console.log(res));
      const data = await fetchDataFn(param);
      setCountries(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };
  useEffect(() => {
    region === 'all'
      ? getCountries(fetchCountries)
      : getCountries(fetchRegions, region);
  }, [region]);
  return { countries, loading, error };
};
