import { useEffect, useRef } from "react"

/**
 * Full-page animated tech grid background rendered to a fixed canvas.
 * Renders a perspective dot-grid, drifting glow orbs, and a horizontal scan line.
 *
 * Performance optimizations:
 * - Canvas sized to VIEWPORT only (not entire page height)
 * - All drawing uses scroll offset for correct positioning
 * - Static grid lines cached to offscreen canvas
 * - Throttled to ~30fps
 * - Pauses when tab is hidden
 */
export function TechGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio, 2)

    interface Orb {
      x: number
      y: number
      r: number
      vx: number
      vy: number
      hue: number
      alpha: number
    }
    let orbs: Orb[] = []
    let isVisible = true
    let linesCanvas: HTMLCanvasElement | null = null

    const SPACING = 80

    // Canvas = viewport size only (NOT page height)
    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initOrbs()
      cacheGridLines()
    }

    const initOrbs = () => {
      // Orbs distributed across viewport (reduced from 6 to 3)
      orbs = Array.from({ length: 3 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 180 + Math.random() * 250,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.1,
        hue: 200 + Math.random() * 60,
        alpha: 0.03 + Math.random() * 0.04,
      }))
    }

    // Cache static grid lines (viewport-sized, scroll-aware)
    const cacheGridLines = () => {
      linesCanvas = document.createElement("canvas")
      linesCanvas.width = w * dpr
      linesCanvas.height = h * dpr
      const lc = linesCanvas.getContext("2d")
      if (!lc) return
      lc.setTransform(dpr, 0, 0, dpr, 0, 0)

      lc.strokeStyle = "hsla(215, 60%, 40%, 0.03)"
      lc.lineWidth = 0.5

      const scrollY = window.scrollY || 0
      const startRow = Math.floor(scrollY / SPACING)
      const endRow = Math.ceil((scrollY + h) / SPACING) + 1
      const endCol = Math.ceil(w / SPACING) + 1

      for (let row = startRow; row < endRow; row++) {
        const screenY = row * SPACING - scrollY
        lc.beginPath()
        lc.moveTo(0, screenY)
        lc.lineTo(w, screenY)
        lc.stroke()
      }
      for (let col = 0; col < endCol; col++) {
        const x = col * SPACING
        lc.beginPath()
        lc.moveTo(x, 0)
        lc.lineTo(x, h)
        lc.stroke()
      }
    }

    const drawGrid = (time: number) => {
      const scrollY = window.scrollY || 0
      const startRow = Math.floor(scrollY / SPACING)
      const endRow = Math.ceil((scrollY + h) / SPACING) + 1
      const endCol = Math.ceil(w / SPACING) + 1

      for (let row = startRow; row < endRow; row++) {
        for (let col = 0; col < endCol; col++) {
          const x = col * SPACING
          const y = row * SPACING - scrollY // screen coords

          let orbInfluence = 0
          for (const orb of orbs) {
            const dx = x - orb.x
            const dy = y - orb.y
            const distSq = dx * dx + dy * dy
            const threshold = orb.r * 1.5
            if (distSq < threshold * threshold) {
              const dist = Math.sqrt(distSq)
              orbInfluence = Math.max(orbInfluence, 1 - dist / threshold)
            }
          }

          const shimmer = Math.sin(time * 0.001 + col * 0.3 + row * 0.3) * 0.3 + 0.7
          const alpha = (0.06 + orbInfluence * 0.12) * shimmer

          ctx.beginPath()
          ctx.arc(x, y, 0.8 + orbInfluence * 0.6, 0, Math.PI * 2)
          ctx.fillStyle = `hsla(210, 80%, 65%, ${alpha})`
          ctx.fill()
        }
      }
    }

    const drawOrbs = () => {
      for (const orb of orbs) {
        orb.x += orb.vx
        orb.y += orb.vy
        if (orb.x < -orb.r) orb.x = w + orb.r
        if (orb.x > w + orb.r) orb.x = -orb.r
        if (orb.y < -orb.r) orb.y = h + orb.r
        if (orb.y > h + orb.r) orb.y = -orb.r

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r)
        gradient.addColorStop(0, `hsla(${orb.hue}, 100%, 60%, ${orb.alpha * 1.5})`)
        gradient.addColorStop(0.5, `hsla(${orb.hue}, 100%, 50%, ${orb.alpha * 0.5})`)
        gradient.addColorStop(1, `hsla(${orb.hue}, 100%, 40%, 0)`)
        ctx.fillStyle = gradient
        ctx.fillRect(orb.x - orb.r, orb.y - orb.r, orb.r * 2, orb.r * 2)
      }
    }

    const drawScanLine = (time: number) => {
      const period = 12000
      const progress = (time % period) / period
      const y = progress * h

      const gradient = ctx.createLinearGradient(0, y - 40, 0, y + 40)
      gradient.addColorStop(0, "hsla(195, 100%, 60%, 0)")
      gradient.addColorStop(0.5, "hsla(195, 100%, 60%, 0.06)")
      gradient.addColorStop(1, "hsla(195, 100%, 60%, 0)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, y - 40, w, 80)
    }

    const FRAME_INTERVAL = 1000 / 30
    let lastFrameTime = 0

    const draw = (time: number) => {
      animId = requestAnimationFrame(draw)
      if (document.hidden || !isVisible) return
      if (time - lastFrameTime < FRAME_INTERVAL) return
      lastFrameTime = time

      ctx.clearRect(0, 0, w, h)

      if (linesCanvas) {
        ctx.drawImage(linesCanvas, 0, 0, w, h)
      }

      drawGrid(time)
      drawOrbs()
      drawScanLine(time)
    }

    resize()
    animId = requestAnimationFrame(draw)

    // Re-cache grid lines when scroll position changes
    let scrollTick = false
    const onScroll = () => {
      if (!scrollTick) {
        scrollTick = true
        requestAnimationFrame(() => {
          cacheGridLines()
          scrollTick = false
        })
      }
    }

    window.addEventListener("resize", resize)
    window.addEventListener("scroll", onScroll, { passive: true })

    // Pause when Hero section is not visible (StarrySky takes over there)
    const heroEl = document.querySelector('section')
    if (heroEl) {
      const observer = new IntersectionObserver(
        ([entry]) => { isVisible = entry.isIntersecting },
        { threshold: 0 },
      )
      observer.observe(heroEl)
    }

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
