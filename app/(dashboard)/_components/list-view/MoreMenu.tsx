import { MouseEvent, useRef, useState } from 'react';

import Popup from '@/_shared/components/Popup';

import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { ClipboardDocumentListIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import IconButton from '@/_shared/components/IconButton';

function MoreMenu() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [show, setShow] = useState<boolean>(false);

  function toggleOptions(event: MouseEvent) {
    setShow((state) => !state);
  }

  function closeHandler() {
    setShow(false);
  }

  return (
    <div className="relative">
      <IconButton
        onClick={toggleOptions}
        ref={buttonRef}
      >
        <EllipsisVerticalIcon />
      </IconButton>

      <Popup show={show} onClose={closeHandler} attachTo={buttonRef}>
        <div className="">
          <div
            className="flex items-center px-3 py-3 hover:bg-slate-400/20 cursor-pointer transition-colors duration-300"
          >
            <PencilSquareIcon className="w-5 h-5 mr-3" />
            Editar
          </div>
          
          <a
            href="#"
            className="flex items-center px-3 py-3 hover:bg-slate-400/20 cursor-pointer transition-colors duration-300"
          >
            <ClipboardDocumentListIcon className="w-5 h-5 mr-3" />
            Reporte
          </a>
        </div>
      </Popup>
    </div>
  );
}

export default MoreMenu;