
import {
  JOB_BOARDS,
  JobPostingFormType,
} from "@/schema/job-posting-form-schema";
import { Typography } from "@/components/shared/typography";
import JobDescription from "./job-description";
import { FormField, FormMessage, FormItem } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Stepfields } from "@/hooks/use-multi-step-viewer";
import JobPostInfoForm from "../job-post-info-form";
import JobAddressInfoForm from "../job-address-info-form";
import { UseFormReturn } from "react-hook-form";

export const JOB_POSTING_FORM_STEPS = (form:UseFormReturn<JobPostingFormType>): Stepfields[] => [
  {
    fields: [
      "jobTitle",
      "salary.min",
      "salary.max",
      "salary.currency",
      "workExperience",
      "educationLevel",
      "skills",
      "clientId",
      "industry",
      "jobType",
      "employmentType",
      "address.country",
      "address.city",
      "address.street",
      "address.state",
      "address.postalCode",
      "jobDescription",
      "requirements",
    ],
    component: (
      <div className= "space-y-6" >
      {/* Stepper */ }
      < div className="flex items-start justify-center py-4 text-sm" >
      <div className="grid w-full max-w-[107px] place-items-center space-y-1.5 text-center">
        <div className="grid size-8 place-content-center rounded-full border border-success-border-lighter bg-success-surface-subtle text-white">
          1
          </div>
          < Typography color="title" type="sm" >
          Job Details
      </ Typography >
  </div>
  < div className = "mt-[17px] h-1.5 w-[87px] rounded-[30px] bg-grayscale-surface-disabled" >
  <div className="h-full w-[50%] rounded-[30px] bg-success-surface-subtle" />
  </div>

  < div className = "grid w-full max-w-[107px] place-items-center space-y-1.5 text-center" >
  <div className="grid size-8 place-content-center rounded-full bg-grayscale-surface-disabled text-white" >
  2
  </div>
  < Typography className = "text-grayscale-surface-disabled" type = "sm" >
  Publish
  </Typography>
  </div>
  </div>
  < div className = "space-y-8" >
  <div className="grid grid-cols-2 gap-4" >
  <JobPostInfoForm control={  form.control } />
  <JobAddressInfoForm control={ form.control } />
  </div>

  < JobDescription control = { form.control } />
  </div>
  </div>
      ),
    },

// Step 2: Manage Job Board
{
  fields: ["jobBoards"],
    component: (
      <div className= "space-y-8" >
      {/* Stepper */ }
      < div className = "flex items-start justify-center py-4 text-sm" >
        <div className="grid w-full max-w-[107px] place-items-center space-y-1.5 text-center" >
          <div className="grid size-8 place-content-center rounded-full border border-success-border-lighter bg-success-surface-subtle text-white" >
            1
            </div>
            < Typography color = "title" type = "sm" >
              Job Details
                </Typography>
                </div>
                < div className = "mt-[17px] h-1.5 w-[87px] rounded-[30px] bg-grayscale-surface-disabled" >
                  <div className="h-full w-full rounded-[30px] bg-success-surface-subtle" />
                    </div>

                    < div className = "grid w-full max-w-[107px] place-items-center space-y-1.5 text-center" >
                      <div className="grid size-8 place-content-center rounded-full border border-success-border-lighter bg-success-surface-subtle text-white" >
                        2
                        </div>
                        < Typography color = "title" type = "sm" >
                          Publish
                          </Typography>
                          </div>
                          </div>
                          < h2 className = "text-lg font-semibold" > Manage Job Board </h2>
                            < FormField
  control = { form.control }
  name = "jobBoards"
  render = {({ field }) => (
    <FormItem>
    <div className= "rounded-lg border" >
    <div className="grid grid-cols-3 gap-3 border-b px-4 py-2 text-sm font-medium" >
      <div>Job Board Name </div>
        < div > Type </div>
        < div > Publish </div>
        </div>
        < div className = "divide-y" >
        {
          JOB_BOARDS.map((board) => {
            const checked = field.value?.includes(board);
            return (
              <div
                          key= { board }
            className = "grid grid-cols-3 items-center px-4 py-2 text-sm"
              >
              <div>{ board } </div>
              < div > Free </div>
              < div className = "flex items-center justify-start" >
                <Switch
                              checked={ !!checked }
            onCheckedChange = {(v) => {
              const next = new Set(field.value ?? []);
              if (v) {
                next.add(board);
              } else {
                next.delete(board);
              }
              field.onChange(Array.from(next));
            }
          }
                            />
            </div>
            </div>
          );
        })
}
</div>
  </div>
  < FormMessage />
  </FormItem>
            )}
          />
  </div>
      ),
    },

// Step 5: Publish (summary action step, mirrors PDF footer actions)
{
  fields: [], // no additional validation fields; final action step
    component: (
      <div className= "space-y-8" >
      <div className="flex items-center gap-4 text-sm" >
        <div className="flex items-center gap-2" >
          <div className="grid h-6 w-6 place-items-center rounded-full border" >
            4
            </div>
            < span > Manage Job Board </span>
              </div>
              < Separator className = "flex-1" />
                <div className="flex items-center gap-2" >
                  <div className="bg-primary text-primary-foreground grid h-6 w-6 place-items-center rounded-full" >
                    5
                    </div>
                    < span className = "font-medium" > Publish </span>
                      </div>
                      </div>

                      < div className = "space-y-2" >
                        <h2 className="text-lg font-semibold" > Ready to Publish </h2>
                          < p className = "text-muted-foreground text-sm" >
                            Review your entries.You can go back to edit before publishing.
            </p>
                              </div>
                              </div>
      ),
},
  ];

