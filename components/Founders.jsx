"use client"

import { motion } from "framer-motion"

export default function Founders() {
  const founders = [
    { name: "Mohamed El Sisi", image: "/founders/mohamed-el-sisi.jpg" },
    { name: "Raed Haneefa", image: "/founders/raed-haneefa.jpg" },
    { name: "Ahmed Haneefa", image: "/founders/ahmed-haneefa.jpg" },
  ]

  return (
    <section className="py-0 bg-white">
      <div className="min-h-screen flex items-center relative">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-6xl font-bold text-red-800 mb-8 tracking-wide">MEET THE</h2>
              <h2 className="text-6xl font-bold text-red-800 mb-8 tracking-wide">Great</h2>
              <h2 className="text-6xl font-bold text-red-800 mb-8 tracking-wide">MINDS</h2>
            </motion.div>

            {/* Founders Grid */}
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              {founders.map((founder, index) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="w-64 h-64 mx-auto mb-6 rounded-lg overflow-hidden shadow-2xl">
                    <img
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=256&width=256"
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{founder.name}</h3>
                </motion.div>
              ))}
            </div>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg leading-relaxed max-w-5xl mx-auto"
            >
              <p className="text-gray-800 font-medium">
                Pioneering entrepreneurs with diverse global investments spanning real estate, fashion industry,
                fragrance manufacturing, and the culinary realm, the visionaries behind the Lebanese Restaurants and
                Food Company have left an indelible mark on multiple industries.
              </p>

              <p className="text-gray-700">
                Their journey began in 1993 with the establishment of the Lebanese Restaurants and Food Company in
                Amman, Jordan, swiftly transforming it into a culinary cornerstone with 18 branches. Their commitment to
                excellence extended further with the inception of Beirut Catering Company, catering meals to esteemed
                clients such as Royal Jordanian Airlines.
              </p>

              <p className="text-gray-700">
                Their entrepreneurial spirit continued to soar with the creation of Madzdog, a venture specializing in
                hot dogs and fast food. However, their most recent triumph shines with the Al-Agha restaurant chain in
                Egypt, proudly sponsored and managed by the Lebanese Company.
              </p>

              <p className="text-gray-700">
                With each endeavor, they redefine standards of quality and innovation, leaving an unforgettable legacy
                in their wake.
              </p>
            </motion.div>

            {/* Bottom Labels */}


            {/* Page Number */}

          </div>
        </div>
      </div>
    </section>
  )
}
