import { forwardRef } from 'react';

type TextFieldProps = {
  name: string;
  label: string;
  type: string;
  className?: string;
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ name, label, type, className = '' }, ref) => {

  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
        id={name}
        name={name}
        className={`
          peer
          relative bg-transparent w-full p-2.5 border border-neutral-400 rounded placeholder-transparent z-20
          focus:outline-none focus:border-2 focus:border-blue-400 focus:-m-px
        `}
        placeholder={label}
        ref={ref}
      />

      <label
        htmlFor={name}
        className={`
          absolute -left-px -top-2.5 px-1.5 bg-gray-200 text-neutral-500 scale-90 transition-all z-30
          peer-placeholder-shown:top-[11px] peer-placeholder-shown:left-2 peer-placeholder-shown:scale-100
          peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:z-10
          peer-focus:-left-px peer-focus:-top-[11px] peer-focus:scale-90 peer-focus:text-blue-400 peer-focus:z-30
        `}
      >
        {label}
      </label>
    </div>
  );
});

export default TextField;