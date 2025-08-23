'use client'

import React, { useEffect, useRef } from 'react'

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle system
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      opacity: number
      life: number
      maxLife: number
    }> = []

    const colors = ['#00F5FF', '#9D4EDD', '#FF0080', '#39FF14', '#00D4FF']

    // Create particles
    const createParticle = (x?: number, y?: number) => ({
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.8 + 0.2,
      life: 0,
      maxLife: Math.random() * 300 + 200
    })

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle())
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 8, 20, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i]
        
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        // Update opacity based on life
        const lifeRatio = particle.life / particle.maxLife
        particle.opacity = Math.max(0, 1 - lifeRatio)

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Remove dead particles
        if (particle.life >= particle.maxLife) {
          particles.splice(i, 1)
          particles.push(createParticle()) // Create new particle
          continue
        }

        // Draw particle
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particle.color
        ctx.shadowBlur = 10
        ctx.shadowColor = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        // Draw connections between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j]
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const connectionOpacity = Math.max(0, (100 - distance) / 100) * 0.3
            ctx.save()
            ctx.globalAlpha = connectionOpacity * particle.opacity * other.opacity
            ctx.strokeStyle = particle.color
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    // Mouse interaction
    let mouse = { x: 0, y: 0 }
    
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      
      // Create particles near mouse
      if (Math.random() < 0.1) {
        particles.push(createParticle(
          mouse.x + (Math.random() - 0.5) * 50,
          mouse.y + (Math.random() - 0.5) * 50
        ))
        if (particles.length > 100) {
          particles.shift()
        }
      }
    }

    canvas.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}

export default ParticleBackground