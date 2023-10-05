import { MoonIcon } from '@heroicons/react/24/outline';

import IconButton from '@/_shared/components/IconButton';

type DarkModeTogglerProps = {
  className?: string;
};

function DarkModeToggler({ className }: DarkModeTogglerProps) {
  return (
    <div className={`${className}`}>
      <IconButton>
        <MoonIcon />
      </IconButton>
    </div>
  );
}

export default DarkModeToggler;