"use client"

import { motion } from "framer-motion"

export default function Vision() {
  return (
    <section className="py-0 bg-white">
      <div className="min-h-screen flex items-center relative">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Vision Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="mb-12">
                  <h2 className="text-6xl font-bold text-red-800 mb-4 tracking-wide">OUR</h2>
                  <h2 className="text-6xl font-bold text-red-800 tracking-wide">VISION</h2>
                </div>

                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-gray-800 font-medium">
                    To transcend boundaries, enriching palates and souls as we unite under the banner of Lebanese Food
                    Manufacturing Co. Our culinary journey knows no limits, as we strive to redefine excellence in food
                    manufacturing across borders and cultures.
                  </p>
                </div>
              </motion.div>

              {/* Right Side - Tacos Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="/vision/tacos-plate.jpeg"
                    alt="Two tacos on a plate with plant and basket"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=500&width=600"
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Bottom Labels */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
