// shared/hooks/useDeliveryOptions.ts
import { useState, useCallback } from 'react';

interface DeliveryOptions {
  deliveryOptions: any[];
  isLoading: boolean;
  error: string | null;
  fetchDeliveryOptions: (
    cityFrom: string | null,
    cityTo: string | null,
    dateCollection: string | null,
    deliveryMethod: string | null,
    weight: string | null,
    volume: string | null, // формат "ширина*высота*длина"
  ) => Promise<void>;
  clearDeliveryOptions: () => void;
}

export function useDeliveryOptions(): DeliveryOptions {
  const [deliveryOptions, setDeliveryOptions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const parseVolume = useCallback((volume: string | null) => {
    if (!volume) {
      return { width_cm: 20, height_cm: 15, length_cm: 30 }; // значения по умолчанию
    }

    try {
      // Разбиваем строку по разделителям (может быть *, x, ×, пробел)
      const parts = volume.split(/[*x×\s]+/).map(part => {
        // Убираем возможные единицы измерения и пробелы
        const num = part.replace(/[^\d.,]/g, '').replace(',', '.');
        return parseFloat(num);
      }).filter(num => !isNaN(num));

      if (parts.length >= 3) {
        return {
          width_cm: parts[0],
          height_cm: parts[1],
          length_cm: parts[2]
        };
      } else if (parts.length === 1) {
        // Если только одно число - используем кубическую форму
        const size = parts[0];
        return {
          width_cm: size,
          height_cm: size,
          length_cm: size
        };
      } else {
        throw new Error('Неверный формат габаритов');
      }
    } catch (err) {
      console.error('Ошибка парсинга объема:', err);
      return { width_cm: 20, height_cm: 15, length_cm: 30 };
    }
  }, []);

  const fetchDeliveryOptions = useCallback(async (
    cityFrom: string | null,
    cityTo: string | null,
    dateCollection: string | null,
    deliveryMethod: string | null,
    weight: string | null,
    volume: string | null,
  ) => {
    if (!cityFrom || !cityTo) {
      setError('Не указаны города отправления и назначения');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Парсим объем
      const { width_cm, height_cm, length_cm } = parseVolume(volume);

      const requestData = {
        delivery_type: deliveryMethod === 'Доставка' ? 'door' : 'pickup',
        extra_services: {
          floor: 5,
          has_elevator: false,
          insurance_value: 5000,
          need_courier: false,
          need_documents: false,
          need_packing: false,
          need_storage: false,
          need_unloading: false
        },
        from_address: cityFrom,
        height_cm,
        length_cm,
        shipment_date: dateCollection || new Date().toISOString().split('T')[0],
        speed: "economy",
        to_address: cityTo,
        weight_kg: weight ? Number(weight) : 2.5, // вес по умолчанию 2.5 кг
        width_cm,
      };

      console.log('Отправка запроса с данными:', requestData);

      const response = await fetch('/api/delivery/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.options && Array.isArray(result.options)) {
        setDeliveryOptions(result.options);
        console.log('Получено вариантов:', result.options.length);
      } else {
        setDeliveryOptions([]);
        setError('Нет доступных вариантов доставки');
      }
    } catch (err) {
      console.error('Ошибка при запросе доставки:', err);
      setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
      setDeliveryOptions([]);
    } finally {
      setIsLoading(false);
    }
  }, [parseVolume]);

  const clearDeliveryOptions = useCallback(() => {
    setDeliveryOptions([]);
    setError(null);
  }, []);

  return {
    deliveryOptions,
    isLoading,
    error,
    fetchDeliveryOptions,
    clearDeliveryOptions
  };
}