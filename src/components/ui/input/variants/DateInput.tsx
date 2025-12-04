import inputsStyles from './InputsStyles.module.css'

interface DateInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  defaultValue?: string;
}

export function DateInput({ placeholder, value, onChange, label, defaultValue = '2025-12-05' }: DateInputProps) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={inputsStyles.calcInputContainer}>
      {label && <span className={inputsStyles.calcLabel}>{label}</span>}
      <input
        type="date"
        placeholder={placeholder}
        value={value || defaultValue}
        onChange={handleChange}
        className={inputsStyles.calcInput}
      />
    </div>
  );
}