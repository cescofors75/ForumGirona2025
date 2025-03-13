"use client"

import { useEffect, useState } from "react"

interface BarChartProps {
  data: { label: string; value: number }[]
  color: string
}

export function BarChart({ data, color }: BarChartProps) {
  const [renderedData, setRenderedData] = useState(data.map((item) => ({ ...item, currentValue: 0 })))
  const [width, setWidth] = useState(300)

  useEffect(() => {
    // Función para actualizar el ancho basado en el tamaño de la ventana
    const updateWidth = () => {
      const newWidth = window.innerWidth < 640 ? Math.min(250, window.innerWidth - 40) : 300
      setWidth(newWidth)
    }

    // Inicializar el ancho
    updateWidth()

    // Añadir listener para cambios de tamaño
    window.addEventListener("resize", updateWidth)

    // Limpiar listener
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderedData(data.map((item) => ({ ...item, currentValue: item.value })))
    }, 300)

    return () => clearTimeout(timer)
  }, [data])

  return (
    <div className="space-y-3 w-full" style={{ maxWidth: width }}>
      {renderedData.map((item, index) => (
        <div key={index} className="space-y-1">
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-[#f8e9f0]">{item.label}</span>
            <span className="text-[#f8e9f0] font-semibold">{item.currentValue}%</span>
          </div>
          <div className="h-2 bg-[#2a121e] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${item.currentValue}%`,
                backgroundColor: color,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

