"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, Star } from "lucide-react"

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Academic journey and achievements</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -5 }}
          data-cursor-hover
          className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg"
        >
          <div className="flex items-start gap-6">
            <motion.div
              className="w-16 h-16 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center flex-shrink-0"
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <GraduationCap className="w-8 h-8 text-white dark:text-gray-900" />
            </motion.div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Bachelor of Engineering (B.E.) in Computer Science & Engineering
              </h3>

              <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Basaveshwar Engineering College, Bagalkot, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>2022 – 2026 (Expected)</span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center gap-2 mb-4"
              >
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-xl font-semibold text-gray-900 dark:text-white">CGPA: 9.26</span>
                <motion.div
                  className="flex gap-1 ml-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="w-2 h-2 bg-yellow-500 rounded-full"
                    />
                  ))}
                </motion.div>
              </motion.div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Pursuing a comprehensive education in Computer Science with focus on software engineering, data
                structures, algorithms, and emerging technologies. Maintaining excellent academic performance while
                actively participating in technical events and projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
