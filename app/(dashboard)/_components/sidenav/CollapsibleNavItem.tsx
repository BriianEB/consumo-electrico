import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';

import ArrowRightIcon from '@/_shared/icons/ArrowRightIcon';

type CollapsibleNavItemProps = {
  name: string;
  Icon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>;
  active?: boolean;
  children: ReactNode;
};

function CollapsibleNavItem({ name, Icon, active = false, children }: CollapsibleNavItemProps) {
  const [collapsed, setCollapsed] = useState<boolean>(active); // Si el item no está activo, tampoco puede estar colapsado.
  const [subItemsHeight, setSubItemsHeight] = useState<string>('');

  const subItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active) {
      updateHeight();
    }
  }, []);

  const transitionStyles: { [key: string]: Object } = {
    entering: { height: subItemsHeight },
    entered: { height: subItemsHeight },
    exiting: { height: 0 },
    exited: { height: 0 }
  };

  function toggleCollapse() {
    setCollapsed(state => !state);
  }

  // Debido a que el elemento de los subitems se elimina del DOM si el item principal no está colapsado, para
  // sacar su altura dinámicamente (y poder realizar la animación) es necesario tomar en cuenta dos ocasiones
  // dependiendo de si el item principal debe estar colapsado o no la primera vez que sea montado:
  //     1) Si el item no debe estar colapsado: Antes de que Transition aplique el estado "entering" - Debido a que el
  //        elemento no existe en el DOM, solo se puede acceder a él cuando Transition lo monte. Transition permite
  //        recibir una callback que ejecutará antes de que se aplique el primer estado del componente ("entering"),
  //        en este punto el elemento ya existe en el DOM pero aún se realiza la transición.
  //     2) Si el item debe estar colapsado: Inmediatamente al montar el item principal - El elemento existirá en el DOM
  //        desde el inicio, se puede acceder a él sin ningún problema cuando se monte el item principal utilizando
  //        useEffect.
  function updateHeight() {
    const height = subItemsRef.current ? subItemsRef.current.scrollHeight : 0;
    setSubItemsHeight(`${height}px`);
  }

  return (
    <li className="mb-2">
      <button
        className={`
          relative flex items-center w-full px-4 py-3 rounded transition-all duration-300
          ${active ? 'bg-blue-400/10 text-blue-400 font-bold hover:bg-blue-400/25' : 'text-slate-700 hover:bg-slate-300/25'}
        `}
        onClick={toggleCollapse}
      >
        <Icon className="inline w-5 h-5" />
        <span className="ml-4">{name}</span>

        <ArrowRightIcon
          className={`
            absolute top-1/2 right-4 w-3 h-3 -translate-y-1/2 transition-all linear duration-200
            ${collapsed && 'rotate-90'}
          `}
        />
      </button>

      <Transition
        nodeRef={subItemsRef}
        timeout={300}
        in={collapsed}
        onEnter={updateHeight}
        unmountOnExit
      >
        {state => (
          <div
            className={`
                overflow-hidden transition-all duration-300
              `}
            style={transitionStyles[state]}
            ref={subItemsRef}
          >
            {children}
          </div>
        )}
      </Transition>
    </li>
  );
}

export default CollapsibleNavItem;