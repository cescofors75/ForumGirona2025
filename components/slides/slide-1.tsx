"use client"

import { useEffect, useState } from "react"
import { BarChart } from "@/components/charts/bar-chart"

export default function Slide1() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`slide p-4 sm:p-10 h-full transition-opacity duration-500 ${animate ? "opacity-100" : "opacity-0"}`}>
      <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-6 text-[#b5123d]">El problema del sector</h2>
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-8 text-[#f8e9f0]">
        La falta de professionals qualificats a l&apos;hostaleria
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        <div>
          <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-[#b5123d]">
            Escassetat de sommeliers qualificats:
          </h4>
          <div className="mb-8">
            <BarChart
              data={[
                { label: "Restaurants sense sommelier a temps complet", value: 78 },
                { label: "Establiments amb personal sense coneixements suficients", value: 65 },
              ]}
              color="#b5123d"
            />
          </div>

          <h4 className="text-xl font-semibold mb-4 text-[#b5123d]">Conseqüències directes:</h4>
          <div className="mb-4">
            <BarChart
              data={[
                { label: "Reducció en valoracions positives", value: 32 },
                { label: "Vendes potencials de vi no realitzades", value: 40 },
              ]}
              color="#8e6f7b"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="bg-[#2a121e]/80 p-4 sm:p-6 rounded-lg border border-[#b5123d]/30 shadow-lg mt-4 sm:mt-0">
            <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-[#b5123d]">Nous reptes:</h4>
            <p className="text-base sm:text-lg text-[#f8e9f0] leading-relaxed">
              Democratitzar l&apos;accés a coneixement enològic expert per a:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-[#f8e9f0]">
              <li>Millorar l&apos;experiència del client</li>
              <li>Incrementar les vendes de vi</li>
              <li>Reduir la pressió sobre el personal existent</li>
              <li>Oferir un servei professional sense necessitat d&apos;experts costosos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

