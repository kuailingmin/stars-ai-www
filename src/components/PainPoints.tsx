import { ArrowRight, FileSearch, GitBranch, Network, Users } from "lucide-react"
import { ScrollReveal } from "@/components/reactbits"
import { SectionHeading } from "@/components/SectionHeading"

const painPoints = [
  {
    icon: FileSearch,
    title: "知识难定位",
    desc: "资料、会议、报告与历史成果分散在不同位置，每次任务都要重新找材料、补背景。",
    before: "到处找资料",
    after: "任务自动带上下文",
    tone: "rose",
  },
  {
    icon: GitBranch,
    title: "过程难复盘",
    desc: "成果留下了，但推导依据、关键判断与被否决方案没有形成可追溯的过程记录。",
    before: "只保留结果",
    after: "过程完整可追溯",
    tone: "amber",
  },
  {
    icon: Users,
    title: "协作难复制",
    desc: "复杂任务依赖少数专家推动，新成员接手缺少方法与上下文，团队经验无法稳定复用。",
    before: "依赖人员推动",
    after: "智能协同交付",
    tone: "blue",
  },
]

export function PainPoints() {
  return (
    <section id="pain-points" className="section-shell relative overflow-hidden">
      <div className="container relative">
        <SectionHeading
          index="01"
          label="团队痛点"
          title="真正的瓶颈，不在模型本身"
          description="通用 AI 可以回答问题，却不了解团队资料、项目过程和决策依据。组织缺少的，是一个能持续承接上下文的智能能力层。"
        />

        <ScrollReveal>
          <div className="capability-matrix grid md:grid-cols-3">
            {painPoints.map((point, index) => (
              <article key={point.title} className={`matrix-cell group tone-${point.tone}`}>
                <div className="matrix-cell__topline">
                  <span className="matrix-cell__icon"><point.icon size={19} /></span>
                  <span className="matrix-cell__index">0{index + 1}</span>
                </div>
                <h3>{point.title}</h3>
                <p>{point.desc}</p>
                <div className="matrix-transform">
                  <span>{point.before}</span>
                  <ArrowRight size={15} aria-hidden="true" />
                  <strong>{point.after}</strong>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120} className="context-callout mt-8">
          <div className="context-callout__icon"><Network size={22} /></div>
          <div>
            <span className="context-callout__label">关键判断</span>
            <h3>团队需要的不是另一个聊天入口，而是组织级上下文</h3>
          </div>
          <p>把人员、资料、任务、过程和权限连接起来，AI 才能基于真实业务背景做判断，并让每次交付继续积累。</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
