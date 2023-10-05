import { BellIcon } from '@heroicons/react/24/outline';

import IconButton from '@/_shared/components/IconButton';

type NotificationsProps = {
  className?: string;
};

function Notifications({ className }: NotificationsProps) {
  return (
    <div className={`${className}`}>
      <IconButton>
        <BellIcon />
      </IconButton>
    </div>
  );
}

export default Notifications;