"use client"
import { Code, Shield, Zap, DollarSign, Globe, Server, Users } from 'lucide-react';

import { useEffect, useState } from "react"
import { Wine, Database } from "lucide-react"

export default function Slide2() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`slide p-4 sm:p-10 h-full transition-opacity duration-500 ${animate ? "opacity-100" : "opacity-0"}`}>
      <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-6 text-[#b5123d]">Baco.cat - La solució intel·ligent</h2>
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-8 text-[#f8e9f0]">
        Primer recomanador virtual intel·ligent de Catalunya
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
        <div className="bg-[#2a121e]/80 p-6 rounded-lg border border-[#b5123d]/30 shadow-lg">
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#b5123d]/20 flex items-center justify-center">
              <Code className="w-6 h-6 sm:w-8 sm:h-8 text-[#b5123d]" />
            </div>
          </div>
          <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center text-[#b5123d]">
            Tecnologia pròpia
          </h4>
          <ul className="space-y-4 text-[#f8e9f0]">
      <li className="flex items-start">
        <Code className="mr-2 h-5 w-5 flex-shrink-0 text-blue-400" />
        <span>Algoritme desenvolupat íntegrament pel nostre equip</span>
      </li>
      
      <li className="flex items-start">
        <Server className="mr-2 h-5 w-5 flex-shrink-0 text-blue-400" />
        <span>No utilitzem models de IA de terceres empreses</span>
      </li>
     
      <li className="flex items-start">
        <Zap className="mr-2 h-5 w-5 flex-shrink-0 text-blue-400" />
        <span>Augment de la velocitat de les respostes</span>
      </li>
      <li className="flex items-start">
        <DollarSign className="mr-2 h-5 w-5 flex-shrink-0 text-blue-400" />
        <span>Reducció d'un percentatge molt elevat de costos</span>
      </li>
      <li className="flex items-start">
        <Globe className="mr-2 h-5 w-5 flex-shrink-0 text-blue-400" />
        <span>Els resultats són consistents a través de diferents idiomes i escenaris</span>
      </li>
    </ul>
        </div>

        <div className="bg-[#2a121e]/80 p-6 rounded-lg border border-[#b5123d]/30 shadow-lg">
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#b5123d]/20 flex items-center justify-center">
              <Database className="w-6 h-6 sm:w-8 sm:h-8 text-[#b5123d]" />
            </div>
          </div>
          <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center text-[#b5123d]">
            Base de dades propia
          </h4>
          <ul className="space-y-2 text-[#f8e9f0]">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Milers de referències de vins catalogades</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Informació detallada sobre característiques i maridatges</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Actualització constant segons tendències del mercat</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#2a121e]/80 p-6 rounded-lg border border-[#b5123d]/30 shadow-lg">
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#b5123d]/20 flex items-center justify-center">
              <Wine className="w-6 h-6 sm:w-8 sm:h-8 text-[#b5123d]" />
            </div>
          </div>
          <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center text-[#b5123d]">Beneficis</h4>
          <ul className="space-y-2 text-[#f8e9f0]">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Per a empresaris: Optimització de costos i millora de vendes</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Per a treballadors: Suport expert sense formació extensa</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Per a clients: Experiència personalitzada i de qualitat</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-[#b5123d]/10 p-6 rounded-lg border border-[#b5123d]/30">
        <p className="text-center text-lg text-[#f8e9f0] italic">
          "Baco.cat transforma qualsevol establiment en un expert en vins, amb tecnologia pròpia i suport de Microsoft
          Hub Foundation"
        </p>
      </div>
    </div>
  )
}

