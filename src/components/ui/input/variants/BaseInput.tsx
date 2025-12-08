import inputsStyles from './InputsStyles.module.css'

export interface BaseInputProps{
  placeholder?: string;
  value?: string; 
  type?: string; //type у input — это всегда string ('text' | 'number' | 'date' | 'email'...). Не может быть type: number
  onChange?: (value: string) => void;
  label?: string;
  disabled?: boolean;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  className?: string;
}
                                                                                                                                                                                                                                                                                                                  
export function BaseInput({ placeholder, value, onChange, label, type, disabled, onFocus, onBlur, className }: BaseInputProps) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value); //Даже для <input type="date">, e.target.value всегда возвращает string
  };

  return (
    <div className={inputsStyles.calcInputContainer}>
      {label ? <span className={inputsStyles[`${className}Label`]}>{label}</span> : null}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={inputsStyles[`${className}Input`]}
        disabled={disabled}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </div>
  );
}

/*
Пользователь вводит "М" 
  ↓
BaseInput: handleChange → вызывает onChange("М")
  ↓
Page: setCity("М") → обновляет состояние
  ↓
React: перерисовывает Page
  ↓
BaseInput: получает value="М" в пропсах
  ↓
Input отображает "М"
*/

/*
Компонент	                                           Использует BaseInput?	          Почему
BaseInput	 (нигде)                                   Сам и есть BaseInput	            Базовый компонент
CityInput	(города туда и обратно)                    Обертка над BaseInput	          Добавляет автодополнение к текстовому полю
NumberInput	(вес, этаж)                              Обертка над BaseInput	          Добавляет логику для чисел
DateInput	(дата сбора)                               Обертка над BaseInput	          Добавляет логику для дат
DimensionsInput	(габариты)                           Обертка над BaseInput      	    Композитный из 3 NumberInput
SelectInput	(способ доставки, тип груза, защита)     Нативный select	                Совсем другой HTML-элемент
CheckboxInput	(грузчики, страхование)                Нативный checkbox	              Совсем другой HTML-элемент
*/