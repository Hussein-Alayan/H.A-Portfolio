"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Particle system
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      baseX: number
      baseY: number
    }> = []

    // Create particles
    const particleCount = 80 // Increased particle count
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        baseX: x,
        baseY: y,
      })
    }

    // Animation loop
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, i) => {
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 200

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 0.5
          particle.vx += (dx / distance) * force
          particle.vy += (dy / distance) * force
        }

        particle.vx *= 0.95
        particle.vy *= 0.95

        const returnForce = 0.02
        particle.vx += (particle.baseX - particle.x) * returnForce
        particle.vy += (particle.baseY - particle.y) * returnForce

        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < -50) particle.x = canvas.width + 50
        if (particle.x > canvas.width + 50) particle.x = -50
        if (particle.y < -50) particle.y = canvas.height + 50
        if (particle.y > canvas.height + 50) particle.y = -50

        const sizeMultiplier = distance < maxDistance ? 1 + (1 - distance / maxDistance) * 0.5 : 1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * sizeMultiplier, 0, Math.PI * 2)
        ctx.fillStyle =
          distance < maxDistance
            ? `rgba(99, 102, 241, ${0.5 + (1 - distance / maxDistance) * 0.3})`
            : "rgba(99, 102, 241, 0.3)"
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - distance / 150)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      {/* Animated gradient background */}
      <motion.div
        className="fixed inset-0 -z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-indigo-950/20" />
      </motion.div>

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-40" style={{ pointerEvents: "none" }} />

      {/* Radial gradient overlay */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
    </>
  )
}
