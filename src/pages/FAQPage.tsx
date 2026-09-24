import { useState } from "react"
import { SubpageLayout } from "@/components/SubpageLayout"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItem {
  q: string
  a: string
  category: string
}

const faqs: FAQItem[] = [
  // 产品相关
  {
    category: "产品功能",
    q: "华腾科研AI平台支持哪些文件格式？",
    a: "平台支持全域解析，包括 PDF、PPT、Word、Excel、图片（含手写公式）、语音文件、网页链接、对话记录等多种格式。所有格式均可自动解析入库并建立语义索引。",
  },
  {
    category: "产品功能",
    q: "智能问答的回答准确率如何保障？",
    a: "平台采用 RAG（检索增强生成）技术，所有回答均基于团队私有知识库中的真实文献和数据生成，每条回答必须附带溯源引用。如果知识库中没有相关内容，系统会明确告知，而非编造答案，从根本上杜绝大模型幻觉。",
  },
  {
    category: "产品功能",
    q: "科研智能体可以自定义吗？",
    a: "可以。平台提供标准智能体矩阵（批量论文总结、知识订阅、协同写作、TRIZ分析等），同时支持根据课题组具体需求定制开发专属智能体。定制开发作为商业合作模式的一部分提供。",
  },
  {
    category: "产品功能",
    q: "支持哪些大语言模型？",
    a: "平台支持多模型本地化部署，包括 Deepseek、通义千问、Llama 等主流开源模型，通过容器化方案统一调度管理，可根据任务需求灵活切换模型。",
  },
  // 部署相关
  {
    category: "部署与安全",
    q: "最低硬件配置要求是什么？",
    a: "基线配置为 NVIDIA RTX 4090（48GB显存）+ 64GB 内存 + 1TB SSD，支持3路并发推理。对于更大规模团队，可采用多卡或多节点方案扩展。",
  },
  {
    category: "部署与安全",
    q: "是否必须联网？能否在纯内网环境部署？",
    a: "不需要联网。平台完全支持纯内网隔离部署，所有模型推理、数据存储、知识检索均在本地完成，数据不上云、不外传。可选开启单向出站通道用于 OTA 升级。",
  },
  {
    category: "部署与安全",
    q: "是否支持国产化硬件和操作系统？",
    a: "支持。平台已完成麒麟 V10、统信 UOS V20 等国产操作系统适配，同时支持在国产化硬件环境下部署运行，满足信创合规要求。",
  },
  {
    category: "部署与安全",
    q: "数据安全如何保障？",
    a: "数据100%本地化存储，不上传到任何外部云服务，不参与任何外部模型训练。平台支持细粒度的权限管控、操作日志审计、数据加密存储，数据主权完全可控。",
  },
  // 商务相关
  {
    category: "商务合作",
    q: "授权模式有哪些？",
    a: "提供两种授权模式：一年期授权和终身授权，均包含 OTA 升级服务。授权费用根据团队规模和配置需求定价，具体方案请联系我们获取报价。",
  },
  {
    category: "商务合作",
    q: "部署周期通常是多长？",
    a: "标准部署通常可以在较短的周期内完成，包含环境部署、知识库初始化、权限配置与用户培训。定制化开发项目周期根据需求复杂度确定。",
  },
  {
    category: "商务合作",
    q: "是否提供售后技术支持？",
    a: "授权期内提供远程技术支持、系统问题排查、OTA 功能升级等售后服务。同时交付完整的运维手册，帮助团队具备自主运维能力。",
  },
]

const categories = ["全部", "产品功能", "部署与安全", "商务合作"]

export function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("全部")
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const filtered = activeCategory === "全部" ? faqs : faqs.filter((f) => f.category === activeCategory)

  return (
    <SubpageLayout
      title="常见问题"
      subtitle="关于产品功能、部署安全与商务合作的高频问题解答"
    >
      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setOpenIndex(null) }}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
              activeCategory === cat
                ? "gradient-primary text-primary-foreground shadow-hero"
                : "bg-card/80 backdrop-blur-sm border border-accent-border/50 text-muted-foreground hover:text-foreground hover:border-accent-primary/30"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ accordion */}
      <div className="space-y-3">
        {filtered.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={faq.q}
              className="rounded-xl border border-accent-border/30 bg-card/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-accent-primary/20"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-start justify-between gap-4 p-5 text-left"
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 px-2 py-0.5 rounded text-xs font-medium bg-accent-primary/10 text-accent-primary">
                    Q
                  </span>
                  <span className="text-sm font-semibold text-foreground">{faq.q}</span>
                </div>
                <ChevronDown
                  size={18}
                  className={cn(
                    "shrink-0 mt-0.5 text-muted-foreground transition-transform duration-300",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 pl-[52px]">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </SubpageLayout>
  )
}