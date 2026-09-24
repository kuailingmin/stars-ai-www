import { Link } from "react-router-dom"
import { Mail, MapPin, Phone, Clock, Send, MessageSquare, Building2, GraduationCap } from "lucide-react"
import { useRef, useEffect, useState, type FormEvent } from "react"
import { GlowCard } from "@/components/GlowCard"
import { StaggeredList, TiltCard } from "@/components/reactbits"

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const contactChannels = [
  {
    icon: Mail,
    title: "电子邮件",
    value: "maxiang14@tsinghua.org.cn",
    desc: "商务合作与产品咨询",
    href: "mailto:maxiang14@tsinghua.org.cn",
    gradient: "from-violet-500/15 to-violet-500/5",
    borderColor: "border-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: Phone,
    title: "联系电话",
    value: "17756044216",
    desc: "工作日 9:00 - 18:00",
    href: "tel:400XXXXXXX",
    gradient: "from-violet-500/15 to-violet-500/5",
    borderColor: "border-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: MapPin,
    title: "公司地址",
    value: "安徽省合肥市蜀山区清华科技园18栋",
    desc: "欢迎预约上门演示",
    href: undefined,
    gradient: "from-purple-500/15 to-purple-500/5",
    borderColor: "border-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Clock,
    title: "响应时间",
    value: "24 小时内",
    desc: "邮件咨询快速响应",
    href: undefined,
    gradient: "from-amber-500/15 to-amber-500/5",
    borderColor: "border-amber-500/20",
    iconColor: "text-amber-400",
  },
]

const scenarios = [
  {
    icon: Building2,
    title: "高校/科研机构",
    items: ["了解平台功能与部署方案", "预约产品演示", "获取报价与合作方案"],
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    hoverBg: "group-hover:bg-violet-500/20",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]",
    gradient: "from-violet-500/15 to-violet-500/5",
    dot: "bg-violet-400/60",
  },
  {
    icon: GraduationCap,
    title: "课题组/实验室",
    items: ["科研知识管理需求咨询", "试用申请与技术支持", "RAG 与智能体场景讨论"],
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    hoverBg: "group-hover:bg-purple-500/20",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]",
    gradient: "from-purple-500/15 to-purple-500/5",
    dot: "bg-purple-400/60",
  },
  {
    icon: MessageSquare,
    title: "技术交流",
    items: ["技术与架构讨论", "安全部署与合规咨询", "产品功能建议与反馈"],
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    hoverBg: "group-hover:bg-violet-500/20",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]",
    gradient: "from-violet-500/15 to-violet-500/5",
    dot: "bg-violet-400/60",
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

export function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* ===== Hero ===== */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(263 83% 59% / 0.05) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(270 70% 72% / 0.04) 0%, transparent 70%)' }} />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent" />
        </div>

        <div className="container max-w-5xl relative">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
            <Link to="/" className="hover:text-foreground transition-colors">{"首页"}</Link>
            <span className="text-foreground/30">/</span>
            <span className="text-foreground/60">{"联系我们"}</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-accent-primary font-medium text-sm tracking-widest uppercase mb-4">Contact Us</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.15] mb-6">
              {"期待与您对话，"}<br />
              <span className="gradient-text">{"共同探索科研 AI 的可能"}</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {"无论您是高校管理者、团队负责人，还是对我们的技术感兴趣的同行——我们都很乐意听到您的声音。"}
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />

      {/* ===== Contact channels ===== */}
      <ChannelsSection />

      {/* ===== Contact form ===== */}
      <FormSection />

      {/* ===== Scenarios ===== */}
      <ScenariosSection />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Sub-sections                                                       */
/* ------------------------------------------------------------------ */

function ChannelsSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(263 83% 59% / 0.03) 0%, transparent 70%)' }} />
      </div>

      <div className="container max-w-5xl relative">
        <div className="max-w-2xl mb-14">
          <p className="text-accent-primary font-medium text-sm tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {"联系方式"}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {"选择最适合您的方式与我们取得联系。"}
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {contactChannels.map((ch, i) => {
            const Wrapper = ch.href ? "a" : "div"
            const wrapperProps = ch.href ? { href: ch.href } : {}
            return (
              <Wrapper
                key={ch.title}
                {...wrapperProps}
                className={`group relative p-6 rounded-2xl border ${ch.borderColor} bg-gradient-to-b ${ch.gradient} backdrop-blur-sm hover:scale-[1.03] transition-all duration-300 ${ch.href ? "cursor-pointer" : ""}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <ch.icon size={24} className={`${ch.iconColor} mb-4`} />
                <h3 className="text-sm font-semibold text-foreground mb-1">{ch.title}</h3>
                <p className={`text-base font-bold break-all ${ch.href ? "text-foreground group-hover:text-accent-primary transition-colors" : "text-foreground"} mb-1`}>
                  {ch.value}
                </p>
                <p className="text-xs text-muted-foreground">{ch.desc}</p>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${ch.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FormSection() {
  const { ref, visible } = useReveal()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get("name") as string
    const org = data.get("org") as string
    const email = data.get("email") as string
    const message = data.get("message") as string

    const subject = encodeURIComponent(`合作咨询——${org || "未填写"}`)
    const body = encodeURIComponent(
      `姓名：${name}\n机构：${org}\n邮箱：${email}\n\n${message}`
    )
    window.location.href = `mailto:maxiang14@tsinghua.org.cn?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section ref={ref} className="py-20 sm:py-28 border-t border-accent-border/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(270 70% 72% / 0.04) 0%, transparent 70%)' }} />
      </div>

      <div className="container max-w-5xl relative">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: description */}
          <div className={`lg:col-span-2 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-accent-primary font-medium text-sm tracking-widest uppercase mb-3">Send Message</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {"给我们留言"}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {"填写以下表单，我们将通过邮件在 24 小时内与您取得联系。您也可以直接发送邮件至："}
            </p>
            <a
              href="mailto:maxiang14@tsinghua.org.cn"
              className="inline-flex items-center gap-2 text-accent-primary font-medium hover:underline"
            >
              <Mail size={16} />
              maxiang14@tsinghua.org.cn
            </a>
          </div>

          {/* Right: form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-2xl border border-accent-border/20 bg-card/40 backdrop-blur-sm space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">{"姓名"}</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={"您的姓名"}
                    className="w-full px-4 py-3 rounded-lg border border-accent-border/30 bg-background/60 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/20 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="org" className="block text-sm font-medium text-foreground mb-2">{"机构/高校"}</label>
                  <input
                    id="org"
                    name="org"
                    type="text"
                    placeholder={"您所在的机构或高校"}
                    className="w-full px-4 py-3 rounded-lg border border-accent-border/30 bg-background/60 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/20 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">{"邮箱"}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-accent-border/30 bg-background/60 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/20 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">{"留言内容"}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={"请描述您的需求或问题…"}
                  className="w-full px-4 py-3 rounded-lg border border-accent-border/30 bg-background/60 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/20 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-accent-primary to-accent-glow text-white font-medium text-sm hover:shadow-hero transition-all duration-300"
              >
                {submitted ? "✓ 已打开邮件客户端" : <><Send size={16} /> {"发送留言"}</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function ScenariosSection() {
  return (
    <section className="py-20 sm:py-28 border-t border-accent-border/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(263 83% 59% / 0.03) 0%, transparent 70%)' }} />
      </div>

      <div className="container max-w-5xl relative">
        <div className="max-w-2xl mb-14">
          <p className="text-accent-primary font-medium text-sm tracking-widest uppercase mb-3">How Can We Help</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {"我们可以帮您什么？"}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {"不同角色、不同需求，我们都能提供有针对性的支持。"}
          </p>
        </div>

        <StaggeredList stagger={100} className="grid sm:grid-cols-3 gap-5">
          {scenarios.map((s) => (
            <TiltCard key={s.title} maxTilt={7} glareOpacity={0.08}>
              <GlowCard className={`group relative p-7 rounded-2xl border border-accent-border/20 bg-card/40 backdrop-blur-sm transition-all duration-500 ${s.glow}`}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                {/* Corner brackets */}
                <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-accent-border/15 rounded-tr group-hover:border-accent-primary/30 transition-colors duration-300 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-accent-border/15 rounded-bl group-hover:border-accent-primary/30 transition-colors duration-300 pointer-events-none" />

                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl ${s.bg} ${s.hoverBg} flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110`}>
                    <s.icon size={22} className={s.color} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-4">{s.title}</h3>
                  <ul className="space-y-2.5">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full ${s.dot} mt-1.5 flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </TiltCard>
          ))}
        </StaggeredList>
      </div>
    </section>
  )
}
