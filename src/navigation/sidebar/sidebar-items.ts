import {
  LayoutDashboard,
  ListChecks,
  BellRing,
  Sparkles,
  Shield,
  ScrollText,
  Activity,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "基础",
    items: [
      {
        title: "总览",
        url: "/dashboard/default",
        icon: LayoutDashboard,
      },
      {
        title: "订阅管理",
        url: "/dashboard/subscriptions",
        icon: ListChecks,
        comingSoon: true,
      },
      {
        title: "事件流",
        url: "/dashboard/streams",
        icon: BellRing,
        comingSoon: true,
      },
    ],
  },
  {
    id: 2,
    label: "AI 洞察",
    items: [
      {
        title: "洞察实验室",
        url: "/dashboard/insights",
        icon: Sparkles,
        comingSoon: true,
      },
      {
        title: "风险雷达",
        url: "/dashboard/risk",
        icon: Shield,
        comingSoon: true,
      },
      {
        title: "报告中心",
        url: "/dashboard/reports",
        icon: ScrollText,
        comingSoon: true,
      },
    ],
  },
  {
    id: 3,
    label: "系统",
    items: [
      {
        title: "事件回放",
        url: "/dashboard/activity",
        icon: Activity,
        comingSoon: true,
      },
      {
        title: "偏好设置",
        url: "/dashboard/preferences",
        icon: SlidersHorizontal,
        comingSoon: true,
      },
    ],
  },
];
