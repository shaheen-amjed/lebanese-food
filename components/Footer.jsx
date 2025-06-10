"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Logo */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌲</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-red-400">LFMC</h1>
                <p className="text-xs text-gray-400">Lebanese Food Manufacturing Co.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-400">Beirut Catering</h3>
                <p className="text-gray-400 text-sm">Amman, Jordan</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-400">Lebnani Snack</h3>
                <p className="text-gray-400 text-sm">15 Branches in Jordan</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-400">Al Agha</h3>
                <p className="text-gray-400 text-sm">Cairo, Egypt</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-400">Madzdog</h3>
                <p className="text-gray-400 text-sm">Amman, Jordan</p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Lebanese Food Manufacturing Co. All rights reserved.
              </p>
              <p className="text-red-400 text-sm mt-2 italic">"Inspired by Tradition, Defined by Excellence"</p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
