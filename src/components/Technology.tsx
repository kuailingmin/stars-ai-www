import { useState, useEffect, useRef, useCallback } from "react"
import {
  BrainCircuit,
  BookOpenCheck,
  Users,
  ShieldCheck,
  Database,
  Workflow,
  Lock,
  FileSearch,
  Network,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/components/reactbits"
import { SectionHeading } from "@/components/SectionHeading"

const solutions = [
  {
    id: "knowledge",
    icon: BookOpenCheck,
    title: "团队知识沉淀",
    tagline: "让散落的资料与经验，成为团队可复用的智能资产",
    description:
      "将分散在个人电脑、聊天记录、文件中的知识统一解析、结构化沉淀。AI自动构建知识图谱，让团队经验不再因人员变动而流失。",
    image: "/images/traceable-qa.png",
    highlights: [
      { icon: Database, label: "多源知识接入", desc: "论文、报告、音视频、网页一键解析进入知识空间。" },
      { icon: Network, label: "智能组织关联", desc: "自动打标签、建关联、形成知识图谱，要素可追溯可推理。" },
      { icon: BrainCircuit, label: "记忆体系沉淀", desc: "短期记忆保持任务连续，长期记忆固化团队资产。" },
    ],
    scenarios: ["科研团队", "项目组", "产品研发", "咨询服务"],
  },
  {
    id: "collaboration",
    icon: Users,
    title: "团队智能协作",
    tagline: "在同一知识上下文下，让团队协作更高效更智能",
    description:
      "打破知识孤岛，团队成员在共享项目空间中协作。AI辅助任务分解、文档协作、经验复用，新人接手不再从零开始。",
    image: "/images/collaboration.png",
    highlights: [
      { icon: Users, label: "共享项目空间", desc: "团队成员在同一知识上下文下协作，信息实时同步。" },
      { icon: Workflow, label: "智能任务编排", desc: "132+ Skill 按需组合，将专家经验固化为可复用流程。" },
      { icon: BrainCircuit, label: "过程知识捕捉", desc: "自动记录思考过程与决策依据，沉淀团队方法学。" },
    ],
    scenarios: ["课题组", "研发团队", "运营团队", "客服团队"],
  },
  {
    id: "qa",
    icon: BrainCircuit,
    title: "团队智能问答",
    tagline: "有来源、可追溯，让AI成为团队的智能助理",
    description:
      "基于团队私有知识库构建可信问答系统，每一个回答都有据可查。支持复杂问题推理、多轮对话，成为团队随时可用的智能助手。",
    image: "/images/ai-agent.png",
    highlights: [
      { icon: FileSearch, label: "深度语义检索", desc: "向量+关键词混合检索，精准定位知识片段。" },
      { icon: BrainCircuit, label: "上下文推理", desc: "基于团队知识进行深度推理，给出专业回答。" },
      { icon: BookOpenCheck, label: "来源可追溯", desc: "回答附带原文引用，支持一键跳转核验。" },
    ],
    scenarios: ["企业知识库", "技术支持", "培训学习", "法务合规"],
  },
  {
    id: "private",
    icon: ShieldCheck,
    title: "团队安全可控",
    tagline: "数据主权在团队手中，安全合规可审计",
    description:
      "支持完全本地化部署，数据不出内网。细粒度权限管控与全链路审计，让团队放心使用AI，满足等保合规要求。",
    image: "/images/agent-matrix.png",
    highlights: [
      { icon: Lock, label: "私有化部署", desc: "内网完全隔离部署，数据不参与外部模型训练。" },
      { icon: ShieldCheck, label: "权限分级管控", desc: "组织、项目、角色三级授权，数据按权限隔离。" },
      { icon: BookOpenCheck, label: "全链路审计", desc: "操作日志完整记录，关键行为可追溯可审计。" },
    ],
    scenarios: ["政府机构", "金融机构", "军工涉密", "大型企业"],
  },
]

export function Technology() {
  const [activeIndex, setActiveIndex] = useState(0)
  const blockRefs = useRef<(HTMLElement | null)[]>([])
  const reduced = useReducedMotion()

  // Scroll-driven active block detection — whichever narrative block crosses
  // the viewport center band becomes the active stage scene.
  useEffect(() => {
    const els = blockRefs.current.filter(Boolean) as HTMLElement[]
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index)
            setActiveIndex(idx)
          }
        })
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const jumpTo = useCallback(
    (i: number) => {
      const el = blockRefs.current[i]
      if (!el) return
      el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" })
    },
    [reduced],
  )

  return (
    <section id="technology" className="solution-scroll section-shell">
      <div className="container relative">
        <SectionHeading
          index="02"
          label="平台方案"
          title="围绕团队为核心，AI高效智能服务团队"
          description="滚动浏览，从知识沉淀到智能协作，逐一展开AI服务团队的全链路场景。"
          tip="已落地 10+ 团队，覆盖高校、研究院所、企业研发部门"
        />

        <div className="solution-scroll__grid">
          {/* LEFT — scrolling narrative */}
          <div className="solution-scroll__narrative">
            {solutions.map((solution, i) => (
              <article
                key={solution.id}
                ref={(el) => {
                  blockRefs.current[i] = el
                }}
                data-index={i}
                className={cn("solution-scroll__block", i === activeIndex && "is-active")}
              >
                <div className="solution-scroll__head">
                  <span className="solution-scroll__num">0{i + 1}</span>
                  <span className="matrix-cell__icon solution-scroll__icon">
                    <solution.icon size={20} />
                  </span>
                  <span className="command-label solution-scroll__count">
                    0{i + 1} / 0{solutions.length}
                  </span>
                </div>

                <h3 className="solution-scroll__title">{solution.title}</h3>
                <p className="solution-scroll__tagline">{solution.tagline}</p>
                <p className="solution-scroll__desc">{solution.description}</p>

                <ul className="solution-scroll__highlights">
                  {solution.highlights.map((h) => (
                    <li key={h.label}>
                      <span className="solution-scroll__h-icon">
                        <h.icon size={15} />
                      </span>
                      <span className="solution-scroll__h-text">
                        <span className="solution-scroll__h-label">{h.label}</span>
                        <span className="solution-scroll__h-desc">{h.desc}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="solution-scroll__scenarios">
                  <p className="command-label solution-scroll__scenarios-label">适用场景</p>
                  <div className="solution-scroll__scenarios-list">
                    {solution.scenarios.map((sc) => (
                      <span key={sc} className="solution-scroll__scenario">
                        {sc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mobile-only inline visual */}
                <div className="solution-scroll__inline-image">
                  <img
                    src={solution.image}
                    alt={`${solution.title}场景示意`}
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>

          {/* RIGHT — sticky cross-fading stage (desktop only) */}
          <div className="solution-scroll__sticky" aria-hidden="true">
            <div className="solution-scroll__stage">
              {solutions.map((solution, i) => (
                <div
                  key={solution.id}
                  className={cn(
                    "solution-scroll__visual",
                    i === activeIndex && "is-active",
                  )}
                >
                  <div className="solution-scroll__v-overlay">
                    <span className="command-label text-accent-primary uppercase tracking-wider">
                      {solution.scenarios[0]} · {solution.scenarios[1]}
                    </span>
                    <span className="status-chip">
                      <span className="status-dot" /> LIVE
                    </span>
                  </div>

                  <div className="solution-scroll__v-img">
                    <img
                      src={solution.image}
                      alt=""
                      loading="lazy"
                    />
                    <div className="solution-scroll__v-glow" />
                  </div>

                  <div className="solution-scroll__v-caption">
                    <span className="solution-scroll__v-num">0{i + 1}</span>
                    <span className="solution-scroll__v-title">{solution.title}</span>
                  </div>
                </div>
              ))}

              {/* Vertical progress rail */}
              <div className="solution-scroll__progress">
                {solutions.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={cn(i === activeIndex && "is-active")}
                    onClick={() => jumpTo(i)}
                    aria-label={`跳转到解决方案 ${i + 1}`}
                    tabIndex={-1}
                  >
                    <span className="solution-scroll__progress-dot" />
                    <span className="solution-scroll__progress-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <p className="solution-scroll__hint command-label">
              <span className="solution-scroll__hint-dot" /> 滚动浏览
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
