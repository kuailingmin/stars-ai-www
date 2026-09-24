import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"
import { useReducedMotion } from "../hooks/useReducedMotion"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  scale?: boolean
  blur?: boolean
  distance?: number
  duration?: number
  delay?: number
  threshold?: number
  once?: boolean
  className?: string
  style?: CSSProperties
}

export function ScrollReveal({
  children,
  direction = "up",
  scale = false,
  blur = false,
  distance = 32,
  duration = 700,
  delay = 0,
  threshold = 0.15,
  once = true,
  className,
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) io.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, once, reduced])

  const getTransform = (): string => {
    const parts: string[] = []
    if (direction === "up") parts.push(`translateY(${distance}px)`)
    else if (direction === "down") parts.push(`translateY(-${distance}px)`)
    else if (direction === "left") parts.push(`translateX(${distance}px)`)
    else if (direction === "right") parts.push(`translateX(-${distance}px)`)
    if (scale) parts.push("scale(0.95)")
    return parts.join(" ") || "none"
  }

  const hiddenStyle: CSSProperties = reduced
    ? {}
    : {
        opacity: 1,
        transform: getTransform(),
        filter: blur ? "blur(4px)" : undefined,
      }

  const visibleStyle: CSSProperties = {
    opacity: 1,
    transform: "translateY(0) translateX(0) scale(1)",
    filter: blur ? "blur(0px)" : undefined,
    transitionProperty: blur ? "opacity, transform, filter" : "transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: `${delay}ms`,
  }

  const animStyle: CSSProperties = visible
    ? { ...visibleStyle, ...style }
    : { ...hiddenStyle, ...style }

  return (
    <div ref={ref} className={className} style={animStyle}>
      {children}
    </div>
  )
}
