import { Control } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { EmployeeFormType } from "./schema";

function EmployeeAddressForm({
  control,
}: {
  control: Control<EmployeeFormType>;
}) {
  return (
    <>
      <div className="bg-grayscale-surface-white grid grid-cols-1 gap-4 p-6 shadow-sm">
        <span className="text-grayscale-text-title text-lg font-semibold">
          Address Information
        </span>
        <div className="grid grid-cols-2 gap-2.5">
          <FormField
            control={control}
            name="address.street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="border-secondary-border focus-visible:ring-0"
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
            name="address.state"
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
            name="address.city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="border-secondary-border focus-visible:ring-0"
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
            name="address.postalCode"
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
            name="address.country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="border-secondary-border focus-visible:ring-0"
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

export default EmployeeAddressForm;
