"use client"

import { motion } from "framer-motion"
import { Trophy, Medal, Globe } from "lucide-react"

const Awards = () => {
  const awards = [
    {
      title: "Innovate-X",
      description: "Secured 1st place in an 8-hour hackathon",
      icon: Trophy,
      type: "Hackathon",
      place: "1st",
    },
    {
      title: "Avishkaar",
      description: "Secured 2nd place in a project exhibition",
      icon: Medal,
      type: "Exhibition",
      place: "2nd",
    },
    {
      title: "Code for green",
      description:
        "Secured 2nd place in an 8-hour state level hackathon organized by the Information Science Department",
      icon: Medal,
      type: "Hackathon",
      place: "2nd",
    },
    {
      title: "Tech-Tronix",
      description:
        "Secured 1st place in a tech fest with events on coding and team quests organized by the AIML department",
      icon: Trophy,
      type: "Competition",
      place: "1st",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="awards" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Awards & Certificates</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Recognition for excellence in technical competitions and events
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              data-cursor-hover
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 10 }}
                >
                  <award.icon className="w-6 h-6 text-white dark:text-gray-900" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {award.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 dark:text-gray-500">{award.type}</span>
                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                      {award.place}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Awards
