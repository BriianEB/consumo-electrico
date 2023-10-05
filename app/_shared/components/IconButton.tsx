import { MouseEventHandler, ReactNode, forwardRef } from 'react';

type IconButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onBlur?: () => void;
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ children, className = '', onClick, onBlur }, ref) => {
  return (
    <button
      className={`
        p-2 rounded-full outline-none transition-all linear duration-300
        hover:bg-slate-400/30
        focus:bg-slate-600/30
        ${className}
      `}
      onClick={onClick}
      onBlur={onBlur}
      ref={ref}
    >
      <div className="flex justify-center items-center w-6 h-6 text-slate-700">
        {children}
      </div>
    </button>
  );
});

export default IconButton;