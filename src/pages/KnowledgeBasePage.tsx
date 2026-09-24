import {
  Shield,
  Lock,
  Eye,
  Users,
  FolderOpen,
  FileText,
  FileImage,
  FileSpreadsheet,
  FileCode,
  FileArchive,
  Video,
  Music,
  Database,
  BookOpen,
  Brain,
  Search,
  BarChart3,
  MessageSquare,
  Bookmark,
  Bell,
  StickyNote,
  Inbox,
  FolderPlus,
  Sparkles,
  Layers,
  PenTool,
  ListChecks,
  Microscope,
  GraduationCap,
  ChevronRight,
} from "lucide-react"
import { ScrollReveal, StaggeredList, GradientText, BlurText, TiltCard, Spotlight } from "@/components/reactbits"

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const personalKBs = [
  {
    icon: StickyNote,
    name: "个人总结",
    desc: "记录日常科研心得与思考，构建个人知识体系",
    color: "from-purple-500/20 to-purple-500/5",
    borderColor: "border-purple-500/25",
    iconColor: "text-purple-400",
  },
  {
    icon: Bell,
    name: "知识订阅",
    desc: "自动追踪关注领域的最新研究动态与论文",
    color: "from-violet-500/20 to-violet-500/5",
    borderColor: "border-violet-500/25",
    iconColor: "text-violet-400",
  },
  {
    icon: Bookmark,
    name: "收藏对话",
    desc: "保存有价值的 AI 对话记录，随时回顾查阅",
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "border-amber-500/25",
    iconColor: "text-amber-400",
  },
  {
    icon: PenTool,
    name: "个人笔记",
    desc: "随手记录灵感与读书笔记，支持富文本编辑",
    color: "from-violet-500/20 to-violet-500/5",
    borderColor: "border-violet-500/25",
    iconColor: "text-violet-400",
  },
  {
    icon: Inbox,
    name: "默认知识库",
    desc: "通用文档存储空间，快速上传与管理各类文件",
    color: "from-rose-500/20 to-rose-500/5",
    borderColor: "border-rose-500/25",
    iconColor: "text-rose-400",
  },
]

const fileFormats = [
  { icon: FileText, label: "PDF / Word", desc: "论文、报告、文档", color: "text-violet-400", bg: "bg-violet-500/10", hoverBorder: "hover:border-violet-500/40", hoverBg: "hover:bg-violet-500/5", glow: "bg-violet-500/20" },
  { icon: FileSpreadsheet, label: "Excel / CSV", desc: "数据表格、统计结果", color: "text-violet-400", bg: "bg-violet-500/10", hoverBorder: "hover:border-violet-500/40", hoverBg: "hover:bg-violet-500/5", glow: "bg-violet-500/20" },
  { icon: FileImage, label: "图片", desc: "PNG、JPG、SVG 等", color: "text-purple-400", bg: "bg-purple-500/10", hoverBorder: "hover:border-purple-500/40", hoverBg: "hover:bg-purple-500/5", glow: "bg-purple-500/20" },
  { icon: FileCode, label: "代码文件", desc: "Python、R、Matlab 等", color: "text-amber-400", bg: "bg-amber-500/10", hoverBorder: "hover:border-amber-500/40", hoverBg: "hover:bg-amber-500/5", glow: "bg-amber-500/20" },
  { icon: Video, label: "视频 / 音频", desc: "实验录像、讲座音频", color: "text-rose-400", bg: "bg-rose-500/10", hoverBorder: "hover:border-rose-500/40", hoverBg: "hover:bg-rose-500/5", glow: "bg-rose-500/20" },
  { icon: FileArchive, label: "压缩包", desc: "ZIP、RAR 等批量归档", color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", hoverBorder: "hover:border-fuchsia-500/40", hoverBg: "hover:bg-fuchsia-500/5", glow: "bg-fuchsia-500/20" },
  { icon: Database, label: "数据集", desc: "JSON、XML、Parquet", color: "text-orange-400", bg: "bg-orange-500/10", hoverBorder: "hover:border-orange-500/40", hoverBg: "hover:bg-orange-500/5", glow: "bg-orange-500/20" },
  { icon: Music, label: "Markdown", desc: "笔记、文档、Wiki", color: "text-violet-400", bg: "bg-violet-500/10", hoverBorder: "hover:border-violet-500/40", hoverBg: "hover:bg-violet-500/5", glow: "bg-violet-500/20" },
]

const permissionFeatures = [
  {
    icon: Lock,
    title: "知识库级别隔离",
    desc: "每个知识库独立存储与索引，数据完全隔离，互不干扰",
    iconColor: "text-violet-400",
  },
  {
    icon: Eye,
    title: "精细权限控制",
    desc: "支持「只读」「可编辑」「管理员」三级权限，灵活分配",
    iconColor: "text-blue-400",
  },
  {
    icon: Users,
    title: "成员管理",
    desc: "课题组负责人可管理成员加入与离开，权限实时生效",
    iconColor: "text-emerald-400",
  },
  {
    icon: Shield,
    title: "操作审计日志",
    desc: "所有文档操作均可追溯，谁上传、谁查看、谁删除一目了然",
    iconColor: "text-amber-400",
  },
]

const paperFeatures = [
  {
    icon: Search,
    title: "智能检索",
    desc: "基于语义理解的论文检索，输入自然语言即可精准定位相关论文片段",
    gradient: "from-violet-500/15 to-transparent",
    iconColor: "text-violet-400",
  },
  {
    icon: BookOpen,
    title: "论文阅读",
    desc: "在线查看论文全文，支持高亮标注、笔记添加，建立个人阅读记录",
    gradient: "from-violet-500/15 to-transparent",
    iconColor: "text-blue-400",
  },
  {
    icon: Brain,
    title: "论文分析",
    desc: "AI 自动提取论文关键信息：研究方法、实验设计、创新点与局限性",
    gradient: "from-purple-500/15 to-transparent",
    iconColor: "text-emerald-400",
  },
  {
    icon: ListChecks,
    title: "论文总结",
    desc: "一键生成论文摘要、核心观点提炼、多篇论文对比分析报告",
    gradient: "from-amber-500/15 to-transparent",
    iconColor: "text-amber-400",
  },
  {
    icon: MessageSquare,
    title: "论文问答",
    desc: "针对特定论文发起对话，AI 基于论文内容回答问题，精准可信",
    gradient: "from-rose-500/15 to-transparent",
    iconColor: "text-rose-400",
  },
  {
    icon: BarChart3,
    title: "研究趋势",
    desc: "分析知识库内论文的研究趋势、高频关键词、学术网络关系",
    gradient: "from-fuchsia-500/15 to-transparent",
    iconColor: "text-fuchsia-400",
  },
]

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* decorative */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(263 83% 59% / 0.1) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(280 80% 68% / 0.08) 0%, transparent 70%)' }} />

      <ScrollReveal>
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-primary/30 bg-accent-primary/5 text-sm text-accent-primary mb-6">
            <Database className="w-4 h-4" />
            <span>智能知识库</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            科研知识，
            <GradientText>安全沉淀与智能流转</GradientText>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            <BlurText text="为每个科研者与课题组提供独立、安全、智能的知识管理空间。支持多种文档格式上传，内置论文阅读、分析、总结能力，让知识真正流动起来。" duration={900} />
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Classification Section                                             */
/* ------------------------------------------------------------------ */

function ClassificationSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full pointer-events-none -translate-y-1/2" style={{ background: 'radial-gradient(circle, hsl(280 80% 68% / 0.08) 0%, transparent 70%)' }} />

      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              知识库<span className="text-gradient">分类体系</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              个人知识库与课题组知识库严格隔离，满足不同场景的知识管理需求
            </p>
          </div>
        </ScrollReveal>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Personal KB */}
          <ScrollReveal delay={100}>
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent backdrop-blur-sm p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20 flex items-center justify-center">
                  <FolderOpen className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">个人知识库</h3>
                  <p className="text-sm text-muted-foreground">系统预设 · 专属私密空间</p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                每位科研人员注册后自动获得 5 个固定个人知识库，仅本人可见，
                用于沉淀个人科研经验与知识积累。
              </p>

              <div className="space-y-3">
                {personalKBs.map((kb, i) => (
                  <div
                    key={kb.name}
                    className={`group flex items-center gap-4 p-3 rounded-xl border ${kb.borderColor} bg-gradient-to-r ${kb.color} hover:scale-[1.02] transition-all duration-300`}
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center flex-shrink-0">
                      <kb.icon className={`w-5 h-5 ${kb.iconColor}`} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-sm">{kb.name}</h4>
                      <p className="text-xs text-muted-foreground truncate">{kb.desc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground/50 ml-auto flex-shrink-0 group-hover:text-foreground transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Research Group KB */}
          <ScrollReveal delay={200}>
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent backdrop-blur-sm p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">课题组知识库</h3>
                  <p className="text-sm text-muted-foreground">自定义创建 · 团队协作共享</p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                课题组负责人可根据研究方向自由创建多个知识库，灵活分配成员权限，
                实现团队知识的统一沉淀与高效协作。
              </p>

              {/* Simulated KB cards */}
              <div className="space-y-3 mb-6">
                {[
                  { name: "深度学习论文库", count: 128, members: 12, color: "border-violet-500/25 bg-violet-500/5", iconColor: "text-violet-400" },
                  { name: "自然语言处理资料", count: 86, members: 8, color: "border-fuchsia-500/25 bg-fuchsia-500/5", iconColor: "text-fuchsia-400" },
                  { name: "实验数据与结果", count: 245, members: 15, color: "border-emerald-500/25 bg-emerald-500/5", iconColor: "text-emerald-400" },
                ].map((kb) => (
                  <div
                    key={kb.name}
                    className={`group flex items-center gap-4 p-3 rounded-xl border ${kb.color} hover:scale-[1.02] transition-all duration-300`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center flex-shrink-0">
                      <Layers className={`w-5 h-5 ${kb.iconColor}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-sm">{kb.name}</h4>
                      <p className="text-xs text-muted-foreground">{kb.count} 篇文档 · {kb.members} 位成员</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground/50 flex-shrink-0 group-hover:text-foreground transition-colors" />
                  </div>
                ))}
              </div>

              {/* Create new hint */}
              <div className="flex items-center gap-3 p-3 rounded-xl border border-dashed border-accent-border/40 hover:border-accent-primary/40 transition-colors cursor-default">
                <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                  <FolderPlus className="w-5 h-5 text-accent-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm text-accent-primary">创建新知识库</h4>
                  <p className="text-xs text-muted-foreground">根据研究方向自由创建，数量不限</p>
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
/*  Permission Section                                                 */
/* ------------------------------------------------------------------ */

function PermissionSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(280 80% 68% / 0.08) 0%, transparent 70%)' }} />

      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">数据隔离</span>与权限管控
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              每个知识库独立存储、独立索引、独立权限，确保科研数据安全可控
            </p>
          </div>
        </ScrollReveal>

        {/* Permission architecture diagram */}
        <ScrollReveal delay={100}>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="rounded-2xl border border-accent-border/30 bg-card/30 backdrop-blur-sm p-8">
              {/* Visual hierarchy */}
              <StaggeredList stagger={100} className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { label: "管理员", desc: "创建/删除知识库、管理成员", color: "from-rose-500/20 to-rose-500/5 border-rose-500/25", dot: "bg-rose-400" },
                  { label: "可编辑", desc: "上传/删除文档、编辑分类、发起 AI 分析", color: "from-amber-500/20 to-amber-500/5 border-amber-500/25", dot: "bg-amber-400" },
                  { label: "只读", desc: "查看文档、检索内容、AI 问答与阅读", color: "from-violet-500/20 to-violet-500/5 border-violet-500/25", dot: "bg-violet-400" },
                ].map((role) => (
                  <div key={role.label} className={`rounded-xl border ${role.color} bg-gradient-to-b p-5 text-center`}>
                    <div className={`w-3 h-3 rounded-full ${role.dot} mx-auto mb-3`} />
                    <h4 className="font-bold mb-1">{role.label}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{role.desc}</p>
                  </div>
                ))}
              </StaggeredList>

              {/* Connector line */}
              <div className="flex items-center justify-center mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-border/50 to-transparent" />
                <span className="px-4 text-xs text-muted-foreground">权限粒度精细到知识库级别</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-border/50 to-transparent" />
              </div>

              {/* Feature cards */}
              <StaggeredList stagger={80} className="grid sm:grid-cols-2 gap-4">
                {permissionFeatures.map((f) => (
                  <div
                    key={f.title}
                    className="flex items-start gap-3 p-4 rounded-xl border border-accent-border/20 bg-background/30 hover:border-accent-primary/30 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <f.icon className={`w-4.5 h-4.5 ${f.iconColor}`} />
                    </div>
                    <div>
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
/*  File Format Section                                                */
/* ------------------------------------------------------------------ */

function FileFormatSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(263 83% 59% / 0.08) 0%, transparent 70%)' }} />

      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              支持<span className="text-gradient">多种文件格式</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              不仅限于文档，图片、视频、代码、数据集等非文档格式同样支持上传与管理
            </p>
          </div>
        </ScrollReveal>

        <Spotlight size={250} opacity={0.06} className="rounded-2xl py-2">
          <StaggeredList stagger={60} className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto m-2">
            {fileFormats.map((f, i) => (
              <TiltCard key={f.label} maxTilt={10} glareOpacity={0.1} className="h-full">
                <div
                  className={`group relative text-center p-5 rounded-xl border border-accent-border/20 bg-card/30 backdrop-blur-sm ${f.hoverBorder} ${f.hoverBg} transition-all duration-300 h-full overflow-hidden`}
                >
                  {/* 悬停时的发光背景 */}
                  <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-24 ${f.glow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                      style={{
                        animation: `float-card 3s ease-in-out ${i * 0.4}s infinite`,
                      }}
                    >
                      <f.icon className={`w-6 h-6 ${f.color}`} />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">{f.label}</h4>
                    <p className="text-xs text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </StaggeredList>
        </Spotlight>

        {/* Upload highlight */}
        <ScrollReveal delay={200}>
          <div className="max-w-3xl mx-auto mt-10">
            <div className="rounded-xl border border-dashed border-accent-border/40 bg-card/20 p-6 text-center">
              <div className="flex items-center justify-center gap-6 flex-wrap text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent-primary" />
                  拖拽批量上传
                </span>
                <span className="w-px h-4 bg-accent-border/30" />
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent-primary" />
                  自动格式识别
                </span>
                <span className="w-px h-4 bg-accent-border/30" />
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent-primary" />
                  智能分类归档
                </span>
                <span className="w-px h-4 bg-accent-border/30" />
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent-primary" />
                  向量化索引构建
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* 浮动动画 keyframes */}
      <style>{`
        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Paper Analysis Section                                             */
/* ------------------------------------------------------------------ */

function PaperSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(160 80% 45% / 0.08) 0%, transparent 70%)' }} />

      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              论文<span className="text-gradient">智能分析</span>场景
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              在知识库中直接查看、分析、总结论文，AI 赋能科研每一步
            </p>
          </div>
        </ScrollReveal>

        <StaggeredList stagger={100} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {paperFeatures.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-accent-border/20 bg-card/30 backdrop-blur-sm p-6 hover:border-accent-primary/30 transition-all duration-500"
            >
              {/* gradient bg */}
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
/*  Scenarios Section                                                  */
/* ------------------------------------------------------------------ */

function ScenariosSection() {
  const scenarios = [
    {
      icon: GraduationCap,
      title: "研究生科研",
      items: [
        "个人知识库沉淀阅读笔记与学习心得",
        "订阅关注领域最新论文动态",
        "收藏重要的 AI 对话分析结果",
      ],
      iconColor: "text-violet-400",
    },
    {
      icon: Microscope,
      title: "课题组协作",
      items: [
        "统一管理课题相关论文、数据集、实验报告",
        "新成员加入即可获取历史科研积累",
        "基于知识库内容发起 AI 分析与总结",
      ],
      iconColor: "text-blue-400",
    },
    {
      icon: BookOpen,
      title: "文献综述",
      items: [
        "批量上传相关论文，AI 自动提取核心观点",
        "多篇论文对比分析，生成综述报告",
        "研究趋势可视化，发现研究空白点",
      ],
      iconColor: "text-emerald-400",
    },
  ]

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
              从个人学习到团队协作，知识库贯穿科研全流程
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
                开启智能知识管理新方式
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                让科研知识不再分散在个人电脑中，构建团队的知识财富。
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

export function KnowledgeBasePage() {
  return (
    <>
      <HeroSection />
      <ClassificationSection />
      <PermissionSection />
      <FileFormatSection />
      <PaperSection />
      <ScenariosSection />
      <CTASection />
    </>
  )
}
