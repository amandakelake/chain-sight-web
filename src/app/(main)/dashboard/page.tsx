import { BellRing, Brain, Shield, Sparkles } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SETUP_STEPS = [
  {
    title: "1. 定义监控范围",
    description: "选择地址或合约，约定事件类型与链路。",
    detail: "支持批量导入、手动输入，后续接入地址标签库。",
  },
  {
    title: "2. 配置通知 & AI 偏好",
    description: "Webhook/Telegram/Discord 渠道及 AI 风格预设。",
    detail: "将来可为不同订阅指定不同解读模版。",
  },
  {
    title: "3. 验证数据回路",
    description: "使用 Mock 数据回放，校对字段与延迟。",
    detail: "接入端到端健康检查，确保发布可控。",
  },
];

const UPCOMING_MODULES = [
  {
    title: "事件流",
    icon: BellRing,
    copy: "按时间线聚合链上事件，提供跳转至区块浏览器的入口。",
    status: "MVP 构建中",
  },
  {
    title: "AI 洞察",
    icon: Sparkles,
    copy: "为事件拼接 AI 摘要、意图推断与可信度徽章。",
    status: "需求冻结",
  },
  {
    title: "风险雷达",
    icon: Shield,
    copy: "监控异常行为并以热度徽章方式提醒。",
    status: "设计中",
  },
  {
    title: "Agent 工作区",
    icon: Brain,
    copy: "面向研究员的自然语言提问与报告生成入口。",
    status: "探索阶段",
  },
];

const ROADMAP = [
  { phase: "Phase 0", focus: "壳层上线", detail: "清理模板代码，统一导航与状态栏。" },
  { phase: "Phase 1", focus: "订阅工作台", detail: "落地订阅列表、创建流程与空状态引导。" },
  { phase: "Phase 2", focus: "AI 解读", detail: "事件卡片接入 AI 摘要、意图标签与地址标签。" },
  { phase: "Phase 3", focus: "模式洞察", detail: "聪明钱雷达、异常看板与报告中心。" },
];

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <section className="rounded-2xl border bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-inner">
        <div className="flex flex-col gap-4">
          <span className="w-fit rounded-full border border-white/30 px-3 py-1 text-xs tracking-wide text-white/80 uppercase">
            Shell Ready
          </span>
          <div>
            <h1 className="text-2xl font-semibold">ChainSight 前端壳层</h1>
            <p className="mt-2 max-w-3xl text-sm text-white/80">
              布局、导航、状态提示已准备就绪，可随时接入后端的订阅管理、AI
              洞察与通知服务。当前页面展示研发节奏、预留组件与上线清单，确保团队在构建真实业务前就绪。
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
              <p className="text-xs text-white/70">最近更新</p>
              <p className="text-base font-semibold">导航精简、PRD 发布</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
              <p className="text-xs text-white/70">下一个里程碑</p>
              <p className="text-base font-semibold">订阅工作台 MVP</p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        {SETUP_STEPS.map((step) => (
          <Card key={step.title} className="h-full">
            <CardHeader>
              <CardTitle className="text-base">{step.title}</CardTitle>
              <CardDescription>{step.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{step.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>功能模块占位</CardTitle>
          <CardDescription>壳层中的各模块均以占位组件呈现，可逐步替换为真实数据。</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          {UPCOMING_MODULES.map((module) => (
            <div key={module.title} className="rounded-xl border p-4">
              <div className="flex items-center gap-2">
                <module.icon className="text-primary size-5" />
                <div>
                  <p className="font-medium">{module.title}</p>
                  <p className="text-muted-foreground text-xs">{module.status}</p>
                </div>
              </div>
              <p className="text-muted-foreground mt-3 text-sm">{module.copy}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>路线图</CardTitle>
          <CardDescription>与后端 PRD 保持一致的阶段性交付计划。</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          {ROADMAP.map((item) => (
            <div key={item.phase} className="rounded-xl border p-4">
              <p className="text-muted-foreground text-xs">{item.phase}</p>
              <p className="text-lg font-semibold">{item.focus}</p>
              <p className="text-muted-foreground mt-1 text-sm">{item.detail}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
