import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`transform hover:translate-y-[-5px] focus:outline-none transition-transform duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
