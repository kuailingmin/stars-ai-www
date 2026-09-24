import { useRef, type CSSProperties, type ReactNode } from "react"
import { useMousePosition } from "../hooks/useMousePosition"
import { useReducedMotion } from "../hooks/useReducedMotion"

interface TiltCardProps {
  children: ReactNode
  /** Max tilt angle in degrees */
  maxTilt?: number
  /** Perspective value in px */
  perspective?: number
  /** Glare effect */
  glare?: boolean
  /** Max glare opacity */
  glareOpacity?: number
  className?: string
  style?: CSSProperties
}

export function TiltCard({
  children,
  maxTilt = 8,
  perspective = 1000,
  glare = true,
  glareOpacity = 0.12,
  className,
  style,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { x, y, isHovering } = useMousePosition(ref)
  const reduced = useReducedMotion()

  let tiltX = 0
  let tiltY = 0
  let glareX = 50
  let glareY = 50

  if (isHovering && !reduced && ref.current) {
    const { offsetWidth: w, offsetHeight: h } = ref.current
    const px = x / w
    const py = y / h
    tiltX = (py - 0.5) * -maxTilt * 2
    tiltY = (px - 0.5) * maxTilt * 2
    glareX = px * 100
    glareY = py * 100
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        perspective: `${perspective}px`,
        ...style,
      }}
    >
      <div
        style={{
          transform: isHovering && !reduced
            ? `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: isHovering ? "transform 0.1s ease-out" : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          willChange: "transform",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
        {glare && isHovering && !reduced && (
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              pointerEvents: "none",
              background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${glareOpacity}), transparent 60%)`,
            }}
          />
        )}
      </div>
    </div>
  )
}
