import { useEffect, useRef, useState, useCallback, type CSSProperties } from "react"
import { useReducedMotion } from "../hooks/useReducedMotion"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

interface DecryptedTextProps {
  text: string
  speed?: number
  maxIterations?: number
  threshold?: number
  revealOnHover?: boolean
  className?: string
  style?: CSSProperties
}

export function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  threshold = 0.15,
  revealOnHover = false,
  className,
  style,
}: DecryptedTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(text)
  const [triggered, setTriggered] = useState(false)
  const reduced = useReducedMotion()

  const scramble = useCallback(() => {
    if (reduced) {
      setDisplay(text)
      return
    }
    let iteration = 0
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " "
            if (i < iteration) return text[i]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join(""),
      )
      iteration += 1 / maxIterations
      if (iteration >= text.length) {
        setDisplay(text)
        clearInterval(interval)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed, maxIterations, reduced])

  useEffect(() => {
    if (reduced) {
      setDisplay(text)
      setTriggered(true)
      return
    }
    const el = ref.current
    if (!el) return
    setDisplay(
      text
        .split("")
        .map((c) => (c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]))
        .join(""),
    )
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTriggered(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [reduced, text, threshold])

  useEffect(() => {
    if (!triggered || reduced) return
    return scramble()
  }, [triggered, scramble, reduced])

  const handleMouseEnter = () => {
    if (revealOnHover && !reduced) {
      scramble()
    }
  }

  return (
    <span
      ref={ref}
      className={className}
      style={{ fontFamily: "monospace", letterSpacing: "0.02em", ...style }}
      onMouseEnter={handleMouseEnter}
    >
      {display}
    </span>
  )
}
