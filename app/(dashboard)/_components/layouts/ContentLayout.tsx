import { ReactNode, Fragment } from 'react';

type ContentLayoutProps = {
  title: string;
  children: ReactNode;
  breadcrumbs: string[];
};

// Layout que incluye el título y el breadcrumbs en la parte superior del contenido.
function ContentLayout({ title, children, breadcrumbs }: ContentLayoutProps) {

  return (
    <>
      <div className="flex justify-between mb-6">
        <h1 className="text-xl font-bold">
          {title}
        </h1>

        <div className="flex items-center">
            {breadcrumbs.map((item, index) => (
              <Fragment key={item}>
                <div className="text-blue-400 last:text-neutral-500">
                  {item}
                </div>

                {index !== breadcrumbs.length - 1 && (
                  <span className="bg-neutral-500 w-1 h-1 mx-4 rounded-full"></span>
                )}
              </Fragment>
            ))}
        </div>
      </div>

      {children}
    </>
  );
}

export default ContentLayout;