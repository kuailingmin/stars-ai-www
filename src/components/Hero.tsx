import { buttonVariants } from "@/components/ui/button"
import {
  ArrowRight,
  Check,
} from "lucide-react"
import { CountUp } from "@/components/CountUp"

const trustSignals = ["本地私有化", "全链路可追溯", "组织级权限"]

export function Hero() {
  return (
    <section
      className="command-deck relative flex min-h-screen items-center overflow-hidden"
      data-visual-direction="command-deck"
    >

      <div className="container relative z-10 pb-12 pt-28 sm:pb-24 sm:pt-32 lg:pt-36">
        <div className="grid items-center gap-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 animate-fade-up border border-accent-primary/40 bg-accent-primary/10 backdrop-blur-sm shadow-[0_0_20px_rgba(124,58,237,0.15)]"><span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-glow opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-glow"></span></span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles text-accent-glow"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg><span className="text-sm font-semibold tracking-wide bg-gradient-to-r from-accent-glow via-white to-accent-primary bg-clip-text text-transparent">国内面向团队的知识智能体平台</span></div>
            <h1 className="mb-4 text-5xl font-semibold leading-none text-foreground sm:mb-6 sm:text-6xl lg:text-7xl">
              华腾·知渊
            </h1>
            <p className="hero-statement mb-4 max-w-2xl text-2xl font-medium leading-snug text-foreground sm:mb-6 sm:text-3xl lg:text-[2.55rem]">
              让团队知识，成为可调用的智能能力
            </p>
            <p className="mb-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:mb-8 sm:text-lg sm:leading-8">
              将资料解析、科研问答、项目协同与写作总结接入同一个团队上下文，让每次任务都能复用已有知识，并继续沉淀为组织经验。
            </p>

            <div className="mb-6 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-md border border-accent-border/70 bg-accent-border/70 sm:mb-9">
              {trustSignals.map((item) => (
                <div key={item} className="flex items-center justify-center gap-1.5 bg-[hsl(220_45%_7%/0.94)] px-2 py-2 text-center text-[10px] text-foreground/78 sm:gap-2 sm:px-4 sm:py-3 sm:text-sm">
                  <Check size={13} className="shrink-0 text-violet-400 sm:h-[15px] sm:w-[15px]" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <a
                href="https://117.64.210.62:3500/chat"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "hero", size: "xl" })}
              >
                进入产品演示
                <ArrowRight size={18} className="ml-2" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className={buttonVariants({ variant: "hero-outline", size: "xl" })}
              >
                查看能力矩阵
              </button>
            </div>

            <dl className="command-metrics mt-8 grid max-w-2xl grid-cols-3 border-y border-accent-border/60 sm:mt-12">
              <div>
                <dt>科研 Skill</dt>
                <dd><CountUp end={132} suffix=" 个" /></dd>
              </div>
              <div>
                <dt>能力域</dt>
                <dd><CountUp end={4} suffix=" 大" /></dd>
              </div>
              <div>
                <dt>数据本地化</dt>
                <dd><CountUp end={100} suffix="%" /></dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

