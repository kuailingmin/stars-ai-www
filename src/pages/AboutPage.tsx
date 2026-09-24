import { Link } from "react-router-dom"
import { GraduationCap, Target, Lightbulb, Shield, Users, Sparkles, Rocket, Code2, Brain, BookOpen } from "lucide-react"
import { useRef, useEffect, useState } from "react"

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const universities = [
  {
    name: "清华大学",
    eng: "Tsinghua University",
    desc: "计算机科学与技术、人工智能",
    color: "from-purple-500/20 to-purple-500/5",
    borderColor: "border-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    name: "北京大学",
    eng: "Peking University",
    desc: "软件工程、自然语言处理",
    color: "from-red-500/20 to-red-500/5",
    borderColor: "border-red-500/20",
    iconColor: "text-red-400",
  },
  {
    name: "中国科技大学",
    eng: "University of Science and Technology of China",
    desc: "智能系统、数据工程",
    color: "from-violet-500/20 to-violet-500/5",
    borderColor: "border-violet-500/20",
    iconColor: "text-violet-400",
  },
]

const values = [
  {
    icon: Target,
    title: "使命驱动",
    desc: "让科研知识不再孤立，让每一份科研成果都能被精准检索、可信引用、持续传承。",
    gradient: "from-accent-primary/20 to-accent-primary/5",
    iconColor: "text-violet-400",
  },
  {
    icon: Shield,
    title: "安全至上",
    desc: "科研数据是国家战略资产。我们将数据安全视为底线，而非功能。",
    gradient: "from-accent-secondary/20 to-accent-secondary/5",
    iconColor: "text-blue-400",
  },
  {
    icon: Lightbulb,
    title: "技术立身",
    desc: "拒绝 PPT 架构师。每一行代码都经得起科研场景的严苛考验，每一个算法都服务于真实需求。",
    gradient: "from-accent-glow/20 to-accent-glow/5",
    iconColor: "text-amber-400",
  },
  {
    icon: Users,
    title: "开放协作",
    desc: "与高校团队深度共创，从真实场景中提炼需求，用技术回应信任。",
    gradient: "from-accent-primary/20 to-accent-primary/5",
    iconColor: "text-emerald-400",
  },
]

const milestones = [
  { year: "2025 Q1", title: "团队初创", desc: "核心团队组建，汇聚清北合高级工程师，确立科研 AI 赛道方向" },
  { year: "2025 Q2", title: "技术突破", desc: "自研 RAG 引擎完成研发，内部评测 Recall@10 达 94%，科研问答准确率行业领先" },
  { year: "2025 Q3", title: "产品落地", desc: "平台 V1.0 正式发布，服务首批 2+ 高校课题组" },
  { year: "2025 Q4", title: "生态拓展", desc: "多模态论文解析、多智能体协同写作等核心能力全面上线" },
  { year: "2026 Q1", title: "规模化推广", desc: "已服务 10+ 校级客户，正与多家高校深入沟通中，意向客户持续增长" },
]

const stats = [
  { value: "80%", label: "核心成员来自双一流高校" },
  { value: "10+", label: "服务高校与科研机构" },
  { value: "10万+", label: "科研文献片段索引" },
  { value: "0", label: "安全事件记录" },
]

/* ------------------------------------------------------------------ */
/*  Hooks                                                              */
/* ------------------------------------------------------------------ */

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return { ref, visible }
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ===== Hero ===== */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(263 83% 59% / 0.06) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 right-1/6 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(270 70% 72% / 0.05) 0%, transparent 70%)' }} />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent" />
        </div>

        <div className="container max-w-5xl relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
            <Link to="/" className="hover:text-foreground transition-colors">{"首页"}</Link>
            <span className="text-foreground/30">/</span>
            <span className="text-foreground/60">{"关于我们"}</span>
          </nav>

          {/* Headline */}
          <div className="max-w-3xl">
            <p className="text-accent-primary font-medium text-sm tracking-widest uppercase mb-4">About Huateng AI</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.15] mb-6">
              {"源自顶尖学府，"}<br />
              <span className="gradient-text">{"为 AI 科研的未来而战"}</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {"我们是一支来自清华大学、北京大学、合肥工业大学的高级软件工程师团队。我们相信，当 AI 与科研深度融合，将释放出改变世界的力量——而这，就是我们每天在做的事。"}
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />

      {/* ===== University backgrounds ===== */}
      <UniversitySection />

      {/* ===== Stats ===== */}
      <StatsSection />

      {/* ===== Mission & Values ===== */}
      <ValuesSection />

      {/* ===== Timeline ===== */}
      <TimelineSection />

      {/* ===== Team culture ===== */}
      <CultureSection />

      {/* ===== Bottom CTA ===== */}
      <section className="border-t border-accent-border/20">
        <div className="container max-w-4xl py-16 text-center">
          <div className="p-10 rounded-2xl border border-accent-border/30 gradient-card backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              {"与我们同行，重定义科研 AI"}
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              {"无论你是科研工作者、高校管理者，还是对 AI + 科研充满热情的工程师——我们期待你的加入。"}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Sub-sections                                                       */
/* ------------------------------------------------------------------ */

function UniversitySection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="py-20 sm:py-28 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(280 80% 68% / 0.04) 0%, transparent 70%)' }} />
      </div>

      <div className="container max-w-5xl relative">
        <div className="max-w-2xl mb-14">
          <p className="text-accent-primary font-medium text-sm tracking-widest uppercase mb-3">Team Background</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {"核心团队，源自顶尖学府"}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {"我们的核心成员均来自中国顶尖高校的计算机与 AI 相关专业，拥有多年大规模系统架构与深度学习工程化经验。从学术研究到工程落地，我们深谙科研工作者的真实痛点。"}
          </p>
        </div>

        <div className={`grid sm:grid-cols-3 gap-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {universities.map((uni, i) => (
            <div
              key={uni.name}
              className={`relative group p-7 rounded-2xl border ${uni.borderColor} bg-gradient-to-b ${uni.color} backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <GraduationCap size={28} className={`${uni.iconColor} mb-4`} />
              <h3 className="text-xl font-bold text-foreground mb-1">{uni.name}</h3>
              <p className="text-xs text-muted-foreground/70 mb-3">{uni.eng}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{uni.desc}</p>
              {/* Glow on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${uni.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />
            </div>
          ))}
        </div>

        {/* Team composition summary */}
        <div className={`mt-10 p-6 rounded-xl border border-accent-border/20 bg-card/40 backdrop-blur-sm transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Code2 size={16} className="text-accent-primary" />
              {"平均 8+ 年软件开发经验"}
            </span>
            <span className="flex items-center gap-2">
              <Brain size={16} className="text-accent-glow" />
              {"深度学习与 NLP 方向研究背景"}
            </span>
            <span className="flex items-center gap-2">
              <BookOpen size={16} className="text-accent-secondary" />
              {"多位成员曾在一线科研院所工作"}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="py-16 border-y border-accent-border/20 bg-card/20 backdrop-blur-sm">
      <div className="container max-w-5xl">
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {stats.map((s, i) => (
            <div key={i} className="text-center" style={{ transitionDelay: `${i * 100}ms` }}>
              <p className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(270 70% 72% / 0.04) 0%, transparent 70%)' }} />
      </div>

      <div className="container max-w-5xl relative">
        <div className="max-w-2xl mb-14">
          <p className="text-accent-primary font-medium text-sm tracking-widest uppercase mb-3">Our Values</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {"我们的信念"}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {"我们不是在做一个「能用」的 AI 工具，而是在构建一个团队可以信赖十年的知识基础设施。这决定了我们的做事方式。"}
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 gap-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {values.map((val, i) => (
            <div
              key={val.title}
              className={`p-7 rounded-2xl border border-accent-border/20 bg-gradient-to-br ${val.gradient} backdrop-blur-sm hover:border-accent-primary/20 transition-all duration-300`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <val.icon size={24} className={`${val.iconColor} mb-4`} />
              <h3 className="text-lg font-bold text-foreground mb-2">{val.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="py-20 sm:py-28 border-t border-accent-border/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(263 83% 59% / 0.03) 0%, transparent 70%)' }} />
      </div>

      <div className="container max-w-5xl relative">
        <div className="max-w-2xl mb-14">
          <p className="text-accent-primary font-medium text-sm tracking-widest uppercase mb-3">Milestones</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {"成长路径"}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {"从初创团队到规模化落地，每一步都稳健而坚定。"}
          </p>
        </div>

        <div className={`relative transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary/40 via-accent-glow/20 to-transparent sm:-translate-x-px" />

          <div className="space-y-12">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 sm:gap-0 ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                    <span className="inline-block text-xs font-bold text-accent-primary tracking-widest mb-2">{m.year}</span>
                    <h3 className="text-lg font-bold text-foreground mb-1">{m.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-primary border-2 border-background shadow-[0_0_12px_rgba(139,92,246,0.5)]" />

                  {/* Spacer */}
                  <div className="hidden sm:block flex-1" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function CultureSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="py-20 sm:py-28 border-t border-accent-border/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(280 80% 68% / 0.03) 0%, transparent 70%)' }} />
      </div>

      <div className="container max-w-5xl relative">
        <div className="max-w-2xl mb-14">
          <p className="text-accent-primary font-medium text-sm tracking-widest uppercase mb-3">Culture</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {"我们的团队文化"}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {"技术理想主义与工程实用主义的结合体——我们既仰望星空，也脚踏实地。"}
          </p>
        </div>

        <div className={`grid sm:grid-cols-3 gap-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {[
            {
              icon: Sparkles,
              title: "技术理想主义",
              desc: "我们相信技术可以让科研更高效、更公平、更有传承性。每一个技术决策都服务于这个愿景。",
              iconColor: "text-violet-400",
            },
            {
              icon: Rocket,
              title: "快速迭代，深度打磨",
              desc: "两周一个迭代周期，但每个特性都经过与真实科研用户的反复验证。速度与质量，我们都要。",
              iconColor: "text-blue-400",
            },
            {
              icon: Users,
              title: "扁平化与透明",
              desc: "没有无谓的层级，每个人都可以对产品方向提出挑战。我们用代码和数据说话，而非职级。",
              iconColor: "text-emerald-400",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="p-7 rounded-2xl border border-accent-border/20 bg-card/40 backdrop-blur-sm hover:border-accent-primary/20 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <item.icon size={24} className={`${item.iconColor} mb-4`} />
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className={`mt-12 p-8 rounded-2xl border border-accent-primary/15 bg-accent-primary/[0.03] backdrop-blur-sm transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-4xl text-accent-primary/30 font-serif leading-none mb-2">&ldquo;</div>
          <p className="text-base sm:text-lg text-foreground/90 leading-relaxed italic max-w-3xl">
            {"我们不是在做一个「能赚钱」的 AI 产品，而是在解决一个「必须解决」的问题——让中国的团队拥有自己的、安全的、真正可用的 AI 知识基础设施。这是我们这代工程师的责任。"}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">{"—— 华腾技术创始团队"}</p>
        </div>
      </div>
    </section>
  )
}
