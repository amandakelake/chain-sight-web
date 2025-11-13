export function GET() {
  const now = new Date();
  const nodeEnv = process.env.NODE_ENV as string | undefined;

  return Response.json({
    message: "ChainSight DevOps sanity check ready.",
    timestamp: now.toISOString(),
    environment: process.env.VERCEL_ENV ?? nodeEnv ?? "development",
    commit: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? null,
    uptimeSeconds: Math.round(process.uptime()),
  });
}
