import { Link } from "react-router-dom"
import { ArrowRight, Building2, Handshake, TrendingUp, GraduationCap, BookOpen, FlaskConical, Cpu, Layers } from "lucide-react"
import { useRef, useEffect, useState } from "react"

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const partners = [
  {
    name: "安徽大学",
    eng: "Anhui University",
    abbr: "AHU",
    founded: "始建于 1928 年",
    type: "「双一流」建设高校",
    desc: "与安徽大学计算机科学与技术学院深度合作，围绕科研文献智能检索与知识管理开展技术落地与应用实践。",
    highlights: ["科研文献智能检索", "知识库建设与管理"],
    icon: BookOpen,
    gradient: "from-violet-500/15 via-violet-500/5 to-transparent",
    borderColor: "border-violet-500/20",
    accentColor: "text-violet-400",
    dotColor: "bg-violet-400",
  },
  {
    name: "安徽理工大学",
    eng: "Anhui University of Science & Technology",
    abbr: "AUST",
    founded: "始建于 1945 年",
    type: "安徽省重点建设高校",
    desc: "与安徽理工大学在矿业工程与安全科学领域开展合作，探索 AI 在工程技术科研中的创新应用。",
    highlights: ["工程技术 AI 应用", "安全科学知识体系"],
    icon: FlaskConical,
    gradient: "from-violet-500/15 via-violet-500/5 to-transparent",
    borderColor: "border-violet-500/20",
    accentColor: "text-violet-400",
    dotColor: "bg-violet-400",
  },
  {
    name: "合肥工业大学",
    eng: "Hefei University of Technology",
    abbr: "HFUT",
    founded: "始建于 1945 年",
    type: "「双一流」建设高校・211 工程",
    desc: "与合肥工业大学智能科学与技术学院开展深度合作，共同推进智能体编排框架与科研数据安全技术的研发与应用。",
    highlights: ["智能体编排框架共研", "科研数据安全技术"],
    icon: Cpu,
    gradient: "from-purple-500/15 via-purple-500/5 to-transparent",
    borderColor: "border-purple-500/20",
    accentColor: "text-purple-400",
    dotColor: "bg-purple-400",
  },
  {
    name: "合肥理工学院",
    eng: "Hefei Institute of Technology",
    abbr: "HFIT",
    founded: "原安徽大学江淮学院，2021 年转设更名",
    type: "合肥市市属公办本科高校‌ ",
    desc: "与合肥理工学院在产教融合方向开展合作，探索 AI 赋能应用型高校科研与教学的创新模式。",
    highlights: ["产教融合实践", "AI 赋能教学科研"],
    icon: Layers,
    gradient: "from-amber-500/15 via-amber-500/5 to-transparent",
    borderColor: "border-amber-500/20",
    accentColor: "text-amber-400",
    dotColor: "bg-amber-400",
  },
]

const cooperationModels = [
  {
    icon: Building2,
    title: "校级平台部署",
    desc: "为高校提供私有化部署的科研 AI 平台，支持全校多课题组共享使用。",
  },
  {
    icon: Handshake,
    title: "联合研发",
    desc: "与高校实验室共同探索 AI 前沿技术在科研场景的创新应用。",
  },
  {
    icon: TrendingUp,
    title: "持续迭代优化",
    desc: "基于真实科研场景反馈，持续优化产品能力，实现技术与需求的深度契合。",
  },
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
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return { ref, visible }
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export function PartnersPage() {
  return (
    <div className="min-h-screen">
      {/* ===== Hero ===== */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(263 83% 59% / 0.05) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(270 70% 72% / 0.04) 0%, transparent 70%)' }} />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent" />
        </div>

        <div className="container max-w-5xl relative">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
            <Link to="/" className="hover:text-foreground transition-colors">{"首页"}</Link>
            <span className="text-foreground/30">/</span>
            <span className="text-foreground/60">{"合作伙伴"}</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-accent-primary font-medium text-sm tracking-widest uppercase mb-4">Our Partners</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.15] mb-6">
              {"携手顶尖学府，"}<br />
              <span className="gradient-text">{"共建科研 AI 新生态"}</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {"我们与全国多所知名高校建立了深度合作关系，从真实科研场景出发，共同探索 AI 技术在学术研究中的无限可能。"}
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />

      {/* ===== Partner cards ===== */}
      <PartnerCardsSection />

      {/* ===== Cooperation model ===== */}
      <CooperationSection />

      {/* ===== Join us CTA ===== */}
      <JoinSection />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Sub-sections                                                       */
/* ------------------------------------------------------------------ */

function PartnerCardsSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(280 80% 68% / 0.03) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(263 83% 59% / 0.03) 0%, transparent 70%)' }} />
      </div>

      <div className="container max-w-5xl relative">
        <div className="max-w-2xl mb-14">
          <p className="text-accent-primary font-medium text-sm tracking-widest uppercase mb-3">University Partners</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {"高校合作伙伴"}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {"每一次合作都是一次技术与场景的深度对话。我们珍视每一位合作伙伴的信任，用技术与服务回应每一份期待。"}
          </p>
        </div>

        <div className="grid gap-6">
          {partners.map((partner, i) => (
            <div
              key={partner.name}
              className={`group relative p-8 sm:p-10 rounded-2xl border ${partner.borderColor} bg-gradient-to-r ${partner.gradient} backdrop-blur-sm hover:scale-[1.01] transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Top row: icon + name + badges */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-6">
                <div className={`w-14 h-14 rounded-xl border ${partner.borderColor} bg-card/60 flex items-center justify-center flex-shrink-0`}>
                  <partner.icon size={26} className={partner.accentColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-3 mb-1">
                    <h3 className="text-2xl font-bold text-foreground">{partner.name}</h3>
                    <span className="text-sm text-muted-foreground/60">{partner.eng}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span>{partner.founded}</span>
                    <span className="w-1 h-1 rounded-full bg-accent-border/50" />
                    <span>{partner.type}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-[0.95rem] text-muted-foreground leading-relaxed mb-6">
                {partner.desc}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {partner.highlights.map((h) => (
                  <span
                    key={h}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${partner.borderColor} bg-card/40 text-xs font-medium text-foreground/80`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${partner.dotColor}`} />
                    {h}
                  </span>
                ))}
              </div>

              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${partner.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10 blur-2xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CooperationSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="py-20 sm:py-28 border-t border-accent-border/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(263 83% 59% / 0.03) 0%, transparent 70%)' }} />
      </div>

      <div className="container max-w-5xl relative">
        <div className="max-w-2xl mb-14">
          <p className="text-accent-primary font-medium text-sm tracking-widest uppercase mb-3">Cooperation Model</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {"合作模式"}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {"我们提供灵活多样的合作方式，根据每所高校的实际需求定制最优合作方案。"}
          </p>
        </div>

        <div className={`grid sm:grid-cols-3 gap-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {cooperationModels.map((model, i) => (
            <div
              key={model.title}
              className="p-7 rounded-2xl border border-accent-border/20 bg-card/40 backdrop-blur-sm hover:border-accent-primary/20 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-5">
                <model.icon size={22} className="text-accent-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{model.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{model.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className={`mt-12 grid grid-cols-3 gap-5 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {[
            { value: "10+", label: "高校合作伙伴" },
            { value: "100%", label: "客户续约率" },
            { value: "持续增长", label: "意向合作高校" },
          ].map((s, i) => (
            <div key={i} className="text-center p-5 rounded-xl border border-accent-border/15 bg-card/30 backdrop-blur-sm">
              <p className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function JoinSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="border-t border-accent-border/20">
      <div className="container max-w-4xl py-16 text-center">
        <div className={`p-10 rounded-2xl border border-accent-border/30 gradient-card backdrop-blur-sm transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <GraduationCap size={36} className="text-accent-primary mx-auto mb-5" />
          <h3 className="text-2xl font-bold text-foreground mb-3">
            {"成为我们的合作伙伴"}
          </h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            {"如果您的高校或科研机构对 AI 科研平台感兴趣，我们期待与您深入交流，共同探索合作可能。"}
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:maxiang14@tsinghua.org.cn?subject=%E5%90%88%E4%BD%9C%E6%B2%9F%E9%80%9A%E2%80%94%E2%80%94%E5%8D%8E%E8%85%BE%E7%A7%91%E7%A0%94AI%E5%B9%B3%E5%8F%B0"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-gradient-to-r from-accent-primary to-accent-glow text-white font-medium text-sm hover:shadow-hero transition-shadow duration-300"
            >
              {"预约合作沟通"} <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
