interface SecondaryInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function SecondaryInput({ placeholder, value, onChange }: SecondaryInputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
}