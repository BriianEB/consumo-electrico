import Image from 'next/image';

import IconButton from '@/_shared/components/IconButton';

type LanguagePickerProps = {
  className?: string;
};

function LanguagePicker({ className }: LanguagePickerProps) {
  return (
    <div className={`${className}`}>
        <button
          className={`
            flex items-center p-1 rounded outline-none transition-all linear duration-300
            hover:bg-slate-400/30
            focus:bg-slate-600/30
          `}
        >
          <Image src="/mexico-flag.png" alt="Español" width={16} height={12} className="inline" />
          <span className="ml-1.5 text-neutral-500">Español</span>
        </button>
    </div>
  );
}

export default LanguagePicker;