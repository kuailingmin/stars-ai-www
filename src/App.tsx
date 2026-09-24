import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect, type ReactNode } from "react"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { PainPoints } from "@/components/PainPoints"
// import { Technology } from "@/components/Technology"
import { Capabilities } from "@/components/Capabilities"
import { Values } from "@/components/Values"
import { Customers } from "@/components/Customers"
import { CTA } from "@/components/CTA"
import { Footer } from "@/components/Footer"
import { BackToTop } from "@/components/BackToTop"
import { TechGrid } from "@/components/TechGrid"
import { StarrySky } from "@/components/StarrySky"
import { WhitepaperPage } from "@/pages/WhitepaperPage"
import { DeployGuidePage } from "@/pages/DeployGuidePage"
import { BlogPage } from "@/pages/BlogPage"
import { FAQPage } from "@/pages/FAQPage"
import { BlogDetailPage } from "@/pages/BlogDetailPage"
import { AboutPage } from "@/pages/AboutPage"
import { PartnersPage } from "@/pages/PartnersPage"
import { ContactPage } from "@/pages/ContactPage"
import { PrivacyPage } from "@/pages/PrivacyPage"
import { KnowledgeBasePage } from "@/pages/KnowledgeBasePage"
import { SmartQAPage } from "@/pages/SmartQAPage"
import { ResearchAgentPage } from "@/pages/ResearchAgentPage"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function HomePage() {
  return (
    <div className="home-page">
      <HomeScrollSection index={0}>
        <Hero />
      </HomeScrollSection>
      <SectionDivider />
      <HomeScrollSection index={1}>
        <PainPoints />
      </HomeScrollSection>
      <SectionDivider variant="accent" />
      {/* <HomeScrollSection index={2}>
        <Technology />
      </HomeScrollSection> */}
      <SectionDivider />
      <HomeScrollSection index={2}>
        <Capabilities />
      </HomeScrollSection>
      <SectionDivider variant="accent" />
      <HomeScrollSection index={2}>
        <Values />
      </HomeScrollSection>
      <SectionDivider />
      <HomeScrollSection index={4}>
        <Customers />
      </HomeScrollSection>
      <SectionDivider variant="accent" />
      <HomeScrollSection index={6}>
        <CTA />
      </HomeScrollSection>
    </div>
  )
}

function HomeBackdrop() {
  return (
    <div className="home-cosmos" aria-hidden="true">
      <StarrySky />
      <div className="home-cosmos__nebula" />
      <div className="home-cosmos__grid" />
      <div className="home-cosmos__vignette" />
    </div>
  )
}

function HomeScrollSection({ children, index }: { children: ReactNode; index: number }) {
  return (
    <div
      className={`home-scroll-section ${index % 2 === 0 ? "home-scroll-section--left" : "home-scroll-section--right"}`}
      data-home-section
    >
      {children}
    </div>
  )
}

function SectionDivider({ variant = "default" }: { variant?: "default" | "accent" }) {
  return (
    <div className="relative h-px">
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent ${
          variant === "accent"
            ? "via-accent-glow/30"
            : "via-accent-primary/20"
        } to-transparent`}
      />
    </div>
  )
}

function App() {
  const { pathname } = useLocation()
  const isHome = pathname === "/"

  // 产品能力、资源、关于板块使用流星背景
  const starryPages = [
    "/knowledge-base",
    "/smart-qa",
    "/research-agent",
    "/deploy-guide",
    "/blog",
    "/faq",
    "/about",
    "/partners",
    "/contact",
    "/privacy",
  ]
  const useStarryBg = isHome || starryPages.some((p) => pathname.startsWith(p))

  return (
    <div className={`min-h-screen text-foreground relative ${isHome ? "home-route" : "bg-background"}`}>
      {useStarryBg && <HomeBackdrop />}
      {!useStarryBg && <TechGrid />}
      <ScrollToTop />
      <Navbar />
      <main className="relative z-[1]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/whitepaper" element={<WhitepaperPage />} />
          <Route path="/deploy-guide" element={<DeployGuidePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
          <Route path="/smart-qa" element={<SmartQAPage />} />
          <Route path="/research-agent" element={<ResearchAgentPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
