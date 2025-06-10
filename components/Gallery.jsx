"use client"

import { motion } from "framer-motion"

export default function Gallery() {
  return (
    <section className="py-0 bg-white">
      <div className="min-h-screen flex items-center relative">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            {/* Color Palette Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Color Palette</h3>
              <div className="flex space-x-4">
                <div className="w-16 h-16 bg-red-800 rounded-lg shadow-md"></div>
                <div className="w-16 h-16 bg-amber-100 rounded-lg shadow-md"></div>
                <div className="w-16 h-16 bg-red-400 rounded-lg shadow-md"></div>
                <div className="w-16 h-16 bg-green-200 rounded-lg shadow-md"></div>
              </div>
            </motion.div>

            {/* Food Categories Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Dessert */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg mb-4">
                  <img
                    src="/gallery/dessert-kanafeh.jpg"
                    alt="Dessert - Kanafeh"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=300&width=300"
                    }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Dessert</h3>
              </motion.div>

              {/* Shawarma Wrap */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg mb-4">
                  <img
                    src="/gallery/shawarma-wrap.jpg"
                    alt="Shawarma Wrap"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=300&width=300"
                    }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Shawarma Wrap</h3>
              </motion.div>

              {/* Pizza */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg mb-4">
                  <img
                    src="/gallery/pizza.jpg"
                    alt="Pizza"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=300&width=300"
                    }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Pizza</h3>
              </motion.div>

              {/* Fresh Juice */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg mb-4">
                  <img
                    src="/gallery/fresh-juice.jpg"
                    alt="Fresh Juice"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=300&width=300"
                    }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Fresh Juice</h3>
              </motion.div>
            </div>

            {/* Materials Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden shadow-md mb-2">
                    <img
                      src="/gallery/materials/tortillas.jpg"
                      alt="Tortillas"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=200&width=200"
                      }}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Tortillas</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden shadow-md mb-2">
                    <img
                      src="/gallery/materials/colorful-balls.jpg"
                      alt="Colorful Sweets"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=200&width=200"
                      }}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Ice Cream</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden shadow-md mb-2">
                    <img
                      src="/gallery/materials/pizza-slice.jpg"
                      alt="Pizza"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=200&width=200"
                      }}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Sandwiches</p>
                </div>
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden shadow-md mb-2">
                    <img
                      src="/gallery/materials/fries-burger.jpg"
                      alt="Fries & Burger"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=200&width=200"
                      }}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Fries & Burger</p>
                </div>
              </div>
            </motion.div>

            {/* Page Number */}

          </div>
        </div>
      </div>
    </section>
  )
}
