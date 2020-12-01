const useRandom = (totalLength) => {
  const randomNumber = Math.floor(Math.random() * (totalLength - 1));
  return randomNumber;
};

export default useRandom;
