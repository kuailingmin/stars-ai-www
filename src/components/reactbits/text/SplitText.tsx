import { useEffect, useRef, useState, type CSSProperties } from "react"
import { useReducedMotion } from "../hooks/useReducedMotion"

interface SplitTextProps {
  text: string
  by?: "char" | "word"
  stagger?: number
  duration?: number
  distance?: number
  threshold?: number
  className?: string
  style?: CSSProperties
}

export function SplitText({
  text,
  by = "char",
  stagger = 30,
  duration = 500,
  distance = 20,
  threshold = 0.15,
  className,
  style,
}: SplitTextProps) {
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

  const units = by === "word" ? text.split(/(\s+)/) : text.split("")

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-block", ...style }}
      aria-label={text}
    >
      {units.map((unit, i) => {
        const isSpace = /^\s+$/.test(unit)
        if (isSpace) return <span key={`s-${i}`}>&nbsp;</span>
        return (
          <span
            key={`${unit}-${i}`}
            aria-hidden
            style={{
              display: "inline-block",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : `translateY(${distance}px)`,
              transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
              transitionDelay: visible ? `${i * stagger}ms` : "0ms",
              willChange: "opacity, transform",
            }}
          >
            {unit}
          </span>
        )
      })}
    </span>
  )
}
