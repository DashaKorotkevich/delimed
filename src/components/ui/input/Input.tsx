// components/ui/input/Input.tsx
import { CityInput, type CityInputProps } from '@components/ui/input/variants/CityInput.tsx';
import { NumberInput, type NumberInputProps } from '@components/ui/input/variants/NumberInput';
import { DateInput, type DateInputProps } from '@components/ui/input/variants/DateInput.tsx';
import { TypeCargoInput, type TypeCargoInputProps } from '@components/ui/input/variants/TypeCargoInput.tsx';
import { BaseInput, type BaseInputProps } from '@components/ui/input/variants/BaseInput.tsx';

export type InputProps = 
  | ({ variant: 'CityInput' } & CityInputProps)
  | ({ variant: 'NumberInput' } & NumberInputProps)
  | ({ variant: 'DateInput' } & DateInputProps)
  | ({ variant: 'TypeCargoInput' } & TypeCargoInputProps)
  | ({ variant?: 'BaseInput' } & BaseInputProps);

export function Input(props: InputProps) {
  switch (props.variant) {
    case 'CityInput':
      return <CityInput {...props} />;
    case 'DateInput':
      return <DateInput {...props} />;
    case 'NumberInput':
      return <NumberInput {...props} />;
    case 'TypeCargoInput':
      return <TypeCargoInput {...props} />;
    case 'BaseInput':
      return <BaseInput {...props} />;
  }
}

export default Input;