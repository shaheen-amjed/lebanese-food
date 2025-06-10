"use client"

import { motion } from "framer-motion"

export default function Partners() {
  const partners = [
    "Orange",
    "Emirates Red Crescent",
    "Four Seasons",
    "IHG Hotels & Resorts",
    "Sheraton",
    "Bristol Hotels",
    "Gulf Insurance Group",
    "Tkiyet Um Ali",
    "EMBASSY OF THE UNITED ARAB EMIRATES",
    "Haya Cultural Center",
    "وزارة الأشغال العامة و الإسكان",
    "The Children's Museum Jordan",
    "Regency Palace",
    "Arab Orient Insurance",
    "Ayyad",
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-red-800 mb-6">OUR PARTNERS</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                    <img
                      src={`/partners/${partner.toLowerCase().replace(/\s+/g, "-")}.png`}
                      alt={`${partner} logo`}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=64&width=64"
                      }}
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{partner}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
