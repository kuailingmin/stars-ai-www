import {
  Children,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react"
import { useReducedMotion } from "../hooks/useReducedMotion"

interface StaggeredListProps {
  children: ReactNode
  stagger?: number
  direction?: "up" | "left" | "right"
  distance?: number
  duration?: number
  threshold?: number
  className?: string
  style?: CSSProperties
}

export function StaggeredList({
  children,
  stagger = 80,
  direction = "up",
  distance = 24,
  duration = 600,
  threshold = 0.1,
  className,
  style,
}: StaggeredListProps) {
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
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, reduced])

  const getTranslate = (): string => {
    if (direction === "up") return `translateY(${distance}px)`
    if (direction === "left") return `translateX(${distance}px)`
    if (direction === "right") return `translateX(-${distance}px)`
    return `translateY(${distance}px)`
  }

  const childArray = Children.toArray(children)

  return (
    <div ref={ref} className={className} style={style}>
      {childArray.map((child, i) => {
        const delay = i * stagger
        const itemStyle: CSSProperties =
          reduced || visible
            ? {
                opacity: 1,
                transform: "none",
                transition: reduced
                  ? "none"
                  : `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
              }
            : {
                opacity: 0,
                transform: getTranslate(),
              }
        return (
          <div key={i} style={itemStyle}>
            {child}
          </div>
        )
      })}
    </div>
  )
}
