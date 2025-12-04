import { useState } from 'react';
import inputsStyles from './InputsStyles.module.css'

interface CityInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  suggestions?: string[];
  prefVariant?: string;
  onCityCompleted?: (type: 'from' | 'to') => void;
}

export function CityInput({ 
  placeholder, 
  value, 
  onChange, 
  label, 
  suggestions, 
  prefVariant,
  onCityCompleted // добавляем в деструктуризацию
}: CityInputProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSuggestionClick = (suggestion: string) => {
    onChange?.(suggestion); 
    setShowSuggestions(false);
    
    // Определяем тип города на основе label и вызываем колбэк
    if (label && onCityCompleted) {
      if (label.toLowerCase().includes('откуда') || label === 'Откуда') {
        onCityCompleted('from');
      } else if (label.toLowerCase().includes('куда') || label === 'Куда') {
        onCityCompleted('to');
      }
    }
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
              e.preventDefault();
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