import { Icons } from "@/components/ui/icons";

export type IconName = keyof typeof Icons;

export type SidebarLinkItem = {
  label: string;
  icon: IconName;
  href: string;
};

export type DashboardCard = { label: string; count: number; icon: IconName };
