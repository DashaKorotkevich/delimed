import { BaseInput, type BaseInputProps } from "./BaseInput";

// Наследуем от BaseInputProps, но убираем type (он всегда "number")
export interface NumberInputProps extends Omit<BaseInputProps, 'type'>{}

export function NumberInput({
  className,
  value,
  onChange,
  label,
  placeholder,
  disabled
}: NumberInputProps) {
  
  // Просто пробрасываем string (пока не добавляем преобразование в number)
  const handleChange = (text: string) => {
    onChange?.(text);
  };

  return (
    <BaseInput
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      type="number"
      disabled={disabled}
      className={className}
    />
  );
}