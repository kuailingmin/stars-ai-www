import { SubpageLayout, ContentSection } from "@/components/SubpageLayout"
import { FileText, Download, Shield, Cpu, Database, Users } from "lucide-react"

const highlights = [
  { icon: Shield, label: "全栈自主可控架构详解" },
  { icon: Cpu, label: "RAG + Agent 技术深度剖析" },
  { icon: Database, label: "私有知识库建设方法论" },
  { icon: Users, label: "典型落地案例与效果数据" },
]

export function WhitepaperPage() {
  return (
    <SubpageLayout
      title="产品白皮书"
      subtitle="全面了解华腾科研AI平台的技术架构、核心能力与落地价值"
    >
      <ContentSection title="白皮书概述">
        <p>
          《华腾科研AI平台V1.0产品白皮书》系统性地阐述了平台的设计理念、技术架构、核心功能模块及其在高校科研场景中的应用价值。本白皮书面向高校课题组负责人、科研信息化管理者及企业研发部门决策者，提供从需求分析到方案落地的完整技术参考。
        </p>
      </ContentSection>

      <ContentSection title="核心内容概览">
        <div className="grid sm:grid-cols-2 gap-4 not-prose">
          {highlights.map((h) => (
            <div key={h.label} className="flex items-center gap-3 p-4 rounded-lg border border-accent-border/20 bg-background/50">
              <div className="w-9 h-9 shrink-0 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                <h.icon size={18} className="text-accent-primary" />
              </div>
              <span className="text-foreground font-medium text-sm">{h.label}</span>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="白皮书目录">
        <ol className="list-decimal list-inside space-y-2">
          <li>行业背景与科研知识管理现状分析</li>
          <li>华腾科研AI平台产品定位与核心价值</li>
          <li>技术架构：多模型本地化部署、RAG引擎、自研Agent框架</li>
          <li>四大核心能力模块详解
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-muted-foreground">
              <li>私有多模态知识库</li>
              <li>可追溯智能问答</li>
              <li>科研智能体（Agent）矩阵</li>
              <li>协作与权限管控</li>
            </ul>
          </li>
          <li>安全合规与数据主权保障方案</li>
          <li>典型客户场景与应用案例</li>
          <li>商业模式与合作方式</li>
          <li>技术路线图与未来规划</li>
        </ol>
      </ContentSection>

      <ContentSection title="获取方式">
        <div className="flex items-start gap-4 p-4 rounded-lg border border-accent-primary/20 bg-accent-primary/5 not-prose">
          <div className="w-10 h-10 shrink-0 rounded-lg bg-accent-primary/10 flex items-center justify-center">
            <FileText size={20} className="text-accent-primary" />
          </div>
          <div>
            <p className="text-foreground font-semibold mb-1">华腾科研AI平台V1.0产品白皮书.pdf</p>
            <p className="text-muted-foreground text-sm mb-3">共 48 页 | 约 12MB | 2026年3月更新</p>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg gradient-primary text-primary-foreground text-sm font-medium shadow-hero hover:shadow-hero-hover transition-all duration-300 hover:-translate-y-0.5">
              <Download size={16} />
              填写信息获取白皮书
            </button>
          </div>
        </div>
      </ContentSection>
    </SubpageLayout>
  )
}