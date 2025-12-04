// components/ui/input/Input.tsx
import { CityInput } from '@components/ui/input/variants/CityInput.tsx';
import { DeliveryMethodInput } from '@components/ui/input/variants/DeliveryMethodInput.tsx';
import { DateInput } from '@components/ui/input/variants/DateInput.tsx';
import { TypeCargoInput } from '@components/ui/input/variants/TypeCargoInput.tsx';
import { BaseInput } from '@components/ui/input/variants/BaseInput.tsx';

export interface InputProps {
  variant?: 'CityInput' | 'DeliveryMethodInput' | 'DateInput' | 'TypeCargoInput' | 'BaseInput';
  // общие пропсы
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  suggestions?: string[];
  prefVariant?: string;
  onCityCompleted?: (type: 'from' | 'to') => void;
  disabled?: boolean;
}

export function Input({ variant, ...props }: InputProps) {
  switch (variant) {
    case 'CityInput':
      return <CityInput {...props} />;
    case 'DateInput':
      return <DateInput {...props} />;
    case 'DeliveryMethodInput':
      return <DeliveryMethodInput {...props} />;
    case 'TypeCargoInput':
      return <TypeCargoInput {...props} />;
    case 'BaseInput':
      return <BaseInput {...props} />;
  }
}

export default Input;