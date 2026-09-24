import type { CSSProperties, ReactNode } from "react"

interface GradientTextProps {
  children: ReactNode
  gradient?: string
  animationDuration?: number
  className?: string
  style?: CSSProperties
}

export function GradientText({
  children,
  gradient = "linear-gradient(90deg, #0070f3, #b24bff, #00d9ff, #0070f3)",
  animationDuration = 4,
  className,
  style,
}: GradientTextProps) {
  return (
    <span
      className={className}
      style={{
        backgroundImage: gradient,
        backgroundSize: animationDuration > 0 ? "200% 100%" : "100% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation:
          animationDuration > 0
            ? `gradient-flow ${animationDuration}s ease infinite`
            : undefined,
        ...style,
      }}
    >
      {children}
    </span>
  )
}
