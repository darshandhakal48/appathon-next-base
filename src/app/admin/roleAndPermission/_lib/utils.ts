import { allPermissionComponent } from "./constant";
import { ActivePagePermissionType } from "./type";

export const filterActiveComponent = (
  activePagePermission: ActivePagePermissionType,
) => {
  const component = allPermissionComponent.find((comp) => {
    return activePagePermission === comp.page;
  });
  return component?.component;
};
