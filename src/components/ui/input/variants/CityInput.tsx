import { useState } from 'react';
import { BaseInput, type BaseInputProps } from './BaseInput';
import inputsStyles from './InputsStyles.module.css'

export interface CityInputProps extends Omit<BaseInputProps, 'type'>{
  suggestions?: string[];
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export function CityInput({ 
  placeholder, 
  value, 
  onChange, 
  label, 
  suggestions, 
  className,
  disabled,
  onBlur,
  onFocus
}: CityInputProps) {
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleSuggestionClick = (suggestion: string) => {
      onChange?.(suggestion); 
      setShowSuggestions(false);

    };

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (suggestions && suggestions.length > 0) {
        setShowSuggestions(true);
      }
      onFocus?.(e);
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setTimeout(() => setShowSuggestions(false), 200);
      onBlur?.(e);
    }

    const handleChange = (newValue: string) => {
      onChange?.(newValue);
      setShowSuggestions(true); 
    };

  return (
    <div className={inputsStyles.baseInputContainer}>
      <BaseInput
        label={label}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={className}
        disabled={disabled}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur} 
      />
      <div className={`${inputsStyles.suggestionsContainer} ${!showSuggestions ? inputsStyles.suggestionsContainerHidden : ''}`}>
        {suggestions?.map((suggestion, index) => (
          <div 
            key={index}
            className={inputsStyles.suggestionItem}
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

/*
1. 🖥️ Браузер: "Пользователь ввёл 'М' в input"
   ↓
2. ⚛️ React: "Вызываю handleNativeChange(e)"
   ↓  
3. 🏗️ BaseInput: "Ага, событие change! Значит нужно вызвать onChange('М')"
   ↓
4. 🔗 BaseInput вызывает: onChange?.(e.target.value)
   ↓
5. 🏙️ CityInput получает вызов: "О! Мне пришло 'М' в handleChange!"
   ↓
6. 🏙️ CityInput: "Вызываю свою логику и пробрасываю дальше"
*/