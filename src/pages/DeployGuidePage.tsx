import { SubpageLayout, ContentSection } from "@/components/SubpageLayout"
import { Server, Shield, Monitor, Settings, CheckCircle2, HardDrive, Cpu } from "lucide-react"
import { GlowCard } from "@/components/GlowCard"
import { ScrollReveal, StaggeredList, TiltCard } from "@/components/reactbits"

const steps = [
  { num: "01", title: "环境评估与硬件准备", desc: "确认服务器配置（推荐 NVIDIA RTX 4090 48GB 及以上），操作系统环境检查（支持 Ubuntu/CentOS/麒麟/统信），网络隔离策略制定。" },
  { num: "02", title: "平台基础部署", desc: "容器化引擎安装、基础服务编排部署、模型文件下载与挂载、向量数据库初始化。" },
  { num: "03", title: "模型配置与调优", desc: "选择并加载大语言模型（Deepseek/千问/开源模型），配置推理参数，测试3路并发推理性能。" },
  { num: "04", title: "知识库初始化", desc: "创建学科/方向分类体系，批量导入已有文献与资料，配置语义索引与自动分类规则。" },
  { num: "05", title: "权限与用户体系配置", desc: "创建导师/学生/访客角色，设定细粒度权限策略，配置团队共享空间与个人空间。" },
  { num: "06", title: "验收与培训交付", desc: "全功能测试验收，管理员操作培训，用户使用培训，交付运维手册。" },
]

const deployModes = [
  {
    icon: Shield,
    title: "内网完全隔离",
    desc: "物理隔离，数据零出域",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    hoverBg: "group-hover:bg-violet-500/20",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]",
    gradient: "from-violet-500/15 to-violet-500/5",
  },
  {
    icon: HardDrive,
    title: "本地私有化",
    desc: "本地部署，完全自主可控",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    hoverBg: "group-hover:bg-blue-500/20",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]",
    gradient: "from-blue-500/15 to-blue-500/5",
  },
  {
    icon: Cpu,
    title: "国产化硬件适配",
    desc: "适配麒麟/统信操作系统",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    hoverBg: "group-hover:bg-emerald-500/20",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]",
    gradient: "from-emerald-500/15 to-emerald-500/5",
  },
]

const requirements = [
  {
    icon: Server,
    title: "硬件要求",
    items: ["GPU: NVIDIA RTX 4090 (48GB) 或更高", "CPU: 16核及以上", "内存: 64GB及以上", "存储: 1TB SSD 及以上"],
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    hoverBg: "group-hover:bg-violet-500/20",
    glow: "group-hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.25)]",
    border: "hover:border-violet-500/30",
  },
  {
    icon: Monitor,
    title: "系统要求",
    items: ["Ubuntu 20.04/22.04 LTS", "CentOS 7.9+", "麒麟 V10", "统信 UOS V20"],
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    hoverBg: "group-hover:bg-blue-500/20",
    glow: "group-hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.25)]",
    border: "hover:border-blue-500/30",
  },
  {
    icon: Shield,
    title: "网络要求",
    items: ["支持纯内网隔离部署", "无需公网访问", "可选：OTA升级通道（单向出站）", "支持 HTTPS 自签名证书"],
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    hoverBg: "group-hover:bg-emerald-500/20",
    glow: "group-hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.25)]",
    border: "hover:border-emerald-500/30",
  },
  {
    icon: Settings,
    title: "软件依赖",
    items: ["Docker 24.0+", "NVIDIA Container Toolkit", "CUDA 12.0+", "Python 3.10+（管理工具）", "Java 21+"],
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    hoverBg: "group-hover:bg-amber-500/20",
    glow: "group-hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.25)]",
    border: "hover:border-amber-500/30",
  },
]

const stepColors = [
  "group-hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.25)]",
  "group-hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.25)]",
  "group-hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.25)]",
  "group-hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.25)]",
  "group-hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.25)]",
  "group-hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.25)]",
]

export function DeployGuidePage() {
  return (
    <SubpageLayout
      title="部署指南"
      subtitle="从环境准备到上线交付，一站式私有化部署全流程指引"
    >
      <ContentSection title="部署模式">
        <p>华腾科研AI平台支持三种部署模式，满足不同安全等级和基础设施条件的需求：</p>
        <div className="not-prose mt-6">
          <StaggeredList stagger={100} className="grid sm:grid-cols-3 gap-5">
            {deployModes.map((mode) => (
              <TiltCard key={mode.title} maxTilt={8} glareOpacity={0.1}>
                <GlowCard className={`group relative p-6 rounded-xl border border-accent-border/30 bg-card/80 backdrop-blur-sm transition-all duration-500 ${mode.glow}`}>
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${mode.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  {/* Corner brackets */}
                  <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-accent-border/15 rounded-tr group-hover:border-accent-primary/30 transition-colors duration-300 pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-accent-border/15 rounded-bl group-hover:border-accent-primary/30 transition-colors duration-300 pointer-events-none" />

                  <div className="relative text-center">
                    <div className={`w-14 h-14 mx-auto rounded-2xl ${mode.bg} ${mode.hoverBg} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}>
                      <mode.icon size={26} className={mode.color} />
                    </div>
                    <h4 className="text-foreground font-semibold mb-1">{mode.title}</h4>
                    <p className="text-sm text-muted-foreground">{mode.desc}</p>
                  </div>
                </GlowCard>
              </TiltCard>
            ))}
          </StaggeredList>
        </div>
      </ContentSection>

      <ContentSection title="环境要求">
        <div className="not-prose">
          <StaggeredList stagger={80} className="grid sm:grid-cols-2 gap-5">
            {requirements.map((req) => (
              <TiltCard key={req.title} maxTilt={5} glareOpacity={0.06}>
                <GlowCard className={`group relative p-5 rounded-xl border border-accent-border/20 bg-card/80 backdrop-blur-sm transition-all duration-500 ${req.border} ${req.glow}`}>
                  {/* Corner bracket */}
                  <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-accent-border/15 rounded-tr group-hover:border-accent-primary/30 transition-colors duration-300 pointer-events-none" />

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${req.bg} ${req.hoverBg} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                      <req.icon size={20} className={req.color} />
                    </div>
                    <span className="text-foreground font-semibold text-sm">{req.title}</span>
                  </div>
                  <ul className="space-y-2">
                    {req.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={14} className="text-accent-glow shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </TiltCard>
            ))}
          </StaggeredList>
        </div>
      </ContentSection>

      <ContentSection title="部署流程（6 步完成）">
        <div className="not-prose">
          <StaggeredList stagger={80} className="space-y-4">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num}>
                <GlowCard className={`group relative flex gap-5 p-5 rounded-xl border border-accent-border/20 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 ${stepColors[i]}`}>
                  {/* Connecting line to next step */}
                  <div className="absolute left-[29px] top-[60px] bottom-[-16px] w-px bg-gradient-to-b from-accent-primary/20 to-transparent pointer-events-none" />
                  {/* Corner bracket */}
                  <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-accent-border/15 rounded-tr group-hover:border-accent-primary/30 transition-colors duration-300 pointer-events-none" />

                  <div className="w-12 h-12 shrink-0 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_-3px_rgba(124,58,237,0.4)] transition-all duration-300 relative z-10">
                    <span className="text-sm font-bold text-primary-foreground">{step.num}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-foreground font-semibold mb-1 group-hover:text-accent-primary transition-colors duration-300">{step.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </StaggeredList>
        </div>
      </ContentSection>

      <ContentSection title="交付与售后">
        <p>我们提供一站式交付服务，包含现场部署、管理员培训、用户培训、运维手册交付。授权期内享受远程技术支持与 OTA 功能升级。如需定制化智能体开发或扩展部署，可联系我们的技术团队获取方案。</p>
      </ContentSection>
    </SubpageLayout>
  )
}
