const useFetch = async (url) => {
  const results = await fetch(`${url}`);
  const resultsJson= await results.json()
  return resultsJson;
};

export default useFetch;