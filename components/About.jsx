"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-0 bg-white">
      <div className="min-h-screen flex items-center">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-5xl font-bold text-red-800 mb-4 tracking-wide">COMPANY PROFILE</h2>
              <h3 className="text-3xl font-bold text-gray-800 mb-8 tracking-wide">FROM JORDAN TO EGYPT</h3>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="/about/lebanese-man-with-food.jpeg"
                    alt="Man in red fez with Lebanese food tray"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=500&width=600"
                    }}
                  />
                </div>
                {/* Decorative overlay matching PDF style */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-red-800/20 rounded-lg -z-10"></div>
              </motion.div>

              {/* Right Side - Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-gray-800 font-medium">
                    Nestled at the intersection of tradition and innovation, The Lebanese Food Manufacturing Co. stands
                    as a testament to the Lebanese culinary excellence. With a legacy spanning over 15 years in Jordan,
                    our journey has now expanded to Egypt, where we proudly introduce our flagship enterprise.
                  </p>

                  <p className="text-gray-700">
                    From humble food restaurants to iconic trucks, each establishment under our umbrella is a tribute to
                    the rich tapestry of Lebanese cuisine. Every dish crafted with precision, every flavor meticulously
                    curated to transport you to the sun-soaked streets of our homeland.
                  </p>

                  <p className="text-gray-700">
                    At Lebanese Food Manufacturing Co., we blend heritage with modernity, sourcing the finest
                    ingredients to create culinary masterpieces that captivate the senses. Our commitment to
                    sustainability and community echoes through every bite, ensuring that our passion for food is
                    matched only by our dedication to the planet and its people.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Page Number - Bottom Right */}
            
          </div>
        </div>
      </div>
    </section>
  )
}
