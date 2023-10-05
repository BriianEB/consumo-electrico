'use client';

import { useState } from 'react';

import ArrowDownIcon from '../icons/ArrowDownIcon';

type SelectProps = {
  name: string;
  label: string;
  className?: string;
};

function Select({ name, label, className = '' }: SelectProps) {
  const [selectedItem, setSelectedItem] = useState<string>('');

  return (
    <div className={`relative ${className}`}>
      <button
        className={`
          peer
          relative flex items-center bg-transparent w-full px-3 py-3 border border-neutral-400 rounded z-20
        `}
      >
        <span className="text-neutral-500">{label}</span>

        <ArrowDownIcon className="absolute right-3 text-neutral-500 w-3 h-3" />
      </button>

      <span
        className={`
          absolute top-3 left-3 text-neutral-500 hidden
        `}
      >        
        {label}
      </span>
    </div>
  );
}

export default Select;