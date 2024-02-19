import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay: number): string => {
  const [debouneValue, setDebounceValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
        setDebounceValue(value)
    }, delay)
    return () => {
        clearTimeout(handler);
    }
  },[value, delay])

  return debouneValue
};