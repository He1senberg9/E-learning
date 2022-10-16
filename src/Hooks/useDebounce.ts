const useDebounce = (func: any, timeOut = 100) => {
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeOut);
  };
};
export default useDebounce;
