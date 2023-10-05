import { forwardRef } from 'react';

type InputProps = {
  name: string;
  type: string;
  className?: string;
  placeholder: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({ name, type, className = '', placeholder }, ref) => {

  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
        id={name}
        name={name}
        className={`
          peer
          relative bg-transparent w-full px-3 py-3 border border-neutral-400 rounded placeholder:text-neutral-500
          focus:outline-none focus:border-2 focus:border-blue-400 focus:-m-px
        `}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
});

export default Input;