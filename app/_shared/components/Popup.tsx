import { ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';

type PopupProps = {
  //attachTo: Element | null;
  attachTo: RefObject<HTMLElement | null>;
  children: ReactNode;
  show: boolean;
  onClose: () => void;
};

function Popup({ attachTo, children, show, onClose }: PopupProps) {
  const popupContainerRef = useRef<HTMLElement | null>(null);
  const optionsRef = useRef<HTMLDivElement | null>(null);

  const [mounted, setMounted] = useState<boolean>(false);
  const [posX, setPosX] = useState<string>('');
  const [posY, setPosY] = useState<string>('');

  useEffect(() => {
    // Misma situación que en el Modal. 
    popupContainerRef.current = document.getElementById('popup-container');

    // Cuando el tamaño de la ventana del navegador cambia, hay que volver a calcular la posición del popup.
    window.addEventListener('resize', computePosition);
    
    setMounted(true);

    return () => window.removeEventListener('resize', computePosition);
  }, []);

  useEffect(() => {
    computePosition();
    
    if (attachTo.current) {
      attachTo.current.blur();
    }

  }, [show]);

  function wasClickedOutside(event: MouseEvent) {
    // Si el elemento clickeado es el que muestra el popup entonces no se hace nada, ya que ese elemento debería
    // cerrar el popup si está abierto.
    if (attachTo.current && attachTo.current.contains(event.target as Node)) {
      return;
    }

    if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
      onClose();
    }    
  }

  function computePosition() {    
    if (attachTo.current && optionsRef.current) {
      setPosX(`${(attachTo.current.getBoundingClientRect().left) - optionsRef.current.scrollWidth}px`);
      setPosY(`${attachTo.current.getBoundingClientRect().top}px`);
    }
  }

  const MenuTransitionStyles: { [key: string]: Object } = {
    entering: { opacity: 1, transform: 'scale(1)' },
    entered: { opacity: 1, transform: 'scale(1)' },
    exiting: { opacity: 0, transform: 'scale(0.5)' },
    exited: { opacity: 0, transform: 'scale(0.5)' }
  };

  if (!mounted) {
    return null;
  }

  return (
    popupContainerRef.current && createPortal((
      <Transition
        nodeRef={optionsRef}
        in={show}
        timeout={200}
        unmountOnExit
        onEntered={() => document.addEventListener('click', wasClickedOutside, true)}
        onExited={() => document.removeEventListener('click', wasClickedOutside, true)}
      >
        {(state) => (
          <div
            className={`
              absolute bg-white top-0 right-full min-w-[160px] rounded shadow-xl z-[1000] origin-top-right
              overflow-hidden transition-[opacity,transform] duration-200
            `}
            style={{
              top: posY,
              left: posX,
              ...MenuTransitionStyles[state]
            }}
            ref={optionsRef}
          >
            {children}
          </div>
        )}
      </Transition>
    ), popupContainerRef.current)
  );
}

export default Popup;