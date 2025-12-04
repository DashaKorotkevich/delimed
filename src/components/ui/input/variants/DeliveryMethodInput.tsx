import { useState } from 'react';
import inputsStyles from './InputsStyles.module.css'

interface DeliveryMethodInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  suggestions?: string[];
  prefVariant?: string;
  disabled?: boolean;
}

export function DeliveryMethodInput({ placeholder, value, onChange, label, suggestions, prefVariant }: DeliveryMethodInputProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSuggestionClick = (suggestion: string) => {
    onChange?.(suggestion); 
    setShowSuggestions(false); 
  };

  const handleInputChange = (newValue: string) => {
    onChange?.(newValue);
    setShowSuggestions(true); 
  };

  const handleInputFocus = () => {
    if (suggestions && suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleInputBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  return (
    <div className={inputsStyles[`${prefVariant}InputContainer`]}>
      {label && <span className={inputsStyles[`${prefVariant}Label`]}>{label}</span>}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className={inputsStyles[`${prefVariant}Input`]}
      />
      <div className={`${inputsStyles[`${prefVariant}Suggestions`]} ${!showSuggestions ? inputsStyles.hidden : ''}`}>
        {suggestions?.map((suggestion, index) => (
          <div 
            key={index}
            className={inputsStyles[`${prefVariant}SuggestionItem`]}
            onMouseDown={(e) => {
              e.preventDefault(); // Предотвращаем blur события
              handleSuggestionClick(suggestion);
            }}
          >
            {suggestion} 
          </div>
        ))}
      </div>
    </div>
  );
}