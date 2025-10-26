import { ReactNode } from "react";

import { AppSidebar } from "@/app/(main)/dashboard/_components/sidebar/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const STATUS_BADGES = [
  { label: "监控引擎", value: "API 接入中" },
  { label: "AI 洞察", value: "需求冻结" },
  { label: "通知通道", value: "Webhook 待配置" },
];

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <SidebarProvider defaultOpen>
      <AppSidebar variant="inset" collapsible="icon" />
      <SidebarInset data-content-layout="centered" className="mx-auto max-w-screen-2xl">
        <header className="flex h-12 shrink-0 items-center border-b px-4 lg:px-6">
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mx-2 hidden h-4 sm:inline-flex" />
              <div className="flex flex-col text-xs leading-tight sm:flex-row sm:items-center sm:text-sm">
                <span className="text-foreground font-semibold">ChainSight Shell</span>
                <span className="text-muted-foreground sm:ml-2">准备接入链上事件、AI 解读与通知通道</span>
              </div>
            </div>
            <div className="text-muted-foreground grid gap-2 text-xs sm:auto-cols-max sm:grid-flow-col">
              {STATUS_BADGES.map((item) => (
                <div key={item.label} className="bg-muted/40 flex items-center gap-1 rounded-full border px-3 py-1">
                  <span className="text-foreground font-medium">{item.label}</span>
                  <Separator orientation="vertical" className="h-4" />
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </header>
        <div className="flex h-full flex-col gap-6 p-4 md:p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
