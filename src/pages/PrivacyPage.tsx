import { Link } from "react-router-dom"
import { Shield, Database, Eye, Lock, FileCheck, Users, Server, AlertTriangle, RefreshCw } from "lucide-react"
import { useRef, useEffect, useState } from "react"

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const principles = [
  {
    icon: Lock,
    title: "数据零出域",
    desc: "所有科研数据均存储在客户内网环境，不经过任何公有云服务，确保数据主权完全属于客户。",
    color: "text-violet-400",
    bg: "from-violet-500/15 to-violet-500/5",
    border: "border-violet-500/20",
  },
  {
    icon: Shield,
    title: "最小权限原则",
    desc: "系统仅收集服务运行所必需的最少信息，不过度采集，不超范围使用。",
    color: "text-blue-400",
    bg: "from-blue-500/15 to-blue-500/5",
    border: "border-blue-500/20",
  },
  {
    icon: Eye,
    title: "透明可审计",
    desc: "所有数据操作均生成完整审计日志，客户可随时查看数据访问记录。",
    color: "text-emerald-400",
    bg: "from-emerald-500/15 to-emerald-500/5",
    border: "border-emerald-500/20",
  },
  {
    icon: RefreshCw,
    title: "持续合规更新",
    desc: "紧跟国家数据安全法规与行业标准，定期更新安全策略与隐私保护措施。",
    color: "text-amber-400",
    bg: "from-amber-500/15 to-amber-500/5",
    border: "border-amber-500/20",
  },
]

interface PolicySection {
  id: string
  icon: typeof Shield
  title: string
  content: string[]
}

const policySections: PolicySection[] = [
  {
    id: "scope",
    icon: FileCheck,
    title: "一、适用范围",
    content: [
      "本隐私政策适用于华腾·知渊（以下简称『平台』）的所有用户，包括但不限于高校科研人员、课题组管理者、院系管理员及校级信息化部门。",
      "本政策覆盖平台在提供科研知识管理、智能问答、文献解析、多智能体协作等服务过程中涉及的数据处理活动。",
    ],
  },
  {
    id: "collection",
    icon: Database,
    title: "二、信息收集与使用",
    content: [
      "账户信息：用户注册时提供的姓名、邮箱、所属机构/课题组等基本信息，仅用于身份认证与权限分配。",
      "科研文献数据：用户主动上传的论文、报告、实验记录等科研文档，仅用于知识库构建与智能检索服务，不会用于模型训练或其他任何目的。",
      "使用行为数据：平台可能收集匿名化的使用统计数据（如功能使用频率、查询量等），仅用于产品优化与服务质量提升。",
      "我们承诺：不会将用户上传的科研数据用于商业目的，不会向任何第三方分享、出售或出租用户数据。",
    ],
  },
  {
    id: "storage",
    icon: Server,
    title: "三、数据存储与安全",
    content: [
      "本地化部署：平台采用私有化部署模式，所有数据（包括知识库、向量索引、对话记录、审计日志）均存储在客户指定的内网服务器上。",
      "加密保护：数据传输采用 TLS 1.3 加密，静态存储采用 AES-256 加密，确保数据在传输和存储过程中的安全性。",
      "访问控制：平台实现机构级 → 部门级 → 课题组级 → 个人级的四层权限体系，支持知识库隔离与细粒度访问控制。",
      "安全审计：所有数据操作（上传、查询、修改、删除、导出）均生成不可篡改的审计日志，满足等保三级要求。",
    ],
  },
  {
    id: "rights",
    icon: Users,
    title: "四、用户权利",
    content: [
      "查询权：用户有权查询平台收集的与其相关的个人信息及其处理情况。",
      "更正权：用户发现个人信息不准确时，有权要求更正。",
      "删除权：用户有权要求删除其个人信息和上传的科研数据。课题组解散或合作终止时，平台将在 30 天内完成所有数据的彻底清除。",
      "导出权：用户有权导出其上传的所有科研文档原文以及平台生成的结构化数据。",
      "注销权：用户可随时注销账户，注销后平台将删除与该账户相关的所有个人信息。",
    ],
  },
  {
    id: "ai",
    icon: AlertTriangle,
    title: "五、AI 数据处理声明",
    content: [
      "模型本地化：平台使用的大语言模型均在客户本地环境运行，推理过程不涉及任何外部 API 调用或数据外传。",
      "不用于训练：用户上传的科研文献、问答对话记录等数据不会被用于任何模型训练或微调。",
      "可追溯性：AI 生成的每一条回答均标注引用来源，用户可核验信息准确性。平台不对 AI 生成内容的学术准确性承担最终责任。",
      "数据沙箱：跨课题组协作时，协作方仅能通过 AI 接口查询共享知识库，无法直接访问或下载原始文件。",
    ],
  },
  {
    id: "compliance",
    icon: FileCheck,
    title: "六、合规与认证",
    content: [
      "平台已通过信息系统等级保护三级备案，满足高校信息化建设安全要求。",
      "平台支持与客户现有安全基础设施集成，包括 LDAP/AD 统一身份认证、CAS 单点登录、日志对接 SIEM 系统等。",
      "平台定期进行代码安全审计（SAST/DAST）和渗透测试，确保系统安全性持续达标。",
    ],
  },
  {
    id: "update",
    icon: RefreshCw,
    title: "七、政策更新",
    content: [
      "本隐私政策可能会根据法律法规变化、产品功能更新或业务需要进行修订。我们将通过平台公告或邮件通知的方式告知用户政策变更。",
      "重大变更将提前 30 天通知，用户在更新后继续使用平台即视为同意修订后的隐私政策。",
      "如对本政策有任何疑问，请联系我们：maxiang14@tsinghua.org.cn。",
    ],
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
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return { ref, visible }
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export function PrivacyPage() {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: "-20% 0px -60% 0px" }
    )
    policySections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      {/* ===== Hero ===== */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(263 83% 59% / 0.05) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(280 80% 68% / 0.04) 0%, transparent 70%)' }} />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent" />
        </div>

        <div className="container max-w-5xl relative">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
            <Link to="/" className="hover:text-foreground transition-colors">{"首页"}</Link>
            <span className="text-foreground/30">/</span>
            <span className="text-foreground/60">{"隐私政策"}</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-accent-primary font-medium text-sm tracking-widest uppercase mb-4">Privacy Policy</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.15] mb-6">
              {"科研数据安全，"}<br />
              <span className="gradient-text">{"是我们的底线承诺"}</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {"我们深知科研数据的敏感性与重要性。本政策详细说明华腾·知渊如何收集、使用、存储和保护您的数据。"}
            </p>
            <p className="mt-4 text-sm text-muted-foreground/70">
              {"最后更新日期：2026 年 4 月 1 日"}
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />

      {/* ===== Principles ===== */}
      <PrinciplesSection />

      {/* ===== Policy body with sidebar TOC ===== */}
      <section className="py-16 sm:py-24">
        <div className="container max-w-6xl">
          <div className="flex gap-10 lg:gap-16">
            {/* Sidebar TOC */}
            <aside className="hidden lg:block w-52 flex-shrink-0">
              <div className="sticky top-28">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">{"目录"}</p>
                <nav className="space-y-1">
                  {policySections.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                      className={`block w-full text-left text-sm py-1.5 pl-3 border-l-2 transition-all duration-200 bg-transparent cursor-pointer ${
                        activeId === s.id
                          ? "border-accent-primary text-accent-primary font-medium"
                          : "border-transparent text-muted-foreground hover:text-foreground hover:border-accent-border"
                      }`}
                    >
                      {s.title.replace(/^[\u4E00-\u9FFF]+、\s*/, "")}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0 space-y-14">
              {policySections.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                      <s.icon size={18} className="text-accent-primary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">{s.title}</h2>
                  </div>
                  <div className="space-y-4 pl-12">
                    {s.content.map((para, j) => (
                      <p key={j} className="text-[0.95rem] text-muted-foreground leading-[1.85] tracking-wide">
                        {para}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Contact CTA ===== */}
      <section className="border-t border-accent-border/20">
        <div className="container max-w-4xl py-16 text-center">
          <div className="p-10 rounded-2xl border border-accent-border/30 gradient-card backdrop-blur-sm">
            <Shield size={36} className="text-accent-primary mx-auto mb-5" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              {"对隐私政策有疑问？"}
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              {"我们重视您对数据安全的每一个关切。如有任何疑问或建议，欢迎随时联系我们。"}
            </p>
            <a
              href="mailto:maxiang14@tsinghua.org.cn?subject=%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96%E5%92%A8%E8%AF%A2"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-gradient-to-r from-accent-primary to-accent-glow text-white font-medium text-sm hover:shadow-hero transition-shadow duration-300"
            >
              {"联系我们"} <Shield size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Sub-sections                                                       */
/* ------------------------------------------------------------------ */

function PrinciplesSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(160 80% 45% / 0.03) 0%, transparent 70%)' }} />
      </div>

      <div className="container max-w-5xl relative">
        <div className="max-w-2xl mb-14">
          <p className="text-accent-primary font-medium text-sm tracking-widest uppercase mb-3">Core Principles</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {"四大核心原则"}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {"以下原则贯穿我们产品设计与数据处理的每一个环节。"}
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {principles.map((p, i) => (
            <div
              key={p.title}
              className={`group relative p-6 rounded-2xl border ${p.border} bg-gradient-to-b ${p.bg} backdrop-blur-sm hover:scale-[1.03] transition-all duration-300`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p.icon size={24} className={`${p.color} mb-4`} />
              <h3 className="text-base font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${p.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
