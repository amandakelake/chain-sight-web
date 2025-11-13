import { headers } from "next/headers";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type DevOpsStatus = {
  message: string;
  timestamp: string | null;
  environment: string | null;
  commit: string | null;
  uptimeSeconds: number | null;
  error?: string;
};

const FALLBACK_BASE_URL = "http://localhost:3000";

function resolveBaseUrl(host: string | null) {
  const envBase = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_URL;

  if (envBase) {
    return envBase.startsWith("http") ? envBase : `https://${envBase}`;
  }

  if (host) {
    const protocol = host.includes("localhost") ? "http" : "https";

    return `${protocol}://${host}`;
  }

  return FALLBACK_BASE_URL;
}

async function getDevOpsStatus(): Promise<DevOpsStatus> {
  const headerList = await headers();
  const baseUrl = resolveBaseUrl(headerList.get("host"));

  try {
    const response = await fetch(`${baseUrl}/api/devops-check`, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return (await response.json()) as DevOpsStatus;
  } catch (error) {
    const nodeEnv = process.env.NODE_ENV as string | undefined;

    return {
      message: "DevOps API unreachable",
      timestamp: null,
      environment: process.env.VERCEL_ENV ?? nodeEnv ?? "unknown",
      commit: null,
      uptimeSeconds: null,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function DevOpsStatusCard() {
  const devOpsStatus = await getDevOpsStatus();

  return (
    <Card className="bg-primary/5 border-primary/30 border-dashed">
      <CardHeader>
        <CardTitle>DevOps API 状态</CardTitle>
        <CardDescription>直接请求 /api/devops-check 并展示实时结果。</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-semibold">{devOpsStatus.message}</p>
          {devOpsStatus.error ? (
            <p className="text-destructive mt-2 text-sm">{devOpsStatus.error}</p>
          ) : (
            <p className="text-muted-foreground mt-1 text-sm">最后刷新：{devOpsStatus.timestamp ?? "暂无返回"}</p>
          )}
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-background rounded-lg border p-3">
            <p className="text-muted-foreground text-xs uppercase">Environment</p>
            <p className="font-mono text-sm">{devOpsStatus.environment ?? "unknown"}</p>
          </div>
          <div className="bg-background rounded-lg border p-3">
            <p className="text-muted-foreground text-xs uppercase">Commit</p>
            <p className="font-mono text-sm">{devOpsStatus.commit ?? "—"}</p>
          </div>
          <div className="bg-background rounded-lg border p-3">
            <p className="text-muted-foreground text-xs uppercase">Uptime (s)</p>
            <p className="font-mono text-sm">
              {typeof devOpsStatus.uptimeSeconds === "number" ? devOpsStatus.uptimeSeconds : "—"}
            </p>
          </div>
          <div className="bg-background rounded-lg border p-3">
            <p className="text-muted-foreground text-xs uppercase">Endpoint</p>
            <p className="font-mono text-xs">/api/devops-check</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
