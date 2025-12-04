import inputsStyles from './InputsStyles.module.css'

interface BaseInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  defaultValue?: string;
}

export function BaseInput({ placeholder, value, onChange, label }: BaseInputProps) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={inputsStyles.calcInputContainer}>
      {label && <span className={inputsStyles.calcLabel}>{label}</span>}
      <input
        type="string"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={inputsStyles.calcInput}
      />
    </div>
  );
}