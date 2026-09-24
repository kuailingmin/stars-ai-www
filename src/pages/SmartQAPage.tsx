import {
  MessageSquareText,
  MessageSquare,
  Brain,
  Database,
  MessageCircle,
  Quote,
  BookOpen,
  BarChart3,
  Lightbulb,
  FlaskConical,
  PenTool,
  Search,
  Microscope,
  Globe,
  ShieldCheck,
  Layers,
  Scale,
  Network,
  Sparkles,
  ChevronRight,
  User,
  Bot,
} from "lucide-react"
import { ScrollReveal, StaggeredList, GradientText, BlurText } from "@/components/reactbits"

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const singleAgentFeatures = [
  {
    icon: Brain,
    title: "上下文感知对话",
    desc: "AI 自动理解对话历史与研究背景，每一轮回答都基于完整上下文，无需重复说明。",
    gradient: "from-violet-500/15 to-transparent",
    iconColor: "text-violet-400",
  },
  {
    icon: Database,
    title: "知识库深度关联",
    desc: "对话自动关联个人与课题组知识库，回答基于真实文献数据，杜绝 AI 幻觉。",
    gradient: "from-violet-500/15 to-transparent",
    iconColor: "text-blue-400",
  },
  {
    icon: MessageCircle,
    title: "多轮深度追问",
    desc: "支持连续追问与话题深入，AI 保持对话连贯性，像与真正的科研伙伴交流。",
    gradient: "from-purple-500/15 to-transparent",
    iconColor: "text-emerald-400",
  },
  {
    icon: Quote,
    title: "引用溯源追踪",
    desc: "每条回答标注引用来源，点击即可跳转原文，确保信息可信可验证。",
    gradient: "from-amber-500/15 to-transparent",
    iconColor: "text-amber-400",
  },
]

const agents = [
  {
    icon: BookOpen,
    name: "文献综述 Agent",
    role: "检索并综合相关文献",
    color: "from-violet-500/20 to-violet-500/5",
    borderColor: "border-violet-500/25",
    iconColor: "text-violet-400",
    dotColor: "bg-violet-400",
  },
  {
    icon: BarChart3,
    name: "数据分析 Agent",
    role: "统计分析与数据解读",
    color: "from-violet-500/20 to-violet-500/5",
    borderColor: "border-violet-500/25",
    iconColor: "text-violet-400",
    dotColor: "bg-violet-400",
  },
  {
    icon: Lightbulb,
    name: "方法论 Agent",
    role: "研究方法评估与建议",
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "border-amber-500/25",
    iconColor: "text-amber-400",
    dotColor: "bg-amber-400",
  },
  {
    icon: FlaskConical,
    name: "实验设计 Agent",
    role: "实验方案设计与优化",
    color: "from-purple-500/20 to-purple-500/5",
    borderColor: "border-purple-500/25",
    iconColor: "text-purple-400",
    dotColor: "bg-purple-400",
  },
  {
    icon: PenTool,
    name: "学术写作 Agent",
    role: "论文结构与表达优化",
    color: "from-rose-500/20 to-rose-500/5",
    borderColor: "border-rose-500/25",
    iconColor: "text-rose-400",
    dotColor: "bg-rose-400",
  },
]

const mockResponses = [
  {
    agent: "文献综述 Agent",
    icon: BookOpen,
    iconColor: "text-violet-400",
    borderColor: "border-violet-500/30",
    bgColor: "bg-violet-500/5",
    summary:
      "已检索到 47 篇高相关论文。AlphaFold2 (2021) 首次将 Transformer 引入蛋白质结构预测，CASP14 精度达实验水平。后续 ESMFold、RoseTTAFold 进一步优化了推理效率与泛化能力。",
  },
  {
    agent: "数据分析 Agent",
    icon: BarChart3,
    iconColor: "text-violet-400",
    borderColor: "border-violet-500/30",
    bgColor: "bg-violet-500/5",
    summary:
      "基于 47 篇论文的计量分析：年均发文增长率 340%，Top 期刊占比 62%。预测精度 GDT-TS 从 2019 年的 58.9 提升至 2024 年的 92.4，性能提升显著。",
  },
  {
    agent: "方法论 Agent",
    icon: Lightbulb,
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/30",
    bgColor: "bg-amber-500/5",
    summary:
      "Transformer 的自注意力机制天然适配氨基酸残基间的长程依赖关系建模。核心优势：并行计算效率高、多头注意力捕获多尺度特征。局限：对训练数据规模要求较高。",
  },
  {
    agent: "实验设计 Agent",
    icon: FlaskConical,
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/5",
    summary:
      "建议实验方案：Phase 1 — 基准复现（AlphaFold2 在 CASP15 数据集）；Phase 2 — 改进注意力机制（引入结构先验）；Phase 3 — 跨物种泛化验证。",
  },
  {
    agent: "学术写作 Agent",
    icon: PenTool,
    iconColor: "text-rose-400",
    borderColor: "border-rose-500/30",
    bgColor: "bg-rose-500/5",
    summary:
      "建议论文框架：以「Transformer 架构演进」为主线，设 5 章结构。创新点突出长程依赖建模机制对比与跨物种泛化性能分析，预计可投 Nature Methods。",
  },
]

const collaborationValues = [
  {
    icon: Search,
    title: "多视角分析",
    desc: "同一问题由不同领域专家 Agent 分别分析，避免单一视角盲区，获得全面认知",
    gradient: "from-violet-500/15 to-transparent",
    iconColor: "text-violet-400",
  },
  {
    icon: ShieldCheck,
    title: "交叉验证",
    desc: "各 Agent 的分析结果相互印证，自动发现数据矛盾与逻辑冲突，提升结论可信度",
    gradient: "from-violet-500/15 to-transparent",
    iconColor: "text-blue-400",
  },
  {
    icon: Layers,
    title: "全面覆盖",
    desc: "从文献、数据、方法、实验到写作，一次提问覆盖科研全链条，不遗漏任何环节",
    gradient: "from-purple-500/15 to-transparent",
    iconColor: "text-emerald-400",
  },
  {
    icon: Scale,
    title: "冲突调解",
    desc: "当不同 Agent 观点存在分歧时，系统自动标注争议点并给出综合建议，辅助决策",
    gradient: "from-amber-500/15 to-transparent",
    iconColor: "text-amber-400",
  },
]

const scenarios = [
  {
    icon: Search,
    title: "快速文献问答",
    mode: "单智能体",
    modeColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    iconColor: "text-violet-400",
    items: [
      "针对已上传论文发起精准提问",
      "AI 基于原文内容回答并标注引用",
      "支持多轮追问深入理解细节",
    ],
  },
  {
    icon: Microscope,
    title: "综合研究规划",
    mode: "多智能体",
    modeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    iconColor: "text-blue-400",
    items: [
      "提出研究方向，多 Agent 协同分析",
      "获得文献、方法、数据、实验全维度建议",
      "自动生成研究计划与论文框架",
    ],
  },
  {
    icon: Globe,
    title: "跨学科探索",
    mode: "多智能体",
    modeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    iconColor: "text-emerald-400",
    items: [
      "提出跨领域研究问题",
      "不同学科背景的 Agent 各抒己见",
      "发现交叉领域创新点与合作机会",
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

      <ScrollReveal className="container text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-primary/30 bg-accent-primary/5 text-sm text-accent-primary mb-6">
          <MessageSquareText className="w-4 h-4" />
          <span>智能问答</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          AI 驱动的
          <GradientText>科研智能对话</GradientText>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          <BlurText text="支持单智能体精准问答与多智能体协同分析（A2A），让每一个科研问题都获得多维度、可溯源的深度回答。" duration={900} />
        </p>
      </ScrollReveal>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Modes Overview                                                     */
/* ------------------------------------------------------------------ */

function ModesOverviewSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full pointer-events-none -translate-y-1/2" style={{ background: 'radial-gradient(circle, hsl(280 80% 68% / 0.08) 0%, transparent 70%)' }} />

      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            两种对话模式，<span className="text-gradient">满足不同场景</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            从精准单轮问答到多专家协同深度分析，灵活选择最适合的交互方式
          </p>
        </ScrollReveal>

        <StaggeredList stagger={100} className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Single Agent */}
          <div className="rounded-2xl border border-accent-border/30 bg-card/50 backdrop-blur-sm p-8 h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 border border-violet-500/20 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold">单智能体对话</h3>
                <p className="text-sm text-muted-foreground">一对一精准对话</p>
              </div>
            </div>

            <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs border border-violet-500/20 bg-violet-500/10 text-violet-400 mb-5">
              经典模式
            </span>

            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              与单个 AI 助手进行深度对话，基于知识库内容精准回答，支持多轮追问与溯源引用。
            </p>

            {/* Flow diagram */}
            <div className="flex items-center justify-center gap-3 py-6 px-4 rounded-xl border border-accent-border/20 bg-background/30 mb-6">
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full bg-blue-500/15 border border-blue-500/25 flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-[10px] text-muted-foreground">用户</span>
              </div>
              <div className="flex-1 max-w-[60px] h-px bg-gradient-to-r from-blue-400/40 to-violet-400/40 relative">
                <ChevronRight className="w-3 h-3 text-violet-400 absolute -right-1.5 top-1/2 -translate-y-1/2" />
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-violet-400" />
                </div>
                <span className="text-[10px] text-muted-foreground">AI 助手</span>
              </div>
              <div className="flex-1 max-w-[60px] h-px bg-gradient-to-r from-violet-400/40 to-emerald-400/40 relative">
                <ChevronRight className="w-3 h-3 text-emerald-400 absolute -right-1.5 top-1/2 -translate-y-1/2" />
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-[10px] text-muted-foreground">精准回答</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["上下文感知", "知识库关联", "引用溯源"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs border border-violet-500/20 bg-violet-500/10 text-violet-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Multi Agent */}
          <div className="rounded-2xl border border-accent-border/30 bg-card/50 backdrop-blur-sm p-8 h-full relative overflow-hidden">
            {/* subtle glow for emphasis */}
            <div className="absolute -top-20 -right-20 w-[200px] h-[200px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(280 80% 68% / 0.1) 0%, transparent 70%)' }} />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20 flex items-center justify-center">
                  <Network className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">多智能体对话 (A2A)</h3>
                  <p className="text-sm text-muted-foreground">多专家协同分析</p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs border border-purple-500/20 bg-purple-500/10 text-purple-400 mb-5">
                <Sparkles className="w-3 h-3" />
                旗舰模式
              </span>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                多个领域专家 Agent 协同工作，从不同业务场景出发，各自返回专业分析结果与观点。
              </p>

              {/* Flow diagram */}
              <div className="flex items-center justify-center gap-2 py-6 px-4 rounded-xl border border-accent-border/20 bg-background/30 mb-6">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-10 h-10 rounded-full bg-accent-primary/15 border border-accent-primary/25 flex items-center justify-center">
                    <User className="w-5 h-5 text-accent-primary" />
                  </div>
                  <span className="text-[10px] text-muted-foreground">用户</span>
                </div>
                <div className="flex-1 max-w-[40px] h-px bg-gradient-to-r from-accent-primary/40 to-purple-400/40 relative">
                  <ChevronRight className="w-3 h-3 text-purple-400 absolute -right-1.5 top-1/2 -translate-y-1/2" />
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-10 h-10 rounded-full bg-purple-500/15 border border-purple-500/25 flex items-center justify-center">
                    <Network className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-[10px] text-muted-foreground">调度中心</span>
                </div>
                <div className="flex-1 max-w-[30px] h-px bg-gradient-to-r from-purple-400/40 to-transparent" />
                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-1.5">
                    {[
                      { color: "bg-violet-400" },
                      { color: "bg-violet-400" },
                      { color: "bg-amber-400" },
                      { color: "bg-purple-400" },
                      { color: "bg-rose-400" },
                    ].map((dot, i) => (
                      <div
                        key={i}
                        className={`w-7 h-7 rounded-full ${dot.color}/20 border border-current/20 flex items-center justify-center`}
                      >
                        <div className={`w-2.5 h-2.5 rounded-full ${dot.color}`} />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] text-muted-foreground">专家 Agents</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["多视角分析", "专家协同", "交叉验证"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs border border-purple-500/20 bg-purple-500/10 text-purple-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </StaggeredList>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Single Agent Section                                               */
/* ------------------------------------------------------------------ */

function SingleAgentSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(263 83% 59% / 0.08) 0%, transparent 70%)' }} />

      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            单智能体对话，<span className="text-gradient">精准深度</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            一对一对话模式，基于知识库内容提供精准、可溯源的研究解答
          </p>
        </ScrollReveal>

        <StaggeredList stagger={100} className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {singleAgentFeatures.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-accent-border/20 bg-card/30 backdrop-blur-sm p-6 hover:border-accent-primary/30 transition-all duration-500"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
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
/*  Multi Agent Section (Visual Centerpiece)                           */
/* ------------------------------------------------------------------ */

function MultiAgentSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(270 70% 72% / 0.06) 0%, transparent 70%)' }} />

      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            多智能体协同对话 <span className="text-gradient">A2A</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            多个领域专家 Agent 针对同一问题协同工作，各自从专业视角输出分析结果与建议
          </p>
        </ScrollReveal>

        {/* Agent Roster */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${agent.borderColor} bg-gradient-to-r ${agent.color} transition-all duration-300 hover:scale-[1.03]`}
              >
                <div className="w-9 h-9 rounded-lg bg-background/50 flex items-center justify-center">
                  <agent.icon className={`w-4.5 h-4.5 ${agent.iconColor}`} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{agent.name}</h4>
                  <p className="text-xs text-muted-foreground">{agent.role}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Mock Conversation UI */}
        <ScrollReveal delay={200} className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-accent-border/30 bg-card/30 backdrop-blur-sm overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-accent-border/20 bg-card/50">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                  <div className="w-3 h-3 rounded-full bg-violet-500/60" />
                </div>
                <span className="text-sm font-medium text-muted-foreground ml-2">多智能体对话</span>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium border border-accent-glow/30 bg-accent-glow/10 text-accent-glow">
                A2A
              </span>
            </div>

            {/* Chat area */}
            <div className="p-6 space-y-4">
              {/* User message */}
              <div className="ml-auto max-w-[85%] sm:max-w-[75%]">
                <div className="rounded-2xl rounded-tr-md bg-accent-primary/15 border border-accent-primary/25 p-4">
                  <p className="text-sm leading-relaxed">
                    请分析 Transformer 架构在蛋白质结构预测中的应用前景，包括当前研究进展、方法论优势与局限性。
                  </p>
                </div>
              </div>

              {/* System message */}
              <div className="text-center py-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Sparkles className="w-3 h-3 text-accent-glow" />
                  已激活 5 个专业 Agent，正在协同分析...
                </span>
              </div>

              {/* Agent responses */}
              {mockResponses.map((resp) => (
                <div key={resp.agent}>
                  <div className={`rounded-xl border-l-4 ${resp.borderColor} ${resp.bgColor} border border-accent-border/10 p-4`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <resp.icon className={`w-4 h-4 ${resp.iconColor}`} />
                        <span className="text-sm font-semibold">{resp.agent}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {resp.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Agent Collaboration Section                                        */
/* ------------------------------------------------------------------ */

function AgentCollaborationSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(280 80% 68% / 0.08) 0%, transparent 70%)' }} />

      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">协同</span>的力量
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            多个专业 Agent 协同工作，产生远超单一模型的综合分析能力
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100} className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-accent-border/30 bg-card/30 backdrop-blur-sm p-8">
            {/* Connector */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-border/50 to-transparent" />
              <span className="px-4 text-xs text-muted-foreground flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-accent-primary" />
                协同效应
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-border/50 to-transparent" />
            </div>

            <StaggeredList stagger={80} className="grid sm:grid-cols-2 gap-4">
              {collaborationValues.map((f) => (
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
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            应用<span className="text-gradient">场景</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            从日常问答到跨学科探索，选择最适合的对话模式
          </p>
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
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <span className={`inline-flex px-2 py-0.5 rounded-full text-xs border ${s.modeColor} mb-4`}>
                {s.mode}
              </span>
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
        <ScrollReveal>
          <div className="relative rounded-2xl border border-accent-border/30 bg-gradient-to-br from-accent-primary/10 via-card/50 to-accent-secondary/10 backdrop-blur-sm p-12 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(263 83% 59% / 0.1) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(280 80% 68% / 0.1) 0%, transparent 70%)' }} />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                体验智能科研对话
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                从单智能体精准问答到多智能体协同分析，重新定义科研交互方式。
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

export function SmartQAPage() {
  return (
    <>
      <HeroSection />
      <ModesOverviewSection />
      <SingleAgentSection />
      <MultiAgentSection />
      <AgentCollaborationSection />
      <ScenariosSection />
      <CTASection />
    </>
  )
}
