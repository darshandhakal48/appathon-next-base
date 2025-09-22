import { useState } from "react";
import { Control, Path } from "react-hook-form";

import { PermissionForPageProps } from "@/lib/type";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { roles } from "../_lib/constant";

interface PermissionTableProps<T extends Record<string, any>> {
  control: Control<T>;
  pageData: PermissionForPageProps[];
}

function PermissionTable<T extends Record<string, any>>({
  control,
  pageData,
}: PermissionTableProps<T>) {
  const [disableCheckbox, setDisableCheckbox] = useState<boolean>(true);

  const handleEditPermission = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDisableCheckbox(false);
  };

  const handleSaveChanges = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setDisableCheckbox(true);
    const form = e.currentTarget.closest("form");
    if (form) {
      form.requestSubmit();
    }
  };

  return (
    <>
      <div className="flex justify-end">
        {disableCheckbox ? (
          <Button
            variant={"outline"}
            className="text-primary-text-label-1"
            type="button"
            onClick={handleEditPermission}
          >
            Edit Permission
          </Button>
        ) : (
          <div className="space-x-2">
            <Button
              variant={"outline"}
              className="text-primary-text-label-1"
              type="button"
              onClick={() => setDisableCheckbox(true)}
            >
              Discard
            </Button>

            <Button variant="default" type="submit" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </div>
        )}
      </div>

      <Table className="mt-5 border-t-2 border-b-2">
        <TableHeader>
          <TableRow>
            <TableHead>Permission</TableHead>
            {roles.map((role) => (
              <TableHead key={role}>{role}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {pageData.map((permission) => (
            <TableRow key={permission.pageId}>
              <TableCell>{permission.pageId}</TableCell>
              {roles.map((role) => {
                return (
                  <TableCell key={role}>
                    <FormField
                      control={control}
                      key={role}
                      name={`${role}.${permission.pageTitle}` as Path<T>}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Checkbox
                              checked={!!field.value}
                              onCheckedChange={field.onChange}
                              disabled={disableCheckbox ? true : false}
                              className={`${
                                field.value
                                  ? "bg-primary-surface-default text-grayscale-surface-white border-none"
                                  : "border-grayscale-text-caption bg-grayscale-surface-white"
                              }`}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default PermissionTable;
