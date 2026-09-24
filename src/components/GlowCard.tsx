import { useRef, type ReactNode, type MouseEvent, type CSSProperties } from "react"
import { cn } from "@/lib/utils"

interface GlowCardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export function GlowCard({ children, className, style }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty("--glow-x", `${x}px`)
    card.style.setProperty("--glow-y", `${y}px`)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn("glow-card", className)}
      style={style}
    >
      {children}
    </div>
  )
}