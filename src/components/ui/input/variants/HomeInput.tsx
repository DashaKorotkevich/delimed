import { useState } from 'react';
import inputsStyles from './InputsStyles.module.css'

interface HomeInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  suggestions?: string[];
}

export function HomeInput({ placeholder, value, onChange, label, suggestions }: HomeInputProps) {
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
    <div className={inputsStyles.homeInputContainer}>
      {label && <span className={inputsStyles.label}>{label}</span>}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className={inputsStyles.homeInput}
      />
      <div className={`${inputsStyles.suggestions} ${!showSuggestions ? inputsStyles.hidden : ''}`}>
        {suggestions?.map((suggestion, index) => (
          <div 
            key={index}
            className={inputsStyles.suggestionItem}
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