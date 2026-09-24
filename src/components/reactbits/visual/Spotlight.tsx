import { useRef, type CSSProperties, type ReactNode } from "react"
import { useMousePosition } from "../hooks/useMousePosition"
import { useReducedMotion } from "../hooks/useReducedMotion"

interface SpotlightProps {
  children: ReactNode
  /** Spotlight radius in px */
  size?: number
  /** Spotlight color */
  color?: string
  /** Spotlight opacity */
  opacity?: number
  className?: string
  style?: CSSProperties
}

export function Spotlight({
  children,
  size = 300,
  color = "hsl(var(--accent-primary))",
  opacity = 0.08,
  className,
  style,
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { x, y, isHovering } = useMousePosition(ref)
  const reduced = useReducedMotion()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Spotlight overlay */}
      {!reduced && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 1,
            background: isHovering
              ? `radial-gradient(${size}px circle at ${x}px ${y}px, ${color} 0%, transparent 70%)`
              : "transparent",
            opacity: isHovering ? opacity : 0,
            transition: "opacity 0.3s ease",
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  )
}
