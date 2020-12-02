import React from 'react';

const basicFecth = async (url) => {
  const results = await fetch(`${url}`);
  const resultsJson = await results.json();
  return resultsJson;
};

export const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  
  const request = React.useCallback(async (url) => {
    try {
      setLoading(true)
      const results = await basicFecth(url);
      
      setData(results);
      setTimeout(() => setLoading(false), 1250);
      return results;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }, []);

  return { request, data, loading };
};

export default basicFecth;
