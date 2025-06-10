"use client"

import { motion } from "framer-motion"

export default function Values() {
  const values = [
    "Excellence",
    "Authenticity",
    "Innovation",
    "Integrity",
    "Sustainability",
    "Hospitality",
    "Collaboration",
    "Customer-Centricity",
    "Diversity & Inclusion",
    "Continuous Improvement",
  ]

  return (
    <section className="py-0 bg-white">
      <div className="min-h-screen flex items-center relative">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Ancient Structure Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="/values/ancient-structure.jpg"
                    alt="Ancient stone structure with narrow passage"
                    className="w-full h-full object-cover grayscale"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=600&width=450"
                    }}
                  />
                </div>
              </motion.div>

              {/* Right Side - Values Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <p className="text-xl italic text-red-800 font-medium leading-relaxed">
                    "THE ART OF HOSPITALITY HOLDS DIVERSITY AT ITS HEART"
                  </p>
                </motion.div>

                {/* Values Title */}
                <div className="mb-8">
                  <h2 className="text-6xl font-bold text-red-800 tracking-wide">OUR VALUES</h2>
                </div>

                {/* Values List */}
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <motion.div
                      key={value}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                      <p className="text-lg font-semibold text-gray-800">{value}</p>
                    </motion.div>
                  ))}
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
