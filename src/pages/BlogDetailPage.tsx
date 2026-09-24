import { useParams, Link, useNavigate } from "react-router-dom"
import { ArrowLeft, ArrowRight, Calendar, User, ChevronRight } from "lucide-react"
import { blogPosts, tagColors } from "@/data/blogPosts"
import { useEffect, useState, useRef } from "react"

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [readingProgress, setReadingProgress] = useState(0)
  const [activeSection, setActiveSection] = useState(0)
  const articleRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  const post = blogPosts.find((p) => p.slug === slug)
  const postIndex = blogPosts.findIndex((p) => p.slug === slug)
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null

  /* Reading progress bar */
  useEffect(() => {
    const handleScroll = () => {
      if (!articleRef.current) return
      const el = articleRef.current
      const rect = el.getBoundingClientRect()
      const total = el.scrollHeight - window.innerHeight
      const scrolled = -rect.top
      setReadingProgress(Math.min(100, Math.max(0, (scrolled / total) * 100)))
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* Active section detection */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.indexOf(entry.target as HTMLElement)
            if (idx !== -1) setActiveSection(idx)
          }
        })
      },
      { rootMargin: "-20% 0px -60% 0px" }
    )
    sectionRefs.current.forEach((ref) => ref && observer.observe(ref))
    return () => observer.disconnect()
  }, [post])

  if (!post) {
    return (
      <div className="min-h-screen pt-28 pb-20 flex flex-col items-center justify-center">
        <p className="text-xl text-muted-foreground mb-6">文章未找到</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-accent-primary hover:underline"
        >
          <ArrowLeft size={16} /> 返回博客列表
        </Link>
      </div>
    )
  }

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div ref={articleRef} className="min-h-screen relative">
      {/* --- Reading progress bar --- */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px]">
        <div
          className="h-full bg-gradient-to-r from-accent-primary via-accent-glow to-accent-secondary transition-all duration-150 ease-linear"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* --- Hero header --- */}
      <header className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(263 83% 59% / 0.05) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(270 70% 72% / 0.05) 0%, transparent 70%)' }} />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent" />
        </div>

        <div className="container max-w-4xl relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">
              首页
            </Link>
            <ChevronRight size={14} />
            <Link to="/blog" className="hover:text-foreground transition-colors">
              技术博客
            </Link>
            <ChevronRight size={14} />
            <span className="text-foreground/60 truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Tag */}
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-5 ${
              tagColors[post.tag] || "bg-accent-primary/10 text-accent-primary"
            }`}
          >
            {post.tag}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl  font-bold text-foreground leading-tight mb-6">
            {post.title}
          </h1>

          {/* Summary */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            {post.summary}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-accent-primary" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-accent-primary" />
              {post.date}
            </span>
          
          </div>
        </div>
      </header>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />

      {/* --- Body --- */}
      <div className="container max-w-6xl py-12 sm:py-16">
        <div className="flex gap-10 lg:gap-14">
          {/* Sidebar TOC (desktop only) */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                目录
              </p>
              <nav className="space-y-1">
                {post.sections.map((section, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToSection(i)}
                    className={`block w-full text-left text-sm py-1.5 pl-3 border-l-2 transition-all duration-200 ${
                      activeSection === i
                        ? "border-accent-primary text-accent-primary font-medium"
                        : "border-transparent text-muted-foreground hover:text-foreground hover:border-accent-border"
                    }`}
                  >
                    {section.heading}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main article */}
          <article className="flex-1 min-w-0">
            {/* Optional hero quote */}
            {post.heroQuote && (
              <blockquote className="relative mb-12 p-6 sm:p-8 rounded-xl border border-accent-primary/20 bg-accent-primary/[0.03] backdrop-blur-sm">
                <div className="absolute -top-3 left-6 text-5xl text-accent-primary/30 font-serif leading-none select-none">
                  &ldquo;
                </div>
                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed italic pl-4">
                  {post.heroQuote}
                </p>
              </blockquote>
            )}

            {/* Sections */}
            {post.sections.map((section, i) => (
              <section
                key={i}
                ref={(el) => { sectionRefs.current[i] = el }}
                className="mb-12 scroll-mt-28"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                  <span className="inline-block w-1 h-6 rounded-full bg-gradient-to-b from-accent-primary to-accent-glow flex-shrink-0" />
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.content.map((para, j) => (
                    <p
                      key={j}
                      className="text-[0.95rem] text-muted-foreground leading-[1.85] tracking-wide"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            {/* Tags / bottom decoration */}
            <div className="mt-16 pt-8 border-t border-accent-border/20">
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-foreground mr-2">标签：</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    tagColors[post.tag] || "bg-accent-primary/10 text-accent-primary"
                  }`}
                >
                  {post.tag}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent-primary/10 text-accent-primary">
                  华腾科研AI
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* --- Prev / Next navigation --- */}
      <div className="border-t border-accent-border/20">
        <div className="container max-w-4xl py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPost ? (
              <button
                onClick={() => navigate(`/blog/${prevPost.slug}`)}
                className="group flex flex-col items-start p-5 rounded-xl border border-accent-border/20 bg-card/40 backdrop-blur-sm hover:border-accent-primary/30 hover:bg-card/60 transition-all duration-300 text-left"
              >
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                  <ArrowLeft size={12} /> 上一篇
                </span>
                <span className="text-sm font-medium text-foreground group-hover:text-accent-primary transition-colors line-clamp-2">
                  {prevPost.title}
                </span>
              </button>
            ) : (
              <div />
            )}
            {nextPost ? (
              <button
                onClick={() => navigate(`/blog/${nextPost.slug}`)}
                className="group flex flex-col items-end p-5 rounded-xl border border-accent-border/20 bg-card/40 backdrop-blur-sm hover:border-accent-primary/30 hover:bg-card/60 transition-all duration-300 text-right"
              >
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                  下一篇 <ArrowRight size={12} />
                </span>
                <span className="text-sm font-medium text-foreground group-hover:text-accent-primary transition-colors line-clamp-2">
                  {nextPost.title}
                </span>
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>

      {/* --- Related posts --- */}
      <div className="border-t border-accent-border/20 bg-card/20 backdrop-blur-sm">
        <div className="container max-w-4xl py-14">
          <h3 className="text-xl font-bold text-foreground mb-8">推荐阅读</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {blogPosts
              .filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((related) => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="group p-5 rounded-xl border border-accent-border/20 bg-card/40 backdrop-blur-sm hover:border-accent-primary/30 hover:shadow-card-hover transition-all duration-300"
                >
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-[0.65rem] font-medium mb-3 ${
                      tagColors[related.tag] || "bg-accent-primary/10 text-accent-primary"
                    }`}
                  >
                    {related.tag}
                  </span>
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-accent-primary transition-colors line-clamp-2 mb-2">
                    {related.title}
                  </h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">{related.summary}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* --- Bottom CTA --- */}
      <div className="border-t border-accent-border/20">
        <div className="container max-w-4xl py-14 text-center">
          <div className="p-8 rounded-2xl border border-accent-border/30 gradient-card backdrop-blur-sm">
            <h3 className="text-xl font-bold text-foreground mb-3">
              想要体验华腾科研AI平台？
            </h3>
            <p className="text-muted-foreground mb-6">
              立即联系我们，获取产品演示或免费试用资格
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
