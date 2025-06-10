"use client"
import Header from "@/components/Header"
import LogoPage from "@/components/LogoPage"
import QuotePage from "@/components/QuotePage"
import About from "@/components/About"
import Story from "@/components/Story"
import Mission from "@/components/Mission"
import Vision from "@/components/Vision"
import Values from "@/components/Values"
import TraditionExcellence from "@/components/TraditionExcellence"
import Founders from "@/components/Founders"
import Brands from "@/components/Brands"
import Services from "@/components/Services"
import Gallery from "@/components/Gallery"
import Partners from "@/components/Partners"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <LogoPage />
      <QuotePage />
      <About />
      <Story />
      <Mission />
      <Vision />
      <Values />
      <TraditionExcellence />
      <Founders />
      <Brands />
      <Services />
      <Gallery />
      <Partners />
      <Contact />
      <Footer />
    </div>
  )
}
