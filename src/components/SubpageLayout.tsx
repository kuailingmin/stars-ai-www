import { type ReactNode } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

interface SubpageLayoutProps {
  title: string
  subtitle: string
  children: ReactNode
}

export function SubpageLayout({ title, subtitle, children }: SubpageLayoutProps) {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container max-w-4xl">
        {/* Back link */}
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
          <ArrowLeft size={16} />
          返回首页
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {children}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl border border-accent-border/30 gradient-card backdrop-blur-sm text-center">
          <h3 className="text-xl font-bold text-foreground mb-3">需要了解更多?</h3>
          <p className="text-muted-foreground mb-6">通过官网提供的联系方式联系我们，获取详细资料或预约产品演示</p>
         
        </div>
      </div>
    </div>
  )
}

/** Reusable content section block */
export function ContentSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="p-6 sm:p-8 rounded-xl border border-accent-border/30 bg-card/60 backdrop-blur-sm">
      <h2 className="text-xl font-bold text-foreground mb-4">{title}</h2>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  )
}