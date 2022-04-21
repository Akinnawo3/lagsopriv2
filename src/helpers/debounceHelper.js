import {useEffect, useCallback} from "react";

let debounceTimeout;
const useDebounce = (delay = 1000) => {
  const debounceRequest = useCallback(
    (debounceFunction) => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        debounceFunction();
      }, delay);
    },
    [delay]
  );

  useEffect(() => {
    return () => clearTimeout(debounceTimeout);
  }, [debounceRequest]);

  return [debounceRequest];
};

export default useDebounce;
