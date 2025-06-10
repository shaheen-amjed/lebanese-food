"use client"

import { motion } from "framer-motion"

export default function Services() {
  const services = [
    "Onsite catering services to the military and the army",
    "Onsite catering services to various medical teams",
    "Comprehensive logistics services in catering",
    "Provision of food packing and packaging at the highest standards",
    "Importing high international quality raw materials",
    "Preparation of live station kitchens to directly serve our customers",
    "Provision of fully trained and qualified personnel in hospitality services for all occasions & events",
  ]

  return (
    <section id="services" className="py-20 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-red-800 mb-6">OUR SERVICES</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/brands/srv.jpg"
                alt="Buffet service"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-red-800 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{service}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
