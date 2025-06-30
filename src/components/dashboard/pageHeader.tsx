const DashboardPageHeader = ({
  children,
}: {
  children?: React.ReactNode | string;
}) => {
  return (
    <div className="h-16 px-6 py-2 bg-white border-b border-background-secondary gap-8 overflow-hidden grid grid-cols-2">
      <div className="flex items-center gap-x-8">
        {typeof children === "string" ? (
          <p className="text-title text-xl text-nowrap font-semibold leading-7">
            {children}
          </p>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default DashboardPageHeader;
