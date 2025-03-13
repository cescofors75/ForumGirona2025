"use client"

import { useEffect, useRef, useState } from "react"

interface LineChartProps {
  data: { month: string; value: number }[]
  color: string
  title?: string
}

export function LineChart({ data, color, title }: LineChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [animationProgress, setAnimationProgress] = useState(0)
  const [width, setWidth] = useState(500)
  const [height, setHeight] = useState(200)

  useEffect(() => {
    // Función para actualizar dimensiones basadas en el tamaño de la ventana
    const updateDimensions = () => {
      const isMobile = window.innerWidth < 640
      const containerWidth = isMobile ? Math.min(window.innerWidth - 40, 300) : 500
      const containerHeight = isMobile ? 150 : 200
      setWidth(containerWidth)
      setHeight(containerHeight)
    }

    // Inicializar dimensiones
    updateDimensions()

    // Añadir listener para cambios de tamaño
    window.addEventListener("resize", updateDimensions)

    // Limpiar listener
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    let animationFrame: number
    const startTime = Date.now()
    const animationDuration = 1500

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / animationDuration, 1)
      setAnimationProgress(progress)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Actualizar dimensiones del canvas
    canvas.width = width
    canvas.height = height

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const padding = window.innerWidth < 640 ? 30 : 40
    const chartWidth = canvas.width - padding * 2
    const chartHeight = canvas.height - padding * 2

    // Find max value for scaling
    const maxValue = Math.max(...data.map((item) => item.value))

    // Draw title if provided
    if (title) {
      ctx.textAlign = "center"
      ctx.textBaseline = "top"
      ctx.fillStyle = "#f8e9f0"
      ctx.font = window.innerWidth < 640 ? "bold 12px sans-serif" : "bold 14px sans-serif"
      ctx.fillText(title, canvas.width / 2, 10)
    }

    // Draw axes
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, canvas.height - padding)
    ctx.lineTo(canvas.width - padding, canvas.height - padding)
    ctx.strokeStyle = "#8e6f7b"
    ctx.lineWidth = 1
    ctx.stroke()

    // Draw x-axis labels (months)
    ctx.textAlign = "center"
    ctx.textBaseline = "top"
    ctx.fillStyle = "#f8e9f0"
    ctx.font = window.innerWidth < 640 ? "8px sans-serif" : "10px sans-serif"

    // En móvil, mostrar menos etiquetas para evitar solapamiento
    const skipFactor = window.innerWidth < 640 ? 2 : 1

    data.forEach((item, index) => {
      if (window.innerWidth < 640 && index % skipFactor !== 0 && index !== data.length - 1) return

      const x = padding + (index / (data.length - 1)) * chartWidth
      ctx.fillText(item.month, x, canvas.height - padding + 10)
    })

    // Draw y-axis labels (values)
    ctx.textAlign = "right"
    ctx.textBaseline = "middle"

    for (let i = 0; i <= 5; i++) {
      const value = Math.round((maxValue / 5) * i)
      const y = canvas.height - padding - (i / 5) * chartHeight
      ctx.fillText(value.toString(), padding - 5, y)

      // Draw horizontal grid line
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(canvas.width - padding, y)
      ctx.strokeStyle = "#8e6f7b33"
      ctx.stroke()
    }

    // Draw line chart with animation
    ctx.beginPath()

    data.forEach((item, index) => {
      const progress = Math.min(1, animationProgress * (data.length / (index + 0.5)))
      if (progress <= 0) return

      const x = padding + (index / (data.length - 1)) * chartWidth
      const y = canvas.height - padding - (item.value / maxValue) * chartHeight * progress

      if (index === 0) {
        ctx.moveTo(x, canvas.height - padding)
        ctx.lineTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.strokeStyle = color
    ctx.lineWidth = 3
    ctx.stroke()

    // Add points at each data point
    data.forEach((item, index) => {
      const progress = Math.min(1, animationProgress * (data.length / (index + 0.5)))
      if (progress <= 0) return

      const x = padding + (index / (data.length - 1)) * chartWidth
      const y = canvas.height - padding - (item.value / maxValue) * chartHeight * progress

      ctx.beginPath()
      ctx.arc(x, y, window.innerWidth < 640 ? 3 : 4, 0, 2 * Math.PI)
      ctx.fillStyle = color
      ctx.fill()
      ctx.strokeStyle = "#2a121e"
      ctx.lineWidth = 1
      ctx.stroke()
    })

    // Add gradient fill under the line
    const gradient = ctx.createLinearGradient(0, padding, 0, canvas.height - padding)
    gradient.addColorStop(0, `${color}66`)
    gradient.addColorStop(1, `${color}00`)

    ctx.beginPath()
    ctx.moveTo(padding, canvas.height - padding)

    data.forEach((item, index) => {
      const progress = Math.min(1, animationProgress * (data.length / (index + 0.5)))
      if (progress <= 0) return

      const x = padding + (index / (data.length - 1)) * chartWidth
      const y = canvas.height - padding - (item.value / maxValue) * chartHeight * progress

      ctx.lineTo(x, y)
    })

    if (animationProgress > 0) {
      ctx.lineTo(padding + chartWidth, canvas.height - padding)
      ctx.closePath()
      ctx.fillStyle = gradient
      ctx.fill()
    }
  }, [data, color, animationProgress, title, width, height])

  return <canvas ref={canvasRef} width={width} height={height} className="mx-auto" />
}

