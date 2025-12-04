// components/ui/input/Input.tsx
import { HomeInput } from '@components/ui/input/variants/HomeInput.tsx';
import { SecondaryInput } from '@components/ui/input/variants/SecondaryInput.tsx';

export interface InputProps {
  variant?: 'HomeInput' | 'secondary';
  // общие пропсы
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  suggestions?: string[];
}

export function Input({ variant = 'HomeInput', ...props }: InputProps) {
  switch (variant) {
    case 'HomeInput':
      return <HomeInput {...props} />;
    case 'secondary':
      return <SecondaryInput {...props} />;
  }
}

export default Input;