import { ReactNode } from 'react';

type CardProps = {
  className?: string;
  children: ReactNode;
};

function Card({ className, children }: CardProps) {
  return (
    <div className={`bg-white p-6 rounded shadow-lg ${className}`}>
      {children}
    </div>
  );
}

export default Card;