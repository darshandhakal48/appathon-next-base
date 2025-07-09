const DashboardPageHeader = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode | string;
}) => {
  return (
    <div className="h-auto md:h-16 px-6 py-2 bg-white border-b border-background-secondary gap-8 overflow-hidden">
      <div className="flex items-center gap-x-8 justify-between w-full">
        <p className="text-title text-xl text-nowrap font-semibold leading-7">
          {title}
        </p>
        {children}
      </div>
    </div>
  );
};

export default DashboardPageHeader;
