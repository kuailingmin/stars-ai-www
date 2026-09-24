import type { CSSProperties, ReactNode } from "react"

interface ShimmerButtonProps {
  children: ReactNode
  /** Shimmer color */
  shimmerColor?: string
  /** Background base color */
  background?: string
  /** Animation duration in seconds */
  duration?: number
  className?: string
  style?: CSSProperties
}

export function ShimmerButton({
  children,
  shimmerColor = "rgba(255, 255, 255, 0.12)",
  background = "linear-gradient(135deg, hsl(var(--accent-primary)), hsl(var(--accent-secondary)))",
  duration = 2,
  className,
  style,
}: ShimmerButtonProps) {
  return (
    <button
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        background,
        ...style,
      }}
    >
      {/* Shimmer overlay */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
          backgroundSize: "200% 100%",
          animation: `shimmer ${duration}s linear infinite`,
          pointerEvents: "none",
        }}
      />
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </button>
  )
}
