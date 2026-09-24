import { Database, LayoutGrid, Shield, Users } from "lucide-react"
import { StaggeredList } from "@/components/reactbits"
import { SectionHeading } from "@/components/SectionHeading"

const values = [
  {
    icon: Database,
    title: "经验持续沉淀",
    desc: "研究路径、判断依据与工作方法随任务完整留存，人员变化不再带走组织经验。",
    metric: "不丢失",
    tone: "violet",
  },
  {
    icon: LayoutGrid,
    title: "知识结构清晰",
    desc: "资料、会议与成果按项目和关系组织，检索、引用和复用都更直接。",
    metric: "可调用",
    tone: "blue",
  },
  {
    icon: Users,
    title: "协作上下文一致",
    desc: "成员围绕同一任务共享知识与进展，新人接手无需重新拼接背景。",
    metric: "可协同",
    tone: "emerald",
  },
  {
    icon: Shield,
    title: "数据边界可控",
    desc: "私有化部署、分级权限与审计机制共同保障敏感资料和模型调用。",
    metric: "可治理",
    tone: "amber",
  },
]

export function Values() {
  return (
    <section id="values" className="section-shell relative overflow-hidden">
      <div className="container relative">
        <SectionHeading
          index="03"
          label="产品价值"
          title="从文件管理升级为组织能力管理"
          description="价值不只体现在一次回答更快，而在于团队知识能够留下来、连起来、用起来，并始终处于组织可控范围内。"
          tip="已服务高校、研究院所、企业研发团队"
        />

        <StaggeredList stagger={80} className="capability-matrix grid sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <article key={value.title} className={`matrix-cell value-cell tone-${value.tone}`}>
              <div className="matrix-cell__topline">
                <span className="matrix-cell__icon"><value.icon size={19} /></span>
                <span className="matrix-cell__index">0{index + 1}</span>
              </div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
              <strong className="value-cell__metric">{value.metric}</strong>
            </article>
          ))}
        </StaggeredList>
      </div>
    </section>
  )
}
