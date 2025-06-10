"use client"

import { motion } from "framer-motion"

export default function Story() {
  return (
    <section id="story" className="py-0 bg-white">
      <div className="min-h-screen flex items-center relative">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="mb-12">
                  <h2 className="text-6xl font-bold text-red-800 mb-8 tracking-wide">OUR</h2>
                  <h2 className="text-6xl font-bold text-red-800 mb-8 tracking-wide">STORY</h2>
                </div>

                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-gray-800 font-medium">
                    Emerging from the cradle of heritage and cultural richness, our culinary journey began amidst the
                    ancient streets of Jordan.
                  </p>

                  <p className="text-gray-700">
                    With a fusion of tradition and innovation, our restaurants flourished, drawing inspiration from the
                    diverse tapestry of Lebanese flavors. As time passed, our success echoed beyond borders, leading us
                    to establish a presence in Egypt.
                  </p>

                  <p className="text-gray-700">
                    Fueled by a passion for excellence, we recognized the need to unify our ventures under a single
                    banner, thus giving rise to the Lebanese Food Manufacturing Co. (LFMC). Serving as the umbrella for
                    our diverse food chains, LFMC embodies our commitment to elevating the culinary landscape with elite
                    catering, unparalleled service, and genuine hospitality.
                  </p>

                  <p className="text-gray-700">
                    Today, as we reflect on our journey, we stand poised to embrace a future filled with prosperity and
                    triumph. With a steadfast dedication to understanding and meeting the needs of our sector, both
                    locally and regionally, we continue to redefine the standards of culinary excellence, one dish at a
                    time.
                  </p>
                </div>
              </motion.div>

              {/* Right Side - Street Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="/story/street-scene.jpeg"
                    alt="Street scene with people walking"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=600&width=450"
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
