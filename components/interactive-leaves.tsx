"use client"
import { useEffect, useRef, useCallback } from "react"

interface Leaf {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  rotation: number
  rotationSpeed: number
  size: number
  opacity: number
  swayOffset: number
}

export default function InteractiveLeaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const leavesRef = useRef<Leaf[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()
  const lastFrameTime = useRef(0)
  const frameCount = useRef(0)
  const isVisible = useRef(true)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (frameCount.current % 2 === 0) {
      // Only update every other frame
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
  }, [])

  const handleVisibilityChange = useCallback(() => {
    isVisible.current = !document.hidden
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize leaves
    const initLeaves = () => {
      leavesRef.current = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: 1 + Math.random() * 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        size: 20 + Math.random() * 15,
        opacity: 0.4 + Math.random() * 0.4,
        swayOffset: Math.random() * Math.PI * 2,
      }))
    }
    initLeaves()

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("visibilitychange", handleVisibilityChange)

    const animate = (currentTime: number) => {
      // Skip animation if tab is not visible
      if (!isVisible.current) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      // Limit to ~30fps instead of 60fps for better performance
      if (currentTime - lastFrameTime.current < 33) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      lastFrameTime.current = currentTime
      frameCount.current++

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      leavesRef.current.forEach((leaf) => {
        // Physics simulation
        leaf.swayOffset += 0.02
        leaf.x += leaf.vx + Math.sin(leaf.swayOffset) * 0.5
        leaf.y += leaf.vy
        leaf.rotation += leaf.rotationSpeed

        if (frameCount.current % 3 === 0) {
          const dx = leaf.x - mouseRef.current.x
          const dy = leaf.y - mouseRef.current.y
          const mouseDistanceSquared = dx * dx + dy * dy // Avoid expensive sqrt

          if (mouseDistanceSquared < 2500) {
            // 50 * 50
            const mouseDistance = Math.sqrt(mouseDistanceSquared)
            const angle = Math.atan2(dy, dx)
            const force = (50 - mouseDistance) / 50
            leaf.vx += Math.cos(angle) * force * 0.5
            leaf.vy += Math.sin(angle) * force * 0.3
            leaf.rotationSpeed += force * 5
          }
        }

        // Apply drag to slow down after mouse interaction
        leaf.vx *= 0.98
        leaf.vy = Math.max(0.5, leaf.vy * 0.99)
        leaf.rotationSpeed *= 0.95

        // Reset leaf when it goes off screen
        if (leaf.y > canvas.height + 50 || leaf.x < -50 || leaf.x > canvas.width + 50) {
          leaf.x = Math.random() * canvas.width
          leaf.y = -50
          leaf.vx = (Math.random() - 0.5) * 0.5
          leaf.vy = 1 + Math.random() * 2
          leaf.rotationSpeed = (Math.random() - 0.5) * 2
        }

        ctx.save()
        ctx.globalAlpha = leaf.opacity
        ctx.translate(leaf.x, leaf.y)
        ctx.rotate((leaf.rotation * Math.PI) / 180)
        ctx.font = `${leaf.size}px Arial`
        ctx.fillText("🍃", -leaf.size / 2, leaf.size / 2)
        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [handleMouseMove, handleVisibilityChange])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
