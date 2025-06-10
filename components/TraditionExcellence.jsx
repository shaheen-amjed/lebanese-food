"use client"

import { motion } from "framer-motion"

export default function TraditionExcellence() {
  return (
    <section className="py-0 bg-white">
      <div className="min-h-screen flex items-center relative">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Food Spread Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="/tradition/food-spread.jpg"
                    alt="Traditional Lebanese food spread with multiple dishes"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=500&width=600"
                    }}
                  />
                </div>
              </motion.div>

              {/* Right Side - Quote and Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                {/* Main Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-red-800 leading-tight mb-8">
                    "INSPIRED BY
                    <br />
                    TRADITION,
                    <br />
                    DEFINED BY
                    <br />
                    EXCELLENCE"
                  </h2>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center space-x-4"
                >
                  <div className="w-16 h-px bg-red-800"></div>
                  <div className="w-3 h-3 bg-red-800 rounded-full"></div>
                  <div className="w-16 h-px bg-red-800"></div>
                </motion.div>

                {/* Supporting Text */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Every dish tells a story of heritage, every flavor carries the essence of our ancestors, and every
                    meal is a celebration of the timeless Lebanese culinary artistry that defines who we are.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Labels */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="absolute bottom-8 left-8"
            >
              <p className="text-sm font-semibold text-red-800 tracking-wider">COMPANY PROFILE</p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
