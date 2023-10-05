import { forwardRef } from 'react';
import NextLink from 'next/link';

import NProgress from 'nprogress';

const Link = forwardRef<HTMLAnchorElement, React.ComponentProps<'a'>>(({ href, onClick, ...rest}, ref) => {
  const useLink = href && href.startsWith("/");
  
  if (!useLink) {
    return <a href={href} onClick={onClick} {...rest} />
  };

  return (
    <NextLink
      href={href}
      onClick={(event) => {
        if (window.location.pathname !== href) NProgress.start();

        if(onClick) onClick(event);
      }}
      {...rest}
      ref={ref}
    />
  );
});

export default Link;