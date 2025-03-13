"use client"

import { useEffect, useState } from "react"
import { User, Users, BarChartIcon } from "lucide-react"
import { BarChart } from "@/components/charts/bar-chart"
import { DoughnutChart } from "@/components/charts/doughnut-chart"

export default function Slide3() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`slide p-4 sm:p-10 h-full transition-opacity duration-500 ${animate ? "opacity-100" : "opacity-0"}`}>
      <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-6 text-[#b5123d]">Com funciona per cada usuari?</h2>
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-8 text-[#f8e9f0]">
        Solució adaptada a cada necessitat
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
        <div className="bg-[#2a121e]/80 p-6 rounded-lg border border-[#b5123d]/30 shadow-lg">
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#b5123d]/20 flex items-center justify-center">
              <User className="w-6 h-6 sm:w-8 sm:h-8 text-[#b5123d]" />
            </div>
          </div>
          <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-center text-[#b5123d]">
            Per al client final
          </h4>
          <p className="text-[#f8e9f0] mb-3 sm:mb-4 text-center italic text-sm sm:text-base">(experiència millorada)</p>

          <div className="mb-6">
            <DoughnutChart
              data={[
                { label: "Satisfacció del client", value: 72 },
                { label: "Experiència millorada", value: 68 },
                { label: "Recomanacions personalitzades", value: 65 },
              ]}
              colors={["#b5123d", "#d4365e", "#e05c7f"]}
              title="Millora de l'experiència"
            />
          </div>

          <ul className="space-y-2 text-[#f8e9f0]">
            <li className="flex items-start">
              <span className="mr-2">1.</span>
              <span>Escaneja QR a la taula → Selecciona plats → Rep recomanacions personalitzades</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2.</span>
              <span>Accés a informació detallada sobre el vi i les raons del maridatge</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3.</span>
              <span>Possibilitat de guardar preferències per a futures visites</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#2a121e]/80 p-6 rounded-lg border border-[#b5123d]/30 shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-[#b5123d]/20 flex items-center justify-center">
              <Users className="w-8 h-8 text-[#b5123d]" />
            </div>
          </div>
          <h4 className="text-xl font-semibold mb-4 text-center text-[#b5123d]">Per al personal de sala</h4>
          <p className="text-[#f8e9f0] mb-4 text-center italic">(treball facilititat)</p>

          <div className="mb-6">
            <BarChart
              data={[
                { label: "Reducció de temps", value: 32 },
                { label: "Millora d'eficiència", value: 45 },
                { label: "Reducció d'estrès", value: 28 },
              ]}
              color="#8e6f7b"
            />
          </div>

          <ul className="space-y-2 text-[#f8e9f0]">
            <li className="flex items-start">
              <span className="mr-2">1.</span>
              <span>Consulta ràpida a través del TPV o dispositiu mòbil</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2.</span>
              <span>Argumentari de venda professional i adaptat a cada plat</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3.</span>
              <span>Reducció de l&apos;estrès i millora de l&apos;eficiència del servei</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#2a121e]/80 p-6 rounded-lg border border-[#b5123d]/30 shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-[#b5123d]/20 flex items-center justify-center">
              <BarChartIcon className="w-8 h-8 text-[#b5123d]" />
            </div>
          </div>
          <h4 className="text-xl font-semibold mb-4 text-center text-[#b5123d]">Per als propietaris</h4>
          <p className="text-[#f8e9f0] mb-4 text-center italic">(optimització del negoci)</p>

          <div className="mb-6">
            <BarChart
              data={[
                { label: "Increment de vendes", value: 18 },
                { label: "Rotació d'estoc", value: 25 },
                { label: "Satisfacció de clients", value: 32 },
              ]}
              color="#b5123d"
            />
          </div>

          <ul className="space-y-2 text-[#f8e9f0]">
            <li className="flex items-start">
              <span className="mr-2">1.</span>
              <span>Dades d&apos;analítica sobre vendes i preferències</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2.</span>
              <span>Rotació optimitzada de l&apos;estoc de vins</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3.</span>
              <span>18% d&apos;increment mitjà en les vendes de vi</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

