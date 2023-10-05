import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  color: string;
  full?: boolean;
  className?: string;
  onClick?: () => void;
};

function Button({ children, color, full = false, className = '', onClick = undefined }: ButtonProps) {

  const colorVariants: { [key:string]: string } = {
    blue: 'bg-blue-400 shadow-lg shadow-blue-400/60 text-white hover:bg-blue-500 focus:ring-blue-300',
    red: 'bg-red-500 shadow-lg shadow-red-500/60 text-white hover:bg-red-600 focus:ring-red-300',
    'gray-light': 'bg-gray-250 shadow-lg shadow-gray-250/60 hover:bg-gray-300 focus:ring-gray-200'
  };

  return (
    <button
      className={`
      px-4 py-2.5 rounded transition-all
      focus:outline-none focus:ring
      ${colorVariants[color]}
      ${full ? 'w-full' : ''}        
      ${className}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;