import { useEffect, useRef } from "react"

/**
 * Reference-style independent star twinkling with compositor-only meteors.
 */

interface Star {
  x: number
  y: number
  r: number
  baseAlpha: number
  twinkleSpeed: number
  twinkleOffset: number
  hue: number
}

export function StarrySky() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId = 0
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio, 2)

    let stars: Star[] = []
    let resizeTimer = 0

    const resize = () => {
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initStars()
      drawFrame(0)
    }

    const initStars = () => {
      const count = Math.min(620, Math.max(280, Math.floor((w * h) / 1500)))
      stars = Array.from({ length: count }, () => {
        const brightness = Math.random()
        const hue = Math.random() < 0.85
          ? 200 + Math.random() * 40
          : 30 + Math.random() * 30
        const sizeTier = Math.random()
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: sizeTier < 0.75
            ? 0.3 + Math.random() * 0.8
            : sizeTier < 0.95
              ? 1.0 + Math.random() * 1.3
              : 1.4 + Math.random() * 1.5,
          baseAlpha: 0.45 + brightness * 0.55,
          twinkleSpeed: 0.3 + Math.random() * 2.2,
          twinkleOffset: Math.random() * Math.PI * 2,
          hue,
        }
      })
    }

    const drawFrame = (time: number) => {
      const bgGrad = ctx.createRadialGradient(
        w * 0.5, h * 0.3, 0,
        w * 0.5, h * 0.3, Math.max(w, h) * 0.8,
      )
      bgGrad.addColorStop(0, "hsla(222, 50%, 8%, 1)")
      bgGrad.addColorStop(0.5, "hsla(222, 47%, 5%, 1)")
      bgGrad.addColorStop(1, "hsla(225, 50%, 3%, 1)")
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, w, h)

      for (const s of stars) {
        const twinkle = Math.sin(time * 0.001 * s.twinkleSpeed + s.twinkleOffset)
        const alpha = s.baseAlpha * (0.55 + 0.45 * twinkle)
        if (alpha < 0.06) continue

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        const lightness = s.r > 1.5 ? 100 : s.r > 0.8 ? 88 : 82 + s.baseAlpha * 10
        ctx.fillStyle = `hsla(${s.hue}, 55%, ${lightness}%, ${alpha})`
        ctx.fill()

        if (s.r > 0.8) {
          const glowRadius = s.r * (s.r > 1.5 ? 4 : 3)
          const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glowRadius)
          glow.addColorStop(0, `hsla(${s.hue}, 70%, 90%, ${alpha * 0.45})`)
          glow.addColorStop(0.5, `hsla(${s.hue}, 60%, 85%, ${alpha * 0.15})`)
          glow.addColorStop(1, `hsla(${s.hue}, 60%, 85%, 0)`)
          ctx.fillStyle = glow
          ctx.fillRect(s.x - glowRadius, s.y - glowRadius, glowRadius * 2, glowRadius * 2)

          if (s.r > 1.8 && alpha > 0.6) {
            ctx.strokeStyle = `hsla(${s.hue}, 55%, 96%, ${alpha * 0.35})`
            ctx.lineWidth = 0.65
            const spike = s.r * 4
            ctx.beginPath()
            ctx.moveTo(s.x - spike, s.y)
            ctx.lineTo(s.x + spike, s.y)
            ctx.moveTo(s.x, s.y - spike)
            ctx.lineTo(s.x, s.y + spike)
            ctx.stroke()
          }
        }
      }
    }

    resize()

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const FRAME_INTERVAL = 1000 / 24
    let lastFrameTime = 0

    const draw = (time: number) => {
      animId = requestAnimationFrame(draw)
      if (document.hidden || time - lastFrameTime < FRAME_INTERVAL) return
      lastFrameTime = time
      drawFrame(time)
    }

    if (!reducedMotion) animId = requestAnimationFrame(draw)

    const onResize = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(resize, 120)
    }

    window.addEventListener("resize", onResize)
    return () => {
      cancelAnimationFrame(animId)
      window.clearTimeout(resizeTimer)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
      <div className="home-meteor home-meteor--one" aria-hidden="true" />
      <div className="home-meteor home-meteor--two" aria-hidden="true" />
    </>
  )
}
