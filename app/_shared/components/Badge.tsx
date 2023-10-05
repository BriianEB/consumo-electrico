import { ReactNode } from 'react';

type BadgeProps = {
  color: string;
  className?: string;
  children: ReactNode;
};

function Badge({ color, className = '', children}: BadgeProps) {
  const colorVariants: { [key:string]: string } = {
    blue: 'bg-blue-400/[.16] text-blue-400',
    green: 'bg-green-500/[.16] text-green-500',
    yellow: 'bg-yellow-500/[.16] text-yellow-500',
    red: 'bg-red-500/[.16] text-red-500'
  };

  return (
    <span
      className={`
        font-bold rounded px-1 py-1
        ${colorVariants[color]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}

export default Badge;