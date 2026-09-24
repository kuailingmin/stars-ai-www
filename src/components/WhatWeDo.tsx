import { Brain, FileInput, Layers, RefreshCw, Route, Target } from "lucide-react"
import { ScrollReveal } from "@/components/reactbits"
import { SectionHeading } from "@/components/SectionHeading"

const differences = [
  {
    icon: Target,
    title: "面向团队场景",
    desc: "理解论文、实验、课题与项目协同流程，不是泛化的聊天机器人。",
  },
  {
    icon: Layers,
    title: "把知识变成资产",
    desc: "将资料、经验和成果组织为可检索、可推理、可调用的结构化知识。",
  },
  {
    icon: Brain,
    title: "基于私域上下文推理",
    desc: "回答引用真实来源，判断建立在团队已有材料与权限边界之上。",
  },
]

const workflow = [
  {
    icon: FileInput,
    title: "多源输入",
    desc: "文档、网页、音视频与业务系统统一接入并深度解析。",
  },
  {
    icon: Route,
    title: "结构沉淀",
    desc: "自动建立标签、关系和记忆链路，形成团队知识底座。",
  },
  {
    icon: RefreshCw,
    title: "场景复用",
    desc: "通过 132 个科研 Skill 承接任务，经验随使用持续进化。",
  },
]

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="section-shell relative overflow-hidden">
      <div className="container relative">
        <SectionHeading
          index="02"
          label="平台方法"
          title="把分散知识接入同一个工作闭环"
          description="华腾·知渊从知识输入开始，完成结构化沉淀，再将组织经验交给智能体调用，让能力在真实任务中循环积累。"
        />

        <ScrollReveal>
          <div className="capability-matrix grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="matrix-group">
              <div className="matrix-group__heading">
                <span>平台差异</span>
                <strong>不是通用 AI 的外壳</strong>
              </div>
              {differences.map((item, index) => (
                <div key={item.title} className="matrix-row">
                  <span className="matrix-row__number">0{index + 1}</span>
                  <item.icon size={19} className="matrix-row__icon" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="matrix-group matrix-group--accent">
              <div className="matrix-group__heading">
                <span>运行闭环</span>
                <strong>输入、沉淀、复用</strong>
              </div>
              <div className="workflow-rail">
                {workflow.map((item, index) => (
                  <div key={item.title} className="workflow-step">
                    <div className="workflow-step__header">
                      <span>0{index + 1}</span>
                      <item.icon size={20} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
