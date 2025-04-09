"use client"

import { useEffect, useState } from "react"
import { PieChart } from "@/components/charts/pie-chart"
import { LineChart } from "@/components/charts/line-chart"
import { User, Terminal, DollarSign, UsersIcon, Clock, TrendingUp, BarChart3, Target, Award, Zap, PiggyBank, ChartPie, MessageSquare, Smartphone } from "lucide-react"

export default function SlideInversores() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`slide p-4 sm:p-10 h-full transition-opacity duration-500 ${animate ? "opacity-100" : "opacity-0"}`}>
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-[#b5123d]">Oportunitat d&apos;inversió</h2>
      <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-6 text-[#f8e9f0]">
        Proposta de valor per als inversors
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          {/* Mercat potencial section */}
          <div className="bg-[#2a121e]/80 p-4 rounded-lg border border-[#b5123d]/30 shadow-lg mb-4">
            <h4 className="text-lg font-semibold mb-2 text-[#b5123d]">Mercat potencial:</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f8e9f0]">17.500</div>
                <p className="text-sm text-[#f8e9f0]">Restaurants a Catalunya</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f8e9f0]">435</div>
                <p className="text-sm text-[#f8e9f0]">Supermercats especialitzats</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f8e9f0]">€840M</div>
                <p className="text-sm text-[#f8e9f0]">Mercat anual de vi</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f8e9f0]">22%</div>
                <p className="text-sm text-[#f8e9f0]">Creixement anual</p>
              </div>
            </div>
          </div>

          {/* Caso de uso sección */}
          <div className="bg-[#2a121e]/80 p-4 rounded-lg border border-[#b5123d]/30 shadow-lg mb-4">
            <h4 className="text-lg font-semibold mb-2 text-[#b5123d]">Cas d&apos;ús: Restaurant tipus</h4>
            <div className="flex mb-2">
              <div className="flex-1 border-r border-[#b5123d]/30 pr-3">
                <p className="text-[#f8e9f0] text-sm mb-1">• Restaurant de 25 taules</p>
                <p className="text-[#f8e9f0] text-sm mb-1">• 2 torns (50 serveis/dia)</p>
                <p className="text-[#f8e9f0] text-sm mb-1">• 60 referències de vi</p>
              </div>
              <div className="flex-1 pl-3">
                <p className="text-[#f8e9f0] text-sm mb-1"><span className="text-[#b5123d] font-bold">Cost Baco:</span> 125€/mes</p>
                <p className="text-[#f8e9f0] text-sm mb-1"><span className="text-[#b5123d] font-bold">Benefici:</span> +15% vendes de vi</p>
                <p className="text-[#f8e9f0] text-sm mb-1"><span className="text-[#b5123d] font-bold">ROI client:</span> 5x inversió</p>
              </div>
            </div>
    
          </div>

          {/* Opportunity details section */}
          <div className="bg-[#2a121e]/80 p-4 rounded-lg border border-[#b5123d]/30 shadow-lg mb-4">
            <h4 className="text-lg font-semibold mb-3 text-[#b5123d]">Detalls de la inversió:</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#b5123d]/20 flex items-center justify-center mr-2">
                  <PiggyBank className="w-5 h-5 text-[#b5123d]" />
                </div>
                <div>
                  <p className="text-[#f8e9f0] text-xs">Capital sol·licitat</p>
                  <p className="text-[#b5123d] font-bold">€300.000</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#b5123d]/20 flex items-center justify-center mr-2">
                  <ChartPie className="w-5 h-5 text-[#b5123d]" />
                </div>
                <div>
                  <p className="text-[#f8e9f0] text-xs">Valoració pre-money</p>
                  <p className="text-[#b5123d] font-bold">€800.000</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#b5123d]/20 flex items-center justify-center mr-2">
                  <BarChart3 className="w-5 h-5 text-[#b5123d]" />
                </div>
                <div>
                  <p className="text-[#f8e9f0] text-xs">ROI projectat</p>
                  <p className="text-[#b5123d] font-bold">3x (2 anys)</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#b5123d]/20 flex items-center justify-center mr-2">
                  <Clock className="w-5 h-5 text-[#b5123d]" />
                </div>
                <div>
                  <p className="text-[#f8e9f0] text-xs">Break-even</p>
                  <p className="text-[#b5123d] font-bold">18 mesos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Use of funds */}
          <div className="bg-[#2a121e]/80 p-4 rounded-lg border border-[#b5123d]/30 shadow-lg">
            <h4 className="text-lg font-semibold mb-2 text-[#b5123d]">Ús dels fons:</h4>
            <div className="mb-2">
              <PieChart
                data={[
                  { label: "Desenvolupament de producte", value: 30 },
                  { label: "Màrqueting i vendes", value: 60 },
                  { label: "Operacions", value: 10 }
                ]}
                colors={["#b5123d", "#d4365e", "#e05c7f"]}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          {/* Financial projections */}
          <div className="bg-[#2a121e]/80 p-4 rounded-lg border border-[#b5123d]/30 shadow-lg mb-4">
            <h4 className="text-lg font-semibold mb-3 text-[#b5123d]">Projeccions financeres:</h4>
            <div className="h-40 sm:h-48">
              <LineChart
                data={[
                  { month: "Any 1", value: 164 },
                  { month: "Any 2", value: 493 },
                  { month: "Any 3", value: 800 },
                  { month: "Any 4", value: 1200 },
                  { month: "Any 5", value: 1800 }
                ]}
                color="#b5123d"
                title="Ingressos projectats (milers €)"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="text-center">
                <p className="text-[#b5123d] font-bold">70%</p>
                <p className="text-xs text-[#f8e9f0]">Marge brut</p>
              </div>
              <div className="text-center">
                <p className="text-[#b5123d] font-bold">5-7x</p>
                <p className="text-xs text-[#f8e9f0]">Múltiple de sortida</p>
              </div>
              <div className="text-center">
                <p className="text-[#b5123d] font-bold">100</p>
                <p className="text-xs text-[#f8e9f0]">Clients Any 1</p>
              </div>
            </div>
          </div>

          {/* Métricas clave CAC y LTV */}
          <div className="bg-[#2a121e]/80 p-4 rounded-lg border border-[#b5123d]/30 shadow-lg mb-4">
            <h4 className="text-lg font-semibold mb-3 text-[#b5123d]">Mètriques clau:</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#2a121e] p-3 rounded-lg">
                <div className="flex items-center mb-2">
                  <DollarSign className="w-5 h-5 text-[#b5123d] mr-2" />
                  <p className="text-[#f8e9f0] text-sm font-semibold">CAC (Cost d'Adquisició)</p>
                </div>
                <p className="text-[#b5123d] text-xl font-bold">€750</p>
                <p className="text-[#f8e9f0] text-xs">Per client nou</p>
              </div>
              <div className="bg-[#2a121e] p-3 rounded-lg">
                <div className="flex items-center mb-2">
                  <UsersIcon className="w-5 h-5 text-[#b5123d] mr-2" />
                  <p className="text-[#f8e9f0] text-sm font-semibold">LTV (Valor del Client)</p>
                </div>
                <p className="text-[#b5123d] text-xl font-bold">€4.900</p>
                <p className="text-[#f8e9f0] text-xs">Durant 3 anys (LTV:CAC = 5.2)</p>
              </div>
            </div>
          </div>
          <div className="mt-2 text-center border-t border-[#b5123d]/30 pt-2">
              <p className="text-[#f8e9f0] text-sm"><span className="text-[#b5123d] font-bold">"Som la IA dels vins"</span> - Recomanacions intel·ligents basades en stock i plats</p>
            </div>
              {/* El nostre Equip */}
              <div className="bg-[#2a121e]/80 p-4 rounded-lg border border-[#b5123d]/30 shadow-lg mb-4">
            <h4 className="text-lg font-semibold mb-2 text-[#b5123d]">El nostre Equip:</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#2a121e] p-3 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#b5123d]/20 flex items-center justify-center mr-2">
                    <User className="w-5 h-5 text-[#b5123d]" />
                  </div>
                  <p className="text-[#f8e9f0] text-sm font-semibold">Melcior Montero</p>
                </div>
                <div className="text-[#f8e9f0] text-xs space-y-1">
                
                  <p>• 11 anys Maître-Sommelier en restaurant Celler Can Roca 3★ Michelin</p>
                  <p>• Expert en maridatges</p>
                </div>
              </div>
              <div className="bg-[#2a121e] p-3 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#b5123d]/20 flex items-center justify-center mr-2">
                    <Terminal className="w-5 h-5 text-[#b5123d]" />
                  </div>
                  <p className="text-[#f8e9f0] text-sm font-semibold">Cesco Fors</p>
                </div>
                <div className="text-[#f8e9f0] text-xs space-y-1">
                  <p>• Enginyer informàtic (UdG)</p>
                 
                </div>
              </div>
            </div>
          </div>

          {/* Contact section */}
          <div className="bg-[#b5123d] p-4 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-3 text-white text-center">Contacte i següents passos</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-white mb-1">info@baco.cat</p>
                <p className="text-sm text-white mb-1">www.baco.cat</p>
                
                <button className="bg-white text-[#b5123d] px-3 py-2 rounded-full font-bold hover:bg-opacity-90 transition-colors w-full mt-2">
                  Sol·licitar demo 
                </button>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="bg-white p-2 rounded-lg mb-1">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://baco.cat/investors&color=b5123d&bgcolor=f8e9f0" 
                    alt="BACO.cat Investors QR Code" 
                    className="w-16 h-16 sm:w-20 sm:h-20"
                  />
                </div>
                <p className="text-white text-xs text-center">Escaneja per accedir al dossier d'inversió complet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}