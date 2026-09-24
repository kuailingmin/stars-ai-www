import { useEffect, useRef, useState, type CSSProperties } from "react"
import { useReducedMotion } from "../hooks/useReducedMotion"

interface BlurTextProps {
  text: string
  delay?: number
  duration?: number
  blur?: number
  threshold?: number
  className?: string
  style?: CSSProperties
}

export function BlurText({
  text,
  delay = 0,
  duration = 800,
  blur = 10,
  threshold = 0.15,
  className,
  style,
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
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
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [reduced, threshold])

  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: "inline-block",
        opacity: visible ? 1 : 0,
        filter: visible ? "blur(0px)" : `blur(${blur}px)`,
        transform: visible ? "translateY(0) scale(1)" : "translateY(4px) scale(0.98)",
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, filter, transform",
        ...style,
      }}
    >
      {text}
    </span>
  )
}
