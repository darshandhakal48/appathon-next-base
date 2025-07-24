const DashboardPageHeader = ({
  children,
}: {
  children?: React.ReactNode | string;
}) => {
  return (
    <div className="h-16 p-4 bg-grayscale-surface-white border-b border-grayscale-border-default gap-8 overflow-hidden ">
      <div className="flex items-center gap-x-8 justify-between 2 w-full">
        {typeof children === "string" ? (
          <p className="text-grayscale-text-title text-xl text-nowrap font-semibold leading-7">
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
