import { Mail, Phone } from "lucide-react"
import { ScrollReveal, Spotlight } from "@/components/reactbits"

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* === Enhanced tech background === */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-surface/20 to-transparent pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-pulse-glow" style={{ background: 'radial-gradient(circle, hsl(263 83% 59% / 0.05) 0%, transparent 70%)' }} />
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(270 70% 72% / 0.04) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(280 80% 68% / 0.04) 0%, transparent 70%)' }} />

      {/* Diagonal streaks - more prominent */}
      <div className="absolute top-1/5 -left-32 w-[900px] h-[1.5px] bg-gradient-to-r from-transparent via-accent-primary/15 to-transparent rotate-[15deg] pointer-events-none" />
      <div className="absolute bottom-1/5 -right-32 w-[800px] h-[1.5px] bg-gradient-to-r from-transparent via-accent-glow/15 to-transparent -rotate-[10deg] pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-accent-secondary/10 to-transparent rotate-[25deg] pointer-events-none" />

      {/* Converging circuit lines */}
      <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-full opacity-[0.04] pointer-events-none" viewBox="0 0 600 400">
        {/* Left converge */}
        <path d="M0 50 L200 50 L300 200" fill="none" stroke="hsl(263 83% 62%)" strokeWidth="0.8" strokeDasharray="4 3"/>
        <path d="M0 150 L150 150 L300 200" fill="none" stroke="hsl(263 83% 62%)" strokeWidth="0.8" strokeDasharray="4 3"/>
        {/* Right converge */}
        <path d="M600 80 L400 80 L300 200" fill="none" stroke="hsl(270 70% 72%)" strokeWidth="0.8" strokeDasharray="4 3"/>
        <path d="M600 180 L420 180 L300 200" fill="none" stroke="hsl(270 70% 72%)" strokeWidth="0.8" strokeDasharray="4 3"/>
        {/* Bottom disperse */}
        <path d="M300 200 L200 350" fill="none" stroke="hsl(280 80% 70%)" strokeWidth="0.8" strokeDasharray="4 3"/>
        <path d="M300 200 L400 350" fill="none" stroke="hsl(280 80% 70%)" strokeWidth="0.8" strokeDasharray="4 3"/>
        {/* Center node */}
        <circle cx="300" cy="200" r="6" fill="none" stroke="hsl(263 83% 62%)" strokeWidth="1"/>
        <circle cx="300" cy="200" r="2.5" fill="hsl(270 70% 77%)"/>
      </svg>

      {/* Concentric rings */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.03] pointer-events-none" viewBox="0 0 500 500">
        <circle cx="250" cy="250" r="240" fill="none" stroke="hsl(263 80% 62%)" strokeWidth="0.5"/>
        <circle cx="250" cy="250" r="180" fill="none" stroke="hsl(263 80% 62%)" strokeWidth="0.5"/>
        <circle cx="250" cy="250" r="120" fill="none" stroke="hsl(263 80% 62%)" strokeWidth="0.5"/>
        <circle cx="250" cy="250" r="60" fill="none" stroke="hsl(263 80% 62%)" strokeWidth="0.8"/>
      </svg>

      {/* Edge lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />

      <div className="container relative text-center">
        <ScrollReveal scale className="max-w-2xl mx-auto">
          <Spotlight size={400} opacity={0.06} className="rounded-2xl">
            <div className="p-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                开启智能科研新范式
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                联系我们，了解华腾·知渊如何帮助您的团队构建永不流失的数字大脑
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-8 text-sm text-muted-foreground">
                <a
                  href="mailto:kuailingmin@126.com"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Mail size={16} className="text-accent-primary" />
                  kuailingmin@126.com
                </a>
                <a
                  href="tel:400-000-0000"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Phone size={16} className="text-accent-primary" />
                  18551680387
                </a>
              </div>
            </div>
          </Spotlight>
        </ScrollReveal>
      </div>
    </section>
  )
}
