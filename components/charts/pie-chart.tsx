"use client"

import { useEffect, useRef, useState } from "react"

interface PieChartProps {
  data: { label: string; value: number }[]
  colors: string[]
}

export function PieChart({ data, colors }: PieChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [width, setWidth] = useState(300)
  const [height, setHeight] = useState(300)
  const total = data.reduce((sum, item) => sum + item.value, 0)

  useEffect(() => {
    // Función para actualizar dimensiones basadas en el tamaño de la ventana
    const updateDimensions = () => {
      const isMobile = window.innerWidth < 640
      const newWidth = isMobile ? Math.min(250, window.innerWidth - 40) : 300
      const newHeight = isMobile ? 200 : 300
      setWidth(newWidth)
      setHeight(newHeight)
    }

    // Inicializar dimensiones
    updateDimensions()

    // Añadir listener para cambios de tamaño
    window.addEventListener("resize", updateDimensions)

    // Limpiar listener
    return () => window.removeEventListener("resize", updateDimensions)
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

    // Draw pie chart
    let startAngle = 0
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 10

    data.forEach((item, index) => {
      const sliceAngle = (item.value / total) * 2 * Math.PI
      const endAngle = startAngle + sliceAngle

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, endAngle)
      ctx.closePath()

      ctx.fillStyle = colors[index % colors.length]
      ctx.fill()

      startAngle = endAngle
    })

    // Draw a white circle in the middle for donut effect
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI)
    ctx.fillStyle = "#2a121e"
    ctx.fill()
  }, [data, colors, total, width, height])

  return (
    <div className="space-y-3 mx-auto" style={{ maxWidth: width }}>
      <div className="relative">
        <canvas ref={canvasRef} width={width} height={height} className="mx-auto" />
      </div>
      <div className="grid grid-cols-1 gap-1 sm:gap-2 text-xs sm:text-sm">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm"
              style={{ backgroundColor: colors[index % colors.length] }}
            />
            <span className="text-[#f8e9f0] text-xs sm:text-sm">{item.label}</span>
            <span className="text-[#f8e9f0] ml-auto font-semibold text-xs sm:text-sm">
              {item.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

