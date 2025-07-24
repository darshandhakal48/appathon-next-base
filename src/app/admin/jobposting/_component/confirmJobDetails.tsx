import { Button } from "@/components/ui/button";
import { skills } from "@/config/db";
import { useGlobalModal } from "@/hooks/use-global-ui";
import { ConfirmJobDetailsProps } from "@/lib/type";

function ConfirmJobDetails({ jobDetails, setStep }: ConfirmJobDetailsProps) {
  const modal = useGlobalModal();

  const handleEdit = () => {
    modal.closeAll();
  };

  const handleProceed = () => {
    modal.closeAll();
    setStep(2);
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        <div className="h-[1px] bg-grayscale-border-lighter"></div>
        <div className="text-xl font-semibold">ConfirmJobDetails</div>
        <div className="flex items-center gap-4">
          <span className="text-base font-normal text-grayscale-text-body">
            In-Office
          </span>
          <span className="text-base font-normal text-grayscale-text-body">
            Texas, USA
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-[1px] border-grayscale-border-lighter p-6 ">
          {/* left side job details */}
          <div className="grid grid-cols-1 gap-10">
            <div className="grid grid-cols-2 gap-10">
              {Object.entries(jobDetails.jobInfo).map(([title, value]) => {
                if (title === "skills") return;
                return (
                  <div key={title} className="flex flex-col gap-1.5">
                    <span className="font-normal text-base text-sidebar-primary-foreground">
                      {title}
                    </span>
                    <span className="p-1.5 text-xs font-normal">
                      {typeof value === "object" && value !== null
                        ? `${value.startingRange} - ${value.endingRange} ${value.currency}`
                        : value}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-normal text-base text-sidebar-primary-foreground">
                Skills
              </span>
              <div className="flex items-center flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="p-1.5 bg-grayscale-surface-default text-xs font-normal"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* right side job details */}
          <div className="grid grid-cols-1 gap-4 border-l-[1px] border-l-grayscale-border-lighter pl-4">
            {Object.entries(jobDetails.jobDescription).map(([title, value]) => (
              <>
                <div className="flex flex-col gap-1.5 " key={title}>
                  <span className="text-sm font-normal text-sidebar-primary-foreground">
                    {title}
                  </span>
                  <span className="font-normal text-base text-grayscale-text-subtitle">
                    {value}
                  </span>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* buttons */}
        <div className="flex justify-end items-center gap-2">
          <Button
            variant="outline"
            className="font-normal"
            onClick={handleEdit}
          >
            Edit
          </Button>
          <Button
            variant="default"
            className="font-normal"
            onClick={handleProceed}
          >
            Proceed
          </Button>
        </div>
      </div>
    </>
  );
}

export default ConfirmJobDetails;
