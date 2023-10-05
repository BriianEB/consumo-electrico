import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';

import Card from './Card';

type ModalProps = {
  children: ReactNode;
  show: boolean;
  onClose?: () => void;
};

function Modal({ children, show, onClose }: ModalProps) {
  const modalContainer = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    // Next en ocasiones intentará renderizar el componente del Modal aún cuando se declara como componente del cliente
    // (https://nextjs.org/docs/app/building-your-application/rendering/client-components#full-page-load). Para poder
    // intentar acceder al objeto document (que únicamente está disponible en el navegador) sin que surjan errores,
    // se puede acceder a él dentro de useEffect; useEffect se ejecutará sólo cuando el componente esté montado.
    modalContainer.current = document.getElementById('modal-container');

    setMounted(true);
  }, []);

  // Evita que un evento de click dentro del modal se propague hacia el backdrop, ya que éste cierra el modal
  // en caso de que dicho evento le llegue.
  function stopClickPropagation(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
  }

  const modalTransitionStyles: { [key: string]: Object } = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
  };

  if (!mounted) {
    return null;
  }

  return (
     modalContainer.current ? (createPortal((
      <Transition
      nodeRef={modalRef}
      in={show}
      timeout={300}
      unmountOnExit
    >
      {state => (
        <div
          className="fixed left-0 top-0 w-screen h-screen bg-black/50 transition-opacity duration-300 z-[2000]"
          style={modalTransitionStyles[state]}
          onClick={onClose}
          ref={modalRef}
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"            
            onClick={stopClickPropagation}
          >
            <Card>
              {children}
            </Card>
          </div>
        </div>
      )}
    </Transition>
    ), modalContainer.current)) : (
      null
    )
  );
}

export default Modal;