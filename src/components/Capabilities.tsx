import { useCallback, useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/reactbits"
import { SectionHeading } from "@/components/SectionHeading"
import {
  BookOpen,
  Brain,
  Calendar,
  Clock,
  Eye,
  FileCheck,
  Globe,
  Layers,
  Link2,
  Lock,
  RefreshCw,
  Shield,
  Tags,
  Upload,
  Users,
} from "lucide-react"

const modules = [
  {
    id: "deposit",
    icon: Layers,
    title: "过程有沉淀",
    code: "KNOWLEDGE",
    tagline: "多源输入、深度解析、知识资产化",
    image: "/images/ai-agent.png",
    tone: "violet",
    features: [
      { icon: Upload, title: "多源知识接入", desc: "论文、表格、图片、音视频、网页与业务系统统一进入团队知识空间。" },
      { icon: Tags, title: "深度解析能力", desc: "识别章节、图表、公式和引用关系，保留文档内部逻辑。" },
      { icon: Link2, title: "知识资产化", desc: "串联原始素材、任务过程与最终成果，形成可复用记忆链。" },
    ],
  },
  {
    id: "collaborate",
    icon: Users,
    title: "团队能协同",
    code: "COLLABORATE",
    tagline: "共享上下文、方法固化、全链路协作",
    image: "/images/collaboration.png",
    tone: "blue",
    features: [
      { icon: BookOpen, title: "共享项目上下文", desc: "成员在同一项目空间使用同一份知识，接手任务无需从零开始。" },
      { icon: Brain, title: "方法论固化", desc: "将团队工作方法沉淀为可调用 Skill，稳定复制专家经验。" },
      { icon: Globe, title: "全局链路覆盖", desc: "132 个科研 Skill 覆盖从选题、实验到写作与汇报。" },
    ],
  },
  {
    id: "reuse",
    icon: RefreshCw,
    title: "知识可复用",
    code: "REUSABLE",
    tagline: "可信问答、任务即经验、长期记忆",
    image: "/images/traceable-qa.png",
    tone: "emerald",
    features: [
      { icon: FileCheck, title: "可信问答", desc: "回答附带真实来源引用，帮助团队核验结论并降低幻觉风险。" },
      { icon: Calendar, title: "任务即经验", desc: "项目历史成为下一次任务的起点，人员变化不再造成知识断层。" },
      { icon: Clock, title: "组织记忆体系", desc: "短期记忆保持任务连续，长期记忆让团队经验持续积累。" },
    ],
  },
  {
    id: "security",
    icon: Shield,
    title: "数据更安全",
    code: "SECURITY",
    tagline: "本地部署、项目隔离、审计追踪",
    image: "/images/agent-matrix.png",
    tone: "amber",
    features: [
      { icon: Lock, title: "安全策略", desc: "支持本地部署与项目级隔离，数据不参与外部模型训练。" },
      { icon: Eye, title: "全程可审计", desc: "权限、调用与输出留有日志记录，关键操作可查询和追踪。" },
      { icon: Shield, title: "数据主权", desc: "组织自行控制数据、模型与访问边界，满足敏感场景要求。" },
    ],
  },
]

export function Capabilities() {
  const [activeTab, setActiveTab] = useState("deposit")
  const [animKey, setAnimKey] = useState(0)
  const [tabIndex, setTabIndex] = useState(0)
  const tabListRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  const activeModule = modules.find((module) => module.id === activeTab)!

  const switchTab = useCallback((id: string, index: number) => {
    if (id === activeTab) return
    setActiveTab(id)
    setTabIndex(index)
    setAnimKey((key) => key + 1)
  }, [activeTab])

  useEffect(() => {
    const el = itemRefs.current[tabIndex]
    const container = tabListRef.current
    if (el && container) {
      const elRect = el.getBoundingClientRect()
      const cRect = container.getBoundingClientRect()
      setIndicator({ left: elRect.left - cRect.left, width: elRect.width })
    }
  }, [tabIndex])

  return (
    <section
      id="capabilities"
      className="section-shell relative overflow-hidden"
      data-visual-direction="capability-matrix"
    >
      <div className="container relative">
        <SectionHeading
          index="02"
          label="能力矩阵"
          title="四个能力域，覆盖团队知识全生命周期"
          description="从信息进入组织的那一刻，到协同使用、经验复用和安全治理，每个环节都在同一平台内连续运行。"
        />

        <ScrollReveal>
          <div className="capability-tabs mb-6" role="tablist" aria-label="能力域" ref={tabListRef}>
            <span
              className="capability-tabs__indicator"
              aria-hidden
              style={{ transform: `translateX(${indicator.left}px)`, width: `${indicator.width}px` }}
            />
            {modules.map((module, index) => (
              <button
                key={module.id}
                ref={(el) => { itemRefs.current[index] = el }}
                id={`tab-${module.id}`}
                type="button"
                role="tab"
                aria-selected={activeTab === module.id}
                aria-controls={`panel-${module.id}`}
                onClick={() => switchTab(module.id, index)}
                className={cn("capability-tab", activeTab === module.id && "capability-tab--active")}
              >
                <span className="capability-tab__number">0{index + 1}</span>
                <module.icon size={17} />
                <span>{module.title}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div
            key={animKey}
            id={`panel-${activeModule.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeModule.id}`}
            className={`capability-matrix grid lg:grid-cols-[0.92fr_1.08fr] tone-${activeModule.tone}`}
          >
            <div className="capability-detail tab-slide-left">
              <div className="capability-detail__heading">
                <span>{activeModule.code}</span>
                <h3>{activeModule.title}</h3>
                <p>{activeModule.tagline}</p>
              </div>
              <div>
                {activeModule.features.map((feature, index) => (
                  <article
                    key={feature.title}
                    className="capability-feature tab-stagger"
                    style={{ animationDelay: `${0.08 * index + 0.15}s` }}
                  >
                    <span className="capability-feature__index">0{index + 1}</span>
                    <span className="matrix-cell__icon"><feature.icon size={18} /></span>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="capability-visual tab-slide-right">
              <div className="capability-visual__header">
                <span>LIVE MODULE PREVIEW</span>
                <span className="status-chip"><span className="status-dot" /> READY</span>
              </div>
              <div className="capability-visual__media">
                <img src={activeModule.image} alt={`${activeModule.title}产品界面`} loading="lazy" />
              </div>
              <div className="capability-visual__footer">
                <span>私有化部署</span>
                <span>权限隔离</span>
                <span>结果可追溯</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
