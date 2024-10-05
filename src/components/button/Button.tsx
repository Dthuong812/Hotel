import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  full?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className = '',
  type = 'submit',
  full = false,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`hidden h-10 w-16 my-auto font-semibold border-2 rounded md:block border-cyan-500 text-cyan-600 animate-bounce-slow ${className} ${full ? 'w-full' : ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
