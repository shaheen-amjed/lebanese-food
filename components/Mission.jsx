"use client"

import { motion } from "framer-motion"

export default function Mission() {
  return (
    <section className="py-0 bg-white">
      <div className="min-h-screen flex items-center relative">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Hummus Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="/mission/hummus-dish.jpeg"
                    alt="Lebanese hummus dish with avocado and herbs"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=500&width=600"
                    }}
                  />
                </div>
              </motion.div>

              {/* Right Side - Mission Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="mb-12">
                  <h2 className="text-6xl font-bold text-red-800 mb-4 tracking-wide">OUR</h2>
                  <h2 className="text-6xl font-bold text-red-800 tracking-wide">MISSION</h2>
                </div>

                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-gray-800 font-medium">
                    Our mission is dedicated to crafting exceptional culinary experiences that reflect the essence of
                    Lebanese tradition and hospitality. Through a fusion of authentic flavors and international
                    standards, we endeavor to exceed the expectations of our customers, delivering elite services with
                    the warmth of Arabian hospitality.
                  </p>

                  <p className="text-gray-700">
                    Our commitment to excellence knows no bounds, as we continue to innovate and inspire, placing our
                    clients at the heart of everything we do.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Labels */}



          </div>
        </div>
      </div>
    </section>
  )
}
