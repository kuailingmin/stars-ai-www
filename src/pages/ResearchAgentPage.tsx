import {
  Bot,
  Workflow,
  Bell,
  Pen,
  FileText,
  Brain,
  Sparkles,
  ChevronRight,
  RefreshCw,
  Clock,
  LayoutList,
  Rss,
  Filter,
  UserCheck,
  Users,
  PenTool,
  BookOpen,
  CheckCircle,
  Search,
  Eye,
  Zap,
  Settings,
  ArrowRight,
  GitBranch,
  Layers,
  Target,
} from "lucide-react"
import { ScrollReveal, StaggeredList, GradientText, BlurText } from "@/components/reactbits"

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const agentCards = [
  {
    icon: Workflow,
    name: "批量总结智能体",
    desc: "自动批量提取论文摘要、生成思维导图，将零散文献转化为结构化知识卡片",
    color: "from-violet-500/20 to-violet-500/5",
    borderColor: "border-violet-500/25",
    iconColor: "text-violet-400",
    tag: "效率提升",
  },
  {
    icon: Clock,
    name: "周报生成智能体",
    desc: "自动汇总个人本周科研进展、阅读笔记与对话记录，一键生成结构化周报",
    color: "from-fuchsia-500/20 to-fuchsia-500/5",
    borderColor: "border-fuchsia-500/25",
    iconColor: "text-fuchsia-400",
    tag: "自动化",
  },
  {
    icon: Rss,
    name: "知识订阅智能体",
    desc: "持续追踪关注领域最新论文与研究动态，每日定时推送高相关度内容",
    color: "from-violet-500/20 to-violet-500/5",
    borderColor: "border-violet-500/25",
    iconColor: "text-violet-400",
    tag: "智能推送",
  },
  {
    icon: Filter,
    name: "政策采集智能体",
    desc: "RPA 智能抓取行业政策、基金申报、学术会议等信息，自动分类归档",
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "border-amber-500/25",
    iconColor: "text-amber-400",
    tag: "RPA 采集",
  },
  {
    icon: Pen,
    name: "协同写作智能体",
    desc: "从素材采集到框架构建、正文撰写、审稿修改，全流程 AI 协作完成论文写作",
    color: "from-purple-500/20 to-purple-500/5",
    borderColor: "border-purple-500/25",
    iconColor: "text-purple-400",
    tag: "协同写作",
  },
  {
    icon: UserCheck,
    name: "知识匹配智能体",
    desc: "基于研究方向与阅读历史，智能匹配并推荐最相关的文献、数据与合作者",
    color: "from-rose-500/20 to-rose-500/5",
    borderColor: "border-rose-500/25",
    iconColor: "text-rose-400",
    tag: "知识找人",
  },
]

const summaryFeatures = [
  {
    icon: FileText,
    iconColor: "text-violet-400",
    title: "论文批量摘要",
    desc: "上传多篇论文后，AI 自动提取每篇核心观点、研究方法与关键结论，生成结构化摘要卡片。",
  },
  {
    icon: Brain,
    iconColor: "text-blue-400",
    title: "思维导图生成",
    desc: "基于论文内容自动构建思维导图，梳理研究脉络与知识关联，一键导出。",
  },
  {
    icon: LayoutList,
    iconColor: "text-emerald-400",
    title: "周报自动整理",
    desc: "汇总本周阅读记录、对话历史与笔记内容，自动生成格式统一的科研周报。",
  },
  {
    icon: RefreshCw,
    iconColor: "text-amber-400",
    title: "增量更新",
    desc: "新增文献自动纳入分析，周报持续更新累积，科研进展连续追踪不断档。",
  },
]

const subscriptionFeatures = [
  {
    icon: Rss,
    iconColor: "text-violet-400",
    title: "领域前沿推送",
    desc: "设定关注的研究方向与关键词，系统每日自动检索并推送最新高相关论文。",
  },
  {
    icon: Filter,
    iconColor: "text-blue-400",
    title: "RPA 智能采集",
    desc: "自动抓取政策通知、基金申报、学术会议等信息，智能筛选过滤噪音。",
  },
  {
    icon: UserCheck,
    iconColor: "text-emerald-400",
    title: "知识找人",
    desc: "基于个人研究画像与阅读偏好，将最匹配的知识主动推送给最需要的人。",
  },
  {
    icon: Bell,
    iconColor: "text-amber-400",
    title: "多渠道通知",
    desc: "支持站内消息、邮件、企业微信等多渠道订阅通知，重要动态不遗漏。",
  },
]

const writingSteps = [
  {
    icon: Search,
    title: "素材采集",
    desc: "AI 从知识库中检索相关文献与数据，自动整理为写作素材库",
    color: "text-violet-400",
    dotColor: "bg-violet-400",
    bgColor: "from-violet-500/15 to-transparent",
  },
  {
    icon: GitBranch,
    title: "框架构建",
    desc: "基于研究主题与素材，智能生成论文大纲与章节框架",
    color: "text-violet-400",
    dotColor: "bg-violet-400",
    bgColor: "from-violet-500/15 to-transparent",
  },
  {
    icon: PenTool,
    title: "正文撰写",
    desc: "多个 Agent 分工协作，分章节并行生成初稿内容",
    color: "text-purple-400",
    dotColor: "bg-purple-400",
    bgColor: "from-purple-500/15 to-transparent",
  },
  {
    icon: Eye,
    title: "审稿修改",
    desc: "AI 审稿 Agent 检查逻辑连贯性、引用规范性，并给出修改建议",
    color: "text-amber-400",
    dotColor: "bg-amber-400",
    bgColor: "from-amber-500/15 to-transparent",
  },
]

const advantages = [
  {
    icon: Zap,
    iconColor: "text-violet-400",
    title: "全自动执行",
    desc: "设定一次，持续运行。智能体 7×24 小时不间断工作，释放科研人员精力",
    gradient: "from-violet-500/15 to-transparent",
  },
  {
    icon: Target,
    iconColor: "text-blue-400",
    title: "精准个性化",
    desc: "基于个人研究方向与历史行为智能调优，推送与产出内容高度匹配个人需求",
    gradient: "from-violet-500/15 to-transparent",
  },
  {
    icon: Layers,
    iconColor: "text-emerald-400",
    title: "多体协同",
    desc: "多个智能体之间自动协调分工，复杂任务拆解为子任务并行执行，效率倍增",
    gradient: "from-purple-500/15 to-transparent",
  },
  {
    icon: Settings,
    iconColor: "text-amber-400",
    title: "灵活可配置",
    desc: "推送频率、摘要风格、写作模板均可自定义，适配不同团队的工作习惯",
    gradient: "from-amber-500/15 to-transparent",
  },
]

const scenarios = [
  {
    icon: BookOpen,
    iconColor: "text-violet-400",
    title: "新生快速入门",
    items: [
      "订阅课题组核心研究方向的最新论文",
      "智能体自动生成阅读摘要与知识卡片",
      "每周自动汇总学习进展，导师一目了然",
    ],
  },
  {
    icon: Users,
    iconColor: "text-blue-400",
    title: "课题组高效管理",
    items: [
      "成员周报自动生成，组会前快速浏览",
      "政策与基金信息自动采集并分发给相关成员",
      "知识库内容持续积累，人员更替无断层",
    ],
  },
  {
    icon: Pen,
    iconColor: "text-emerald-400",
    title: "论文高效产出",
    items: [
      "素材采集、框架搭建到初稿生成一站完成",
      "多智能体协同审稿，逻辑与引用双重校验",
      "修改意见一键应用，迭代效率大幅提升",
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(263 83% 59% / 0.1) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(280 80% 68% / 0.08) 0%, transparent 70%)' }} />

      <ScrollReveal>
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-primary/30 bg-accent-primary/5 text-sm text-accent-primary mb-6">
            <Bot className="w-4 h-4" />
            <span>科研智能体</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            科研智能体矩阵，
            <GradientText>让 AI 替你工作</GradientText>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            <BlurText text="批量总结、知识订阅、协同写作 —— 一组专业智能体 7×24 小时自动运行，将重复性科研工作交给 AI，让你专注于真正的创新思考。" duration={900} />
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Agent Matrix Overview                                              */
/* ------------------------------------------------------------------ */

function AgentMatrixSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full pointer-events-none -translate-y-1/2" style={{ background: 'radial-gradient(circle, hsl(280 80% 68% / 0.08) 0%, transparent 70%)' }} />

      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              六大<span className="text-gradient">专业智能体</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              每个智能体专注于一个细分场景，自动化完成科研工作流中的关键任务
            </p>
          </div>
        </ScrollReveal>

        <StaggeredList stagger={80} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {agentCards.map((agent) => (
            <div
              key={agent.name}
              className={`group rounded-2xl border ${agent.borderColor} bg-gradient-to-br ${agent.color} backdrop-blur-sm p-6 hover:scale-[1.02] transition-all duration-500`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-background/50 flex items-center justify-center">
                  <agent.icon className={`w-5 h-5 ${agent.iconColor}`} />
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full border ${agent.borderColor} ${agent.iconColor} bg-background/30`}>
                  {agent.tag}
                </span>
              </div>
              <h3 className="text-base font-bold mb-2">{agent.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{agent.desc}</p>
            </div>
          ))}
        </StaggeredList>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Batch Summary & Weekly Report                                      */
/* ------------------------------------------------------------------ */

function SummarySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(263 83% 59% / 0.08) 0%, transparent 70%)' }} />

      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">批量总结</span>与周报生成
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              论文批量摘要、思维导图生成、科研周报自动整理，让信息处理效率提升 10 倍
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left: Feature cards */}
          <StaggeredList stagger={100} className="space-y-4">
            {summaryFeatures.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-4 p-4 rounded-xl border border-accent-border/20 bg-card/30 backdrop-blur-sm hover:border-accent-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <f.icon className={`w-5 h-5 ${f.iconColor}`} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{f.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </StaggeredList>

          {/* Right: Mock weekly report card */}
          <ScrollReveal delay={200}>
            <div className="rounded-2xl border border-accent-border/30 bg-card/30 backdrop-blur-sm overflow-hidden h-full">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-accent-border/20 bg-card/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                  <div className="w-3 h-3 rounded-full bg-violet-500/60" />
                </div>
                <span className="text-sm font-medium text-muted-foreground ml-2">科研周报</span>
                <span className="ml-auto text-[10px] px-2 py-0.5 rounded border border-accent-glow/30 bg-accent-glow/10 text-accent-glow">
                  自动生成
                </span>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-violet-400" />
                    <span className="text-sm font-semibold">本周阅读</span>
                    <span className="text-xs text-muted-foreground ml-auto">12 篇论文</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      "AlphaFold3: 蛋白质-配体复合物结构预测新突破",
                      "大语言模型在药物发现中的应用综述",
                      "基于图神经网络的分子性质预测方法",
                    ].map((title) => (
                      <div key={title} className="flex items-center gap-2 text-xs text-muted-foreground p-2 rounded-lg bg-background/30 border border-accent-border/10">
                        <FileText className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                        <span className="truncate">{title}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-accent-border/30 to-transparent" />
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-violet-400" />
                    <span className="text-sm font-semibold">关键进展</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {[
                      "完成 Transformer 蛋白质预测方法文献综述初稿",
                      "整理 CASP15 数据集实验基准测试结果",
                      "与导师讨论注意力机制改进方案",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-violet-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-accent-border/30 to-transparent" />
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-sm font-semibold">下周计划</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>启动改进注意力机制的 Phase 2 实验</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>撰写方法论章节初稿</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Knowledge Subscription & Collection                                */
/* ------------------------------------------------------------------ */

function SubscriptionSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(160 80% 45% / 0.08) 0%, transparent 70%)' }} />

      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              知识<span className="text-gradient">订阅与采集</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              领域前沿自动推送、政策动态 RPA 智能采集，让知识主动找人
            </p>
          </div>
        </ScrollReveal>

        <StaggeredList stagger={100} className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {subscriptionFeatures.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-accent-border/20 bg-card/30 backdrop-blur-sm p-6 hover:border-accent-primary/30 transition-all duration-500"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <f.icon className={`w-6 h-6 ${f.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </StaggeredList>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Multi-Agent Collaborative Writing                                  */
/* ------------------------------------------------------------------ */

function WritingSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(270 70% 72% / 0.06) 0%, transparent 70%)' }} />

      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              多智能体<span className="text-gradient">协同写作</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              素材采集 → 框架构建 → 正文撰写 → 审稿修改，全流程 AI 协作
            </p>
          </div>
        </ScrollReveal>

        {/* Pipeline Steps */}
        <ScrollReveal delay={100}>
          <div className="max-w-4xl mx-auto">
            <StaggeredList stagger={120} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {writingSteps.map((step, i) => (
                <div key={step.title} className="relative">
                  <div className="group rounded-2xl border border-accent-border/20 bg-card/30 backdrop-blur-sm p-5 h-full hover:border-accent-primary/30 transition-all duration-500">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative">
                      {/* Step number */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step.dotColor}/20 ${step.color}`}>
                          {i + 1}
                        </div>
                        <div className="w-9 h-9 rounded-lg bg-background/50 flex items-center justify-center">
                          <step.icon className={`w-4.5 h-4.5 ${step.color}`} />
                        </div>
                      </div>
                      <h4 className="font-bold text-sm mb-1.5">{step.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  {/* Connector arrow (not on last item) */}
                  {i < writingSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                      <ChevronRight className="w-5 h-5 text-accent-border/50" />
                    </div>
                  )}
                </div>
              ))}
            </StaggeredList>
          </div>
        </ScrollReveal>

        {/* Writing demo card */}
        <ScrollReveal delay={300}>
          <div className="max-w-4xl mx-auto mt-10">
            <div className="rounded-2xl border border-accent-border/30 bg-card/30 backdrop-blur-sm overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-accent-border/20 bg-card/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                  <div className="w-3 h-3 rounded-full bg-violet-500/60" />
                </div>
                <span className="text-sm font-medium text-muted-foreground ml-2">协同写作工作台</span>
                <span className="ml-auto text-[10px] px-2 py-0.5 rounded border border-purple-500/30 bg-purple-500/10 text-purple-400">
                  4 个 Agent 协同
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-accent-glow" />
                  <span className="text-sm font-medium">论文主题：Transformer 在蛋白质结构预测中的应用</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { agent: "素材采集 Agent", status: "已完成", color: "text-violet-400", borderColor: "border-violet-500/30", bgColor: "bg-violet-500/5", detail: "已检索 47 篇文献，提取 128 条关键论据" },
                    { agent: "框架构建 Agent", status: "已完成", color: "text-violet-400", borderColor: "border-violet-500/30", bgColor: "bg-violet-500/5", detail: "已生成 5 章论文大纲，含 18 个小节" },
                    { agent: "正文撰写 Agent", status: "撰写中", color: "text-purple-400", borderColor: "border-purple-500/30", bgColor: "bg-purple-500/5", detail: "第 3 章「方法论」撰写中，进度 67%" },
                    { agent: "审稿修改 Agent", status: "等待中", color: "text-amber-400", borderColor: "border-amber-500/30", bgColor: "bg-amber-500/5", detail: "前 2 章已审稿完成，发现 3 处建议修改" },
                  ].map((item) => (
                    <div key={item.agent} className={`rounded-xl border-l-4 ${item.borderColor} ${item.bgColor} border border-accent-border/10 p-3`}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-xs font-semibold ${item.color}`}>{item.agent}</span>
                        <span className="text-[10px] text-muted-foreground/60 px-1.5 py-0.5 rounded border border-accent-border/20">
                          {item.status}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Advantages                                                         */
/* ------------------------------------------------------------------ */

function AdvantagesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(280 80% 68% / 0.08) 0%, transparent 70%)' }} />

      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              为什么选择<span className="text-gradient">智能体矩阵</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              不是简单的 AI 工具，而是一组懂科研的数字同事
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-accent-border/30 bg-card/30 backdrop-blur-sm p-8">
              <div className="flex items-center justify-center mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-border/50 to-transparent" />
                <span className="px-4 text-xs text-muted-foreground flex items-center gap-1.5">
                  <Bot className="w-3 h-3 text-accent-primary" />
                  核心优势
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-border/50 to-transparent" />
              </div>

              <StaggeredList stagger={80} className="grid sm:grid-cols-2 gap-4">
                {advantages.map((f) => (
                  <div
                    key={f.title}
                    className="group relative flex items-start gap-3 p-4 rounded-xl border border-accent-border/20 bg-background/30 hover:border-accent-primary/30 transition-all duration-300"
                  >
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative w-9 h-9 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <f.icon className={`w-4.5 h-4.5 ${f.iconColor}`} />
                    </div>
                    <div className="relative">
                      <h4 className="font-semibold text-sm mb-1">{f.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </StaggeredList>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Scenarios Section                                                  */
/* ------------------------------------------------------------------ */

function ScenariosSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(40 100% 50% / 0.08) 0%, transparent 70%)' }} />

      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              应用<span className="text-gradient">场景</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              从个人科研助手到团队协作引擎，智能体覆盖科研全链路
            </p>
          </div>
        </ScrollReveal>

        <StaggeredList stagger={120} className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {scenarios.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-accent-border/20 bg-card/30 backdrop-blur-sm p-6 hover:border-accent-primary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-4">
                <s.icon className={`w-6 h-6 ${s.iconColor}`} />
              </div>
              <h3 className="text-lg font-bold mb-4">{s.title}</h3>
              <ul className="space-y-3">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </StaggeredList>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  CTA Section                                                        */
/* ------------------------------------------------------------------ */

function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container">
        <ScrollReveal scale>
          <div className="relative rounded-2xl border border-accent-border/30 bg-gradient-to-br from-accent-primary/10 via-card/50 to-accent-secondary/10 backdrop-blur-sm p-12 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(263 83% 59% / 0.1) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(280 80% 68% / 0.1) 0%, transparent 70%)' }} />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                让智能体成为你的科研搭档
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                把重复性工作交给 AI，把创造性思考留给自己。
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export function ResearchAgentPage() {
  return (
    <>
      <HeroSection />
      <AgentMatrixSection />
      <SummarySection />
      <SubscriptionSection />
      <WritingSection />
      <AdvantagesSection />
      <ScenariosSection />
      <CTASection />
    </>
  )
}
