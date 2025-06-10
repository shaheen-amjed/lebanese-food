"use client"

import { motion } from "framer-motion"

export default function QuotePage() {
  return (
    <section className="min-h-screen flex items-center justify-center relative" style={{ backgroundColor: "#f5f1e8" }}>
      {/* Textured Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Page Number */}


      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Decorative Lines */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-red-800"></div>
            <div className="w-4"></div>
            <div className="w-16 h-px bg-red-800"></div>
          </div>

          {/* Quote */}
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-red-800 mb-8">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              "FOOD, IN THE END, IN OUR OWN{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-semibold"
            >
              TRADITION
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              , IS SOMETHING HOLY. IT'S NOT ABOUT NUTRIENTS AND CALORIES. IT'S ABOUT SHARING. IT'S ABOUT HONESTY. IT'S
              ABOUT{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="font-semibold"
            >
              IDENTITY
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              ."
            </motion.span>
          </blockquote>

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <cite className="text-xl font-semibold text-red-800 not-italic tracking-wider">IQUISE FRESCO</cite>
          </motion.div>

          {/* Decorative Lines */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mt-8"
          >
            <div className="w-16 h-px bg-red-800"></div>
            <div className="w-4"></div>
            <div className="w-16 h-px bg-red-800"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
