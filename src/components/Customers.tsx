import { Shield, Check, ChevronRight, Server, Cloud } from "lucide-react"
import { ScrollReveal } from "@/components/reactbits"
import { SectionHeading } from "@/components/SectionHeading"

/* ---- Deployment plans ---- */
const plans = [
  {
    id: "local",
    badge: "推荐",
    title: "完全本地化部署",
    subtitle: "Full On-Premise",
    desc: "系统与大模型均部署在客户自有服务器，数据完全不出内网，满足最高安全合规要求",
    icon: Shield,
    accent: {
      primary: "#7C3BED",
      glow: "rgba(124,59,237,0.15)",
      border: "rgba(124,59,237,0.25)",
      bg: "rgba(124,59,237,0.06)",
      text: "text-violet-400",
      ring: "ring-violet-400/20",
    },
    features: [
      { label: "部署系统", value: "客户本地服务器", highlight: true },
      { label: "大模型", value: "本地私有化部署", highlight: true },
      { label: "数据安全", value: "完全内网隔离" },
      { label: "适用场景", value: "涉密/合规要求极高" },
    ],
    diagram: {
      left: { icon: "server", label: "本地服务器" },
      right: { icon: "brain", label: "本地大模型" },
      connection: "全内网",
    },
  },
  {
    id: "hybrid",
    badge: "热门",
    title: "半本地化部署",
    subtitle: "Hybrid Cloud",
    desc: "业务系统本地化部署保障数据主权，大模型服务由华腾科技提供，免去模型运维负担",
    icon: Server,
    accent: {
      primary: "#3B82F6",
      glow: "rgba(59,130,246,0.15)",
      border: "rgba(59,130,246,0.25)",
      bg: "rgba(59,130,246,0.06)",
      text: "text-blue-400",
      ring: "ring-blue-400/20",
    },
    features: [
      { label: "部署系统", value: "客户本地服务器", highlight: true },
      { label: "大模型", value: "华腾技术云服务", highlight: true },
      { label: "数据安全", value: "业务数据不出网" },
      { label: "适用场景", value: "希望降低运维成本" },
    ],
    diagram: {
      left: { icon: "server", label: "本地服务器" },
      right: { icon: "cloud", label: "华腾AI服务" },
      connection: "加密通道",
    },
  },
  {
    id: "saas",
    badge: "快速",
    title: "SaaS 云端方案",
    subtitle: "Full Cloud SaaS",
    desc: "系统与模型均部署在华腾技术云，开箱即用零运维，快速上线",
    icon: Cloud,
    accent: {
      primary: "#22C55E",
      glow: "rgba(34,197,94,0.15)",
      border: "rgba(34,197,94,0.25)",
      bg: "rgba(34,197,94,0.06)",
      text: "text-green-400",
      ring: "ring-green-400/20",
    },
    features: [
      { label: "部署系统", value: "华腾技术云托管", highlight: true },
      { label: "大模型", value: "华腾技术云服务", highlight: true },
      { label: "数据安全", value: "云端加密隔离" },
      { label: "适用场景", value: "快速上线零运维" },
    ],
    diagram: {
      left: { icon: "cloud", label: "华腾技术云" },
      right: { icon: "brain", label: "云端大模型" },
      connection: "全托管",
    },
  },
]

/* ---- Mini SVG icons for diagram ---- */
function DiagramIcon({ type, color }: { type: string; color: string }) {
  if (type === "server") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <circle cx="6" cy="6" r="1" fill={color} />
        <circle cx="6" cy="18" r="1" fill={color} />
      </svg>
    )
  }
  if (type === "brain") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 1 5 5c0 .8-.2 1.5-.5 2.2A5 5 0 0 1 19 14a5 5 0 0 1-3 4.6V22h-4v-3.4A5 5 0 0 1 9 14c0-1.8 1-3.4 2.5-4.2" />
        <path d="M12 2a5 5 0 0 0-5 5c0 .8.2 1.5.5 2.2A5 5 0 0 0 5 14a5 5 0 0 0 3 4.6V22h4v-3.4" />
      </svg>
    )
  }
  // cloud
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  )
}



export function Customers() {
  return (
    <section id="customers" className="relative py-24 sm:py-32 overflow-hidden">
      {/* === Background === */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-surface/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full pointer-events-none animate-pulse-glow" style={{ background: 'radial-gradient(circle, hsl(263 83% 59% / 0.04) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(270 70% 72% / 0.03) 0%, transparent 70%)' }} />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(280 80% 68% / 0.03) 0%, transparent 70%)' }} />

      {/* Edge lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />

      <div className="container relative">
        <SectionHeading
          index="04"
          label="落地方案"
          title="三种落地部署方案"
          description="从完全本地化到全云端，按需选择最适合的部署方案，兼顾数据安全与运维效率。"
          tip="已落地 10+ 团队，覆盖高校、研究院所、企业研发部门"
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <ScrollReveal key={plan.id} className="reveal" style={{ transitionDelay: `${idx * 120}ms` }}>
              <div
                className="group relative h-full rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 overflow-hidden"
                style={{
                  borderColor: plan.accent.border,
                  background: `linear-gradient(180deg, ${plan.accent.bg} 0%, hsl(222 44% 7%) 100%)`,
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[200px] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${plan.accent.glow} 0%, transparent 70%)` }}
                />

                {/* Badge */}
                {plan.badge && (
                  <div
                    className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide border"
                    style={{
                      color: plan.accent.primary,
                      borderColor: plan.accent.border,
                      background: plan.accent.bg,
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="relative p-7 pt-6">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: plan.accent.bg,
                        border: `1px solid ${plan.accent.border}`,
                      }}
                    >
                      <plan.icon size={22} style={{ color: plan.accent.primary }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg leading-tight">{plan.title}</h4>
                      <span className="text-[11px] tracking-wider uppercase" style={{ color: plan.accent.primary, opacity: 0.7 }}>{plan.subtitle}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {plan.desc}
                  </p>

                  {/* Architecture diagram */}
                  <div
                    className="rounded-xl p-4 mb-6 border"
                    style={{
                      borderColor: `${plan.accent.border}`,
                      background: `linear-gradient(135deg, ${plan.accent.bg} 0%, transparent 100%)`,
                    }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      {/* Left node */}
                      <div className="flex flex-col items-center gap-1.5 flex-1">
                        <div
                          className="w-11 h-11 rounded-lg flex items-center justify-center"
                          style={{ background: plan.accent.bg, border: `1px solid ${plan.accent.border}` }}
                        >
                          <DiagramIcon type={plan.diagram.left.icon} color={plan.accent.primary} />
                        </div>
                        <span className="text-[11px] text-muted-foreground font-medium">{plan.diagram.left.label}</span>
                      </div>

                      {/* Connection */}
                      <div className="flex flex-col items-center gap-1 shrink-0">
                        <div className="flex items-center gap-1">
                          <div className="w-6 h-px" style={{ background: `linear-gradient(90deg, transparent, ${plan.accent.primary})` }} />
                          <div className="relative">
                            <div
                              className="w-2 h-2 rounded-full animate-pulse"
                              style={{ background: plan.accent.primary, boxShadow: `0 0 8px ${plan.accent.glow}` }}
                            />
                          </div>
                          <div className="w-1 h-px" style={{ background: plan.accent.primary }} />
                          <ChevronRight size={12} style={{ color: plan.accent.primary }} className="opacity-60" />
                        </div>
                        <span className="text-[10px] font-medium" style={{ color: plan.accent.primary, opacity: 0.8 }}>{plan.diagram.connection}</span>
                      </div>

                      {/* Right node */}
                      <div className="flex flex-col items-center gap-1.5 flex-1">
                        <div
                          className="w-11 h-11 rounded-lg flex items-center justify-center"
                          style={{ background: plan.accent.bg, border: `1px solid ${plan.accent.border}` }}
                        >
                          <DiagramIcon type={plan.diagram.right.icon} color={plan.accent.primary} />
                        </div>
                        <span className="text-[11px] text-muted-foreground font-medium">{plan.diagram.right.label}</span>
                      </div>
                    </div>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3 mb-6">
                    {plan.features.map((f) => (
                      <div key={f.label} className="flex items-start gap-2.5">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center mt-0.5 shrink-0"
                          style={{ background: plan.accent.bg, border: `1px solid ${plan.accent.border}` }}
                        >
                          <Check size={10} style={{ color: plan.accent.primary }} />
                        </div>
                        <div className="flex items-baseline gap-1.5 min-w-0">
                          <span className="text-xs text-muted-foreground shrink-0">{f.label}</span>
                          <span className={`text-xs font-medium truncate ${f.highlight ? '' : 'text-muted-foreground/80'}`} style={f.highlight ? { color: plan.accent.primary } : undefined}>
                            {f.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>


                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ---- Bottom comparison hint ---- */}
        <ScrollReveal>
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent-border/30 bg-[hsl(222_44%_8%/0.7)] backdrop-blur-sm">
              <div className="flex -space-x-1">
                <div className="w-2 h-2 rounded-full bg-violet-500" />
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-muted-foreground">
                三种方案可灵活组合，也支持定制化部署方案
              </span>
              <a
                href="https://117.64.210.62:3500/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-accent-primary hover:text-accent-glow transition-colors"
              >
                咨询方案 →
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
