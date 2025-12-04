// api/cities/cityApi.ts
const DADATA_API_URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
const DADATA_API_KEY = 'c50d75bbf934262bad97b525b204ae7badfd2aa4';

// Уберите этот интерфейс или исправьте его
interface DaDataSuggestion {
  value: string;
  unrestricted_value: string;
  data: {
    city: string;
    region: string;
    country: string;
  };
}

export const searchCities = async (query: string): Promise<string[]> => {
  try {
    const response = await fetch(DADATA_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${DADATA_API_KEY}`
      },
      body: JSON.stringify({
        query: query,
        count: 5,
        from_bound: { value: "city" },
        to_bound: { value: "city" },
        locations: [{ country: "Россия" }]
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('DaData response:', data);
    
    // ✅ Уже возвращает массив строк!
    return data.suggestions.map((suggestion: DaDataSuggestion) => suggestion.value);
    
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
};