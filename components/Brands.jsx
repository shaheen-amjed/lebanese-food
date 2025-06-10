"use client"

import { motion } from "framer-motion"

export default function Brands() {
  const brands = [
    {
      name: "BEIRUT CATERING",
      logo: "/brands/beirut-catering.png",
      description: "Elevating occasions with refined catering experiences",
      location: "Amman, Jordan",
      number: "I.",
    },
    {
      name: "LEBNANI SNACK",
      logo: "/brands/lebnani-snack.png",
      description: "Fast food snacks that tantalize the taste buds",
      location: "Amman, Jordan",
      number: "II.",
    },
    {
      name: "AL AGHA",
      logo: "/brands/al-agha.png",
      description: "A beacon of Damascene cuisine in the heart of Egypt",
      location: "Cairo, Egypt",
      number: "III.",
    },
    {
      name: "MADZDOG",
      logo: "/brands/madzdog.png",
      description: "The ultimate destination for gourmet hot dog enthusiasts",
      location: "Amman, Jordan",
      number: "IV.",
    },
  ]

  return (
    <section id="brands" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-red-800 mb-6">COMPANY PROFILE</h2>
            <h3 className="text-3xl font-bold text-gray-800 mb-8">OUR BRANDS</h3>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Brands List */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="text-2xl font-bold text-red-800 w-8">{brand.number}</div>
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-md">
                    <img
                      src={brand.logo || "/placeholder.svg"}
                      alt={`${brand.name} logo`}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=64&width=64"
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800">{brand.name}</h4>
                    <p className="text-sm text-gray-600">{brand.location}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Big Food Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/brands/sandwich-hero.jpg"
                  alt="Hand holding sandwich with sauce"
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=400&width=600"
                  }}
                />
              </div>
              {/* Overlay with brand essence */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-800/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>

          {/* Brand Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {brands.map((brand, index) => (
              <motion.div
                key={`card-${brand.name}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-50 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=64&width=64"
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-red-800 mb-3">{brand.name}</h3>
                <p className="text-gray-600 mb-3 text-sm">{brand.description}</p>
                <p className="text-red-600 font-semibold text-sm">{brand.location}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-2xl font-bold text-red-800 italic">"INSPIRED BY TRADITION, DEFINED BY EXCELLENCE"</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
