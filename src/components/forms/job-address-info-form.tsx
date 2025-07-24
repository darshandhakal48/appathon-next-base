import { Input } from "../ui/input";
import { Control } from "react-hook-form";
import { JobFormType } from "./schema";
import {
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "../ui/form";

function JobAddressInfoForm({ control }: { control: Control<JobFormType> }) {
  return (
    <>
      <div className="bg-grayscale-surface-white p-6 grid grid-cols-1 gap-4">
        <span className="text-lg text-primary-sidebar-foreground">
          Address Information
        </span>
        <div className="grid grid-cols-2 gap-2.5">
          <FormField
            control={control}
            name="jobAddress.street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className=" border-secondary-border focus-visible:ring-0"
                    placeholder="646 west"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-error-surface-lighter" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="jobAddress.state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="border-secondary-border focus-visible:ring-0"
                    placeholder="texas"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-error-surface-lighter" />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="jobAddress.city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className=" border-secondary-border focus-visible:ring-0"
                    placeholder="Hamilton"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-error-surface-lighter" />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="jobAddress.postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postal Code</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="border-secondary-border focus-visible:ring-0"
                    placeholder="33700"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-error-surface-lighter" />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="jobAddress.country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className=" border-secondary-border focus-visible:ring-0"
                    placeholder="USA"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-error-surface-lighter" />
              </FormItem>
            )}
          />
        </div>
      </div>
    </>
  );
}

export default JobAddressInfoForm;
