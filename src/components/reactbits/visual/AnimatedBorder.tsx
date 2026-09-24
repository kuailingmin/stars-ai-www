import type { CSSProperties, ReactNode } from "react"

interface AnimatedBorderProps {
  children: ReactNode
  /** Border width in px */
  borderWidth?: number
  /** Gradient colors for the animated border */
  colors?: string[]
  /** Animation duration in seconds */
  duration?: number
  /** Border radius in px */
  borderRadius?: number
  className?: string
  style?: CSSProperties
}

export function AnimatedBorder({
  children,
  borderWidth = 1,
  colors = ["#0070f3", "#b24bff", "#00d9ff", "#0070f3"],
  duration = 3,
  borderRadius = 16,
  className,
  style,
}: AnimatedBorderProps) {
  const gradient = `linear-gradient(var(--border-angle, 0deg), ${colors.join(", ")})`

  return (
    <div
      className={className}
      style={{
        position: "relative",
        borderRadius,
        padding: borderWidth,
        background: gradient,
        animation: `border-rotate ${duration}s linear infinite`,
        ...style,
      }}
    >
      <div
        style={{
          borderRadius: borderRadius - borderWidth,
          background: "hsl(var(--card))",
          position: "relative",
          zIndex: 1,
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  )
}
