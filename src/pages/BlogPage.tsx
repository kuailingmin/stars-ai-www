import { SubpageLayout, ContentSection } from "@/components/SubpageLayout"
import { Link } from "react-router-dom"
import { Calendar, ArrowRight } from "lucide-react"
import { blogPosts, tagColors } from "@/data/blogPosts"
import { GlowCard } from "@/components/GlowCard"
import { StaggeredList } from "@/components/reactbits"

const cardGlows = [
  "group-hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.25)]",
  "group-hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.25)]",
  "group-hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.25)]",
  "group-hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.25)]",
  "group-hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.25)]",
  "group-hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.25)]",
]

export function BlogPage() {
  return (
    <SubpageLayout
      title="技术博客"
      subtitle="深度技术解读、产品能力剖析与落地实践分享"
    >
      <StaggeredList stagger={80} className="space-y-5">
        {blogPosts.map((post, i) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block"
          >
            <GlowCard className={`group relative p-6 rounded-xl border border-accent-border/30 bg-card/60 backdrop-blur-sm hover:border-accent-primary/30 transition-all duration-500 hover:-translate-y-0.5 ${cardGlows[i % cardGlows.length]}`}>
              {/* Corner brackets */}
              <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-accent-border/15 rounded-tr group-hover:border-accent-primary/30 transition-colors duration-300 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-accent-border/15 rounded-bl group-hover:border-accent-primary/30 transition-colors duration-300 pointer-events-none" />

              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar size={12} />
                  {post.date}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${tagColors[post.tag] || "bg-accent-primary/10 text-accent-primary"}`}>
                  {post.tag}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent-primary transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {post.summary}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-accent-primary font-medium opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                阅读全文 <ArrowRight size={14} />
              </span>
            </GlowCard>
          </Link>
        ))}
      </StaggeredList>

      <ContentSection title="订阅更新">
        <p>
          关注华腾科研AI技术博客，获取最新的技术深度解读、产品功能更新与行业洞察。我们定期发布关于 RAG 技术、智能体编排、科研知识管理等领域的原创文章。
        </p>
      </ContentSection>
    </SubpageLayout>
  )
}
