import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/components/reactbits"

const navLinks = [
  { label: "团队痛点", sectionId: "pain-points" },
  // { label: "平台方案", sectionId: "technology" },
  { label: "能力矩阵", sectionId: "capabilities" },
  { label: "产品价值", sectionId: "values" },
  { label: "落地方案", sectionId: "customers" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("")
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isHome = pathname === "/"
  const reduced = useReducedMotion()

  const navRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const [pillStyle, setPillStyle] = useState<CSSProperties>({ opacity: 0 })

  const updatePill = useCallback(() => {
    if (!activeSection || !itemRefs.current[activeSection] || !navRef.current) {
      setPillStyle((prev) => (prev.opacity === 0 ? prev : { opacity: 0 }))
      return
    }
    const item = itemRefs.current[activeSection]!
    const nav = navRef.current
    const rect = item.getBoundingClientRect()
    const navRect = nav.getBoundingClientRect()
    setPillStyle({
      opacity: 1,
      transform: `translateX(${rect.left - navRect.left}px)`,
      width: `${rect.width}px`,
    })
  }, [activeSection])

  useEffect(() => {
    updatePill()
    const t = window.setTimeout(updatePill, 120)
    return () => window.clearTimeout(t)
  }, [updatePill, pathname])

  useEffect(() => {
    const onResize = () => updatePill()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [updatePill])

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const doScroll = () => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" })
      }

      if (isHome) {
        doScroll()
        return
      }

      navigate("/")
      requestAnimationFrame(() => requestAnimationFrame(doScroll))
    },
    [isHome, navigate],
  )

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0)

      let current = ""
      for (const { sectionId } of navLinks) {
        const section = document.getElementById(sectionId)
        if (section && section.getBoundingClientRect().top <= 160) current = sectionId
      }
      setActiveSection(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={cn("site-nav fixed inset-x-0 top-0 z-50", scrolled && "site-nav--scrolled")}>
      <div className="site-nav__progress" style={{ width: `${scrollProgress}%` }} />
      <nav className="container flex h-[72px] items-center justify-between gap-4" aria-label="主导航">
        <Link to="/" className="group flex items-center gap-4 shrink-0" aria-label="华腾·技术首页">
          <span className="relative flex h-9 w-9 items-center justify-center">
            {/* 轨道粒子 */}
            <span className="absolute inset-[-10px] pointer-events-none">
              <span className="absolute inset-0 logo-orbit">
                <span className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              </span>
              <span className="absolute inset-0 logo-orbit--2">
                <span className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              </span>
              <span className="absolute inset-0 logo-orbit--3">
                <span className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-400 shadow-[0_0_6px_rgba(248,113,113,0.8)] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              </span>
            </span>

            {/* 悬停光晕 */}
            <span className="absolute inset-[-12px] rounded-2xl bg-blue-500/0 blur-xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none" />

            {/* Logo */}
            <img src="/images/logo.png" alt="" className="relative h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110" />
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-semibold leading-tight text-foreground transition-colors duration-300 group-hover:text-white">华腾·技术</span>
            <span className="text-[10px] font-medium tracking-[0.2em] text-violet-400/80 uppercase transition-colors duration-300">HUATENG AI</span>
          </span>
        </Link>

        {/* Pill nav */}
        <div ref={navRef} className="nav-pill hidden lg:flex" role="tablist" aria-label="页面导航">
          {!reduced && <span className="nav-pill__indicator" style={pillStyle} aria-hidden />}
          {navLinks.map((link) => {
            const active = isHome && activeSection === link.sectionId
            return (
              <button
                key={link.sectionId}
                ref={(el) => {
                  itemRefs.current[link.sectionId] = el
                }}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => scrollToSection(link.sectionId)}
                className={cn("nav-pill__item", active && "nav-pill__item--active")}
              >
                {link.label}
              </button>
            )
          })}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-accent-border/60 bg-card/80 text-foreground/80 lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "关闭导航" : "打开导航"}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={cn("mobile-nav md:hidden", mobileOpen && "mobile-nav--open")}
      >
        <div className="container pb-4">
          <div className="overflow-hidden rounded-xl border border-accent-border/60 bg-[hsl(220_45%_6%/0.98)] backdrop-blur-md">
            {navLinks.map((link, index) => (
              <button
                key={link.sectionId}
                type="button"
                onClick={() => {
                  scrollToSection(link.sectionId)
                  setMobileOpen(false)
                }}
                className={cn(
                  "flex w-full items-center gap-4 border-b border-accent-border/40 px-4 py-3.5 text-left text-sm text-muted-foreground last:border-b-0",
                  isHome && activeSection === link.sectionId && "text-foreground"
                )}
              >
                <span className="command-label w-6">{String(index + 1).padStart(2, "0")}</span>
                <span>{link.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
