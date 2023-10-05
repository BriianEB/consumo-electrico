import { ReactNode } from 'react';

type DashboardCardProps = {
  title: string;
  content: string;
  subContent: ReactNode;
  Icon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string, titleId?: string } & React.RefAttributes<SVGSVGElement>>;
  className?: string;
};

function DashboardCard({ title, content, subContent, Icon,className = '' }: DashboardCardProps) {
  return (
    <div className={`flex justify-between bg-white p-6 rounded shadow-lg ${className}`}>
      <div>
        <h5 className="text-base mb-6">{title}</h5>
        <h6 className="text-3xl mb-6">{content}</h6>

        <div>{subContent}</div>
      </div>

      <div className="flex justify-center items-center bg-blue-400/[.16] w-12 h-12 rounded-full">
        <Icon className="w-8 h-8 text-blue-400" />
      </div>
    </div>
  );
}

export default DashboardCard;