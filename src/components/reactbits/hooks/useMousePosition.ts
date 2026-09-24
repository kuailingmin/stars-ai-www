import { useCallback, useEffect, useRef, useState } from "react"

interface MousePosition {
  x: number
  y: number
  isHovering: boolean
}

export function useMousePosition<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
) {
  const [pos, setPos] = useState<MousePosition>({ x: 0, y: 0, isHovering: false })
  const rafId = useRef(0)

  const onMove = useCallback(
    (e: MouseEvent) => {
      cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          isHovering: true,
        })
      })
    },
    [ref],
  )

  const onLeave = useCallback(() => {
    cancelAnimationFrame(rafId.current)
    setPos((p) => ({ ...p, isHovering: false }))
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.addEventListener("mousemove", onMove)
    el.addEventListener("mouseleave", onLeave)
    return () => {
      cancelAnimationFrame(rafId.current)
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
    }
  }, [ref, onMove, onLeave])

  return pos
}
