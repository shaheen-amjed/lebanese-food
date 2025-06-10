"use client"

import { motion } from "framer-motion"

export default function LogoPage() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Full Page Logo Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full h-screen relative"
      >
        <img
          src="/logo-page.jpeg"
          alt="The Lebanese Food Manufacturing Co. Logo"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.target.src = "/placeholder.svg?height=1080&width=1920"
          }}
        />

        {/* Optional overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-black/10"></div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center shadow-lg"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </motion.div>
      </motion.div>

      {/* Mobile optimization - ensure proper aspect ratio */}
      <style jsx>{`
        @media (max-width: 768px) {
          .logo-container {
            min-height: 100vh;
            min-height: 100dvh; /* Dynamic viewport height for mobile */
          }
        }
        
        @media (orientation: landscape) and (max-height: 500px) {
          .logo-container {
            min-height: 100vh;
          }
        }
      `}</style>
    </section>
  )
}
