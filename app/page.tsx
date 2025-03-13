"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PDFDownloadButton from "@/components/PDFDownloadButton"
import Slide1 from "@/components/slides/slide-1"
import Slide2 from "@/components/slides/slide-2"
import Slide3 from "@/components/slides/slide-3"
import Slide4 from "@/components/slides/slide-4"
import Slide0 from "@/components/slides/slide-0"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a0a15] to-[#2c0d1e] text-white overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <header className="mb-4 sm:mb-8 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#f8e9f0]">
            BACO<span className="text-[#b5123d]">.cat</span>
            </h1>
            <p className="text-sm sm:text-base text-[#f8e9f0] italic">Democratitzant l&apos;excel·lència enològica</p>
        </div>
        <PDFDownloadButton />
        </header>

        <div className="relative bg-[#2a121e]/80 rounded-xl shadow-2xl overflow-hidden min-h-[60vh] sm:min-h-[70vh]">
          {currentSlide === 0 && <Slide0 />}
          {currentSlide === 1 && <Slide1 />}
          {currentSlide === 2 && <Slide2 />}
          {currentSlide === 3 && <Slide3 />}
          {currentSlide === 4 && <Slide4 />}
        </div>

        <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="outline"
            className="bg-transparent border-[#b5123d] text-white hover:bg-[#b5123d]/20 w-full sm:w-auto"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Anterior
          </Button>

          <div className="flex space-x-2 my-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-[#b5123d]" : "bg-gray-400"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            variant="outline"
            className="bg-transparent border-[#b5123d] text-white hover:bg-[#b5123d]/20 w-full sm:w-auto"
          >
            Següent <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  )
}

