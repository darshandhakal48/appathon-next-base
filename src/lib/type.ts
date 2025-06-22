import { Icons } from "@/components/ui/icons";

export type SidebarLinkItem = {
  label: string;
  icon: keyof typeof Icons;
  href: string;
};
