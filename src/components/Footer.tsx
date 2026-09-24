import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-accent-border/30 py-12">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src="/images/logo.png" alt="华腾技术" className="w-8 h-8 object-contain" />
              <span className="text-lg font-bold text-foreground">华腾技术</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              让科研知识可沉淀、可追溯、可传承，打造团队专属智能科研伙伴。
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">产品能力</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/knowledge-base" className="hover:text-foreground transition-colors">知识库</Link></li>
              <li><Link to="/smart-qa" className="hover:text-foreground transition-colors">智能问答</Link></li>
              <li><Link to="/research-agent" className="hover:text-foreground transition-colors">科研智能体</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">资源</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {/* <li><Link to="/whitepaper" className="hover:text-foreground transition-colors">产品白皮书</Link></li> */}
              <li><Link to="/deploy-guide" className="hover:text-foreground transition-colors">部署指南</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-colors">技术博客</Link></li>
              <li><Link to="/faq" className="hover:text-foreground transition-colors">常见问题</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">关于</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">关于我们</Link></li>
              <li><Link to="/partners" className="hover:text-foreground transition-colors">合作伙伴</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">联系我们</Link></li>
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">隐私政策</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-accent-border/30 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span>&copy; 2026 安徽华腾技术. All rights reserved.</span>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              皖ICP备2026012258号-1
            </a>
          </p>
          <p>全栈自主可控 · 数据主权可控 · 安全合规</p>
        </div>
      </div>
    </footer>
  )
}