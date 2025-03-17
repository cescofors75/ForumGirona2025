"use client"

import { useEffect, useState } from "react"
import { Wine } from "lucide-react"

export default function Slide0() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
        className={`slide p-4 sm:p-10 h-full flex flex-col items-center justify-center transition-opacity duration-500 ${animate ? "opacity-100" : "opacity-0"}`}
    >
      <div className="text-center">
        <div className="inline-flex flex-col sm:flex-row items-center mb-4 sm:mb-6">
          <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-[#b5123d]/20 flex items-center justify-center sm:mr-4 mb-4 sm:mb-0">
            <Wine className="w-10 h-10 sm:w-16 sm:h-16 text-[#b5123d]" />
          </div>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#f8e9f0]">
            BACO<span className="text-[#b5123d]">.cat</span>
          </h1>
        </div>
        <h2 className="text-xl sm:text-3xl font-light text-[#f8e9f0] mb-6 sm:mb-12 text-center">
          La revolució en recomanacions de vins
        </h2>
        <p className="text-base sm:text-xl text-[#f8e9f0] italic max-w-xs sm:max-w-2xl mx-auto text-center">
          Primer recomanador virtual intel·ligent de Catalunya
        </p>
      </div>
       {/* QR code positioned in top right corner */}
       <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex flex-col items-center">
        <div className="p-2 bg-[#f8e9f0] rounded-lg shadow-lg mb-1">
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://forum-girona2025.vercel.app/&color=b5123d&bgcolor=f8e9f0" 
            alt="BACO.cat QR Code" 
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
        </div>
        
      </div>
      <div className="mt-16 flex space-x-4">
        <div className="w-3 h-3 bg-[#b5123d] rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-[#b5123d] rounded-full animate-pulse delay-100"></div>
        <div className="w-3 h-3 bg-[#b5123d] rounded-full animate-pulse delay-200"></div>
      </div>
    </div>
  )
}

