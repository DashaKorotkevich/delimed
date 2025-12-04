// components/ui/Button.tsx
import styles from './Button.module.css'
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  to?: string;
  type?: 'button' | 'submit' | 'reset';
}

function Button({ children, size = 'medium', onClick, style, className, to, type = 'button' }: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
      if (to) {
      navigate(to); // ← переход на страницу
    }
    onClick?.(); // ← вызываем оригинальный onClick если есть
  }

  return (
    <button 
      type={type}
      className={`${styles.button} ${styles[size]} ${className || ''}`}
      style={style}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
