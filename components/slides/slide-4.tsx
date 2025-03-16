"use client"

import { useEffect, useState } from "react"
import { PieChart } from "@/components/charts/pie-chart"
import { LineChart } from "@/components/charts/line-chart"
import { DollarSign, UsersIcon, Clock, Users, TrendingUp, BarChart3, Target, Award, Zap } from "lucide-react"
//import { QRCode } from "@/components/qr-code"

export default function Slide4() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`slide p-4 sm:p-10 h-full transition-opacity duration-500 ${animate ? "opacity-100" : "opacity-0"}`}>
      <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-6 text-[#b5123d]">Oportunitat d&apos;inversió</h2>
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-8 text-[#f8e9f0]">El futur del vi és ara</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        <div>
          <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-[#b5123d]">Mercat potencial:</h4>
          <div className="mb-6">
            <PieChart
              data={[
                { label: "Restaurants a Catalunya", value:17500 },
                { label: "Supermercats amb secció especialitzada", value: 435 },
              ]}
              colors={["#b5123d", "#8e6f7b"]}
            />
          </div>

          <div className="bg-[#2a121e]/80 p-6 rounded-lg border border-[#b5123d]/30 shadow-lg mb-6">
            <h4 className="text-xl font-semibold mb-4 text-[#b5123d]">Model de negoci:</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-[#b5123d]/20 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-[#b5123d]" />
                  </div>
                </div>
                <p className="text-[#f8e9f0] text-sm">Subscripció mensual</p>
                <p className="text-[#b5123d] font-bold">75€-199€/mes</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-[#b5123d]/20 flex items-center justify-center">
                    <UsersIcon className="w-6 h-6 text-[#b5123d]" />
                  </div>
                </div>
                <p className="text-[#f8e9f0] text-sm">ROI projectat</p>
                <p className="text-[#b5123d] font-bold">2,2x</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-[#b5123d]/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#b5123d]" />
                  </div>
                </div>
                <p className="text-[#f8e9f0] text-sm">Recuperació</p>
                <p className="text-[#b5123d] font-bold">8-12 mesos</p>
              </div>
            </div>
          </div>
          <div className="bg-[#2a121e]/80 p-6 rounded-lg border border-[#b5123d]/30 shadow-lg mb-6">
            <h4 className="text-xl font-semibold mb-4 text-[#b5123d]">Equip expert:</h4>
            <p className="text-[#f8e9f0]">
              Liderat per Melcior Montero (11 anys d'experiencia al Celler de Can Roca) i Cesco Fors Enginyer Software.
            </p>
          </div>
       
        </div>
      
        <div className="flex flex-col justify-between">
          <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden mb-4 sm:mb-6 bg-[#2a121e]/80 p-3 sm:p-4 border border-[#b5123d]/30">
            <h4 className="text-xl font-semibold mb-4 text-[#b5123d]">Expansió planificada:</h4>
            <LineChart
              data={[
                { month: "Gen", value: 5 },
                { month: "Feb", value: 12 },
                { month: "Mar", value: 20 },
                { month: "Abr", value: 35 },
                { month: "Mai", value: 50 },
                { month: "Jun", value: 70 },
                { month: "Jul", value: 90 },
                { month: "Ago", value: 110 },
                { month: "Set", value: 130 },
                { month: "Oct", value: 150 },
                { month: "Nov", value: 170 },
                { month: "Des", value: 190 },
              ]}
              color="#b5123d"
              title="Creixement d'establiments (12 mesos)"
            />
          </div>
        
          <div className="bg-[#b5123d] p-8 rounded-lg shadow-lg">
            <h4 className="text-2xl font-bold mb-6 text-white text-center">Contacte</h4>
            <div className="text-center text-white mb-4">
              <p className="text-lg">info@baco.cat</p>
              <p className="text-lg">www.baco.cat</p>
            </div>
            <div className="flex flex-col items-center">
              <button className="bg-white text-[#b5123d] px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors mb-6">
                Sol·licitar demostració
              </button>

              <div className="flex flex-col items-center">
                <div className="bg-white p-2 rounded-lg mb-2">
                <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://baco.cat/&color=b5123d&bgcolor=f8e9f0" 
            alt="BACO.cat QR Code" 
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
                </div>
                <p className="text-white text-sm">Escaneja per visitar baco.cat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

