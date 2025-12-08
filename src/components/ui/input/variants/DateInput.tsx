import { BaseInput, type BaseInputProps } from './BaseInput';

// Расширяем BaseInputProps, НЕ меняя типы (пока работаем со string)
export interface DateInputProps extends Omit<BaseInputProps, 'type'> {
  // Пока оставляем всё как есть - value: string, onChange: (string) => void
  // Позже переделаем на Date объекты
}

export function DateInput({
  className,
  value,
  onChange,
  label,
  placeholder,
  disabled
}: DateInputProps) {
  
  // Пока просто пробрасываем string (как было)
  const handleChange = (text: string) => {
    onChange?.(text);
  };

  // Используем BaseInput внутри!
  return (
    <BaseInput
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      type="date"
      disabled={disabled}   
      className={className}
    />
  );
}