// import { useState, useEffect } from "react";

// const useDebounce = (value: string, delay: number) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     // Limpiar el timeout si el valor cambia antes de que el tiempo se complete
//     return () => clearTimeout(handler);
//   }, [value, delay]);

//   return { debouncedValue };
// };

// export default useDebounce;

import { useRef, useCallback } from "react";

/**
 * Returns a memoized function that will only call the passed function when it hasn't been called for the wait period
 * @param func The function to be called
 * @param wait Wait period after function hasn't been called for
 * @returns A memoized function that is debounced
 */
interface DebouncedCallback {
  (...args: any[]): void;
}

const useDebouncedCallback = (func: (...args: any[]) => void, wait: number): DebouncedCallback => {
  // Use a ref to store the timeout between renders
  // and prevent changes to it from causing re-renders
  const timeout = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (...args: any[]) => {
      const later = () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
        func(...args);
      };

      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(later, wait);
    },
    [func, wait]
  );
};

export default useDebouncedCallback;
