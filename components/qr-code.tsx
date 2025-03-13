"use client"

import { useEffect, useRef } from "react"

interface QRCodeProps {
  url: string
  size: number
}

export function QRCode({ url, size }: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Función simple para dibujar un QR code básico
    // En una aplicación real, usaríamos una librería como qrcode.js
    const drawQRCode = () => {
      const cellSize = size / 33 // 33x33 grid para un QR code simple

      // Limpiar el canvas
      ctx.fillStyle = "white"
      ctx.fillRect(0, 0, size, size)

      // Dibujar el patrón de posicionamiento (esquinas)
      const drawPositioningPattern = (x: number, y: number) => {
        // Cuadrado exterior
        ctx.fillStyle = "#b5123d"
        ctx.fillRect(x * cellSize, y * cellSize, 7 * cellSize, 7 * cellSize)

        // Cuadrado interior
        ctx.fillStyle = "white"
        ctx.fillRect((x + 1) * cellSize, (y + 1) * cellSize, 5 * cellSize, 5 * cellSize)

        // Cuadrado central
        ctx.fillStyle = "#b5123d"
        ctx.fillRect((x + 2) * cellSize, (y + 2) * cellSize, 3 * cellSize, 3 * cellSize)
      }

      // Dibujar los patrones de posicionamiento en las esquinas
      drawPositioningPattern(0, 0) // Superior izquierda
      drawPositioningPattern(26, 0) // Superior derecha
      drawPositioningPattern(0, 26) // Inferior izquierda

      // Dibujar algunos datos aleatorios para simular un QR code
      ctx.fillStyle = "#b5123d"

      // Patrón aleatorio pero consistente
      const seed = url.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
      const random = (i: number) => {
        return (seed * (i + 1)) % 83 > 41
      }

      for (let i = 0; i < 600; i++) {
        if (random(i)) {
          const x = 7 + (i % 19)
          const y = 7 + Math.floor(i / 19)

          // Evitar dibujar sobre los patrones de posicionamiento
          if ((x < 7 && y < 7) || (x > 25 && y < 7) || (x < 7 && y > 25)) {
            continue
          }

          ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize)
        }
      }

      // Dibujar el logo de Baco en el centro
      ctx.fillStyle = "#b5123d"
      ctx.beginPath()
      ctx.arc(size / 2, size / 2, 4 * cellSize, 0, 2 * Math.PI)
      ctx.fill()

      ctx.fillStyle = "white"
      ctx.beginPath()
      ctx.arc(size / 2, size / 2, 2 * cellSize, 0, 2 * Math.PI)
      ctx.fill()
    }

    drawQRCode()
  }, [url, size])

  return <canvas ref={canvasRef} width={size} height={size} />
}

