import { searchCities } from '@api/cities/cities';

import { useState, useEffect } from 'react';

export function useCitySuggestions(inputValue: string) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (inputValue.length < 2) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      setIsLoading(true);
      try {
        const cities = await searchCities(inputValue);
        setSuggestions(cities);
      } catch (error) {
        console.error('Ошибка:', error);
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  return { suggestions, isLoading };
}