"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/placeholder.svg?height=1080&width=1920')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-4xl">🌲</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">LFMC</h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6">THE LEBANESE FOOD MANUFACTURING CO.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-red-800/20 backdrop-blur-sm rounded-lg p-8 mb-8"
        >
          <blockquote className="text-lg md:text-xl italic leading-relaxed">
            "FOOD, IN THE END, IN OUR OWN TRADITION, IS SOMETHING HOLY. IT'S NOT ABOUT NUTRIENTS AND CALORIES. IT'S
            ABOUT SHARING. IT'S ABOUT HONESTY. IT'S ABOUT IDENTITY."
          </blockquote>
          <cite className="block mt-4 text-red-200">— IQUISE FRESCO</cite>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="#about"
            className="inline-block bg-red-800 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105"
          >
            Discover Our Story
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}
