import { useRef, useCallback, useState, type CSSProperties, type ReactNode } from "react"
import { useReducedMotion } from "../hooks/useReducedMotion"

interface MagneticElementProps {
  children: ReactNode
  /** Max displacement in px */
  strength?: number
  /** Transition duration when returning to center */
  returnDuration?: number
  className?: string
  style?: CSSProperties
}

export function MagneticElement({
  children,
  strength = 12,
  returnDuration = 0.4,
  className,
  style,
}: MagneticElementProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const reduced = useReducedMotion()

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduced) return
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)
      setOffset({ x: dx * strength, y: dy * strength })
    },
    [strength, reduced],
  )

  const onLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 })
    setHovering(false)
  }, [])

  const onEnter = useCallback(() => {
    setHovering(true)
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        display: "inline-block",
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: hovering
          ? "transform 0.15s ease-out"
          : `transform ${returnDuration}s cubic-bezier(0.16, 1, 0.3, 1)`,
        willChange: "transform",
        ...style,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={onEnter}
    >
      {children}
    </div>
  )
}
