"use client"

import { motion } from "framer-motion"
import { Users, Globe } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Student Volunteer",
      organization: "IEEE",
      description: [
        "Assisted in organizing and managing college-level events, ensuring smooth coordination and execution",
        "Helped mentor juniors at events like F.A.I.L. encouraging team spirit and responsibility",
        "Collaborated with faculty and student teams to support registrations, and technical setup",
      ],
      icon: Users,
    },
    
    {
      title: "WebMaster",
      organization: "IEEE",
      description: [
                "Maintained and updated an existing website to ensure smooth functionality, consistent uptime, and error-free performance.","Regularly added new features and content to improve user engagement and provide up-to-date information.","Implemented UI/UX enhancements and responsive design fixes for better cross-device compatibility.",
      ],
      icon: Globe,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Leadership roles and contributions to the tech community
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 10 }}
              data-cursor-hover
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <exp.icon className="w-6 h-6 text-white dark:text-gray-900" />
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                      {exp.organization}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.1 }}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                      >
                        <motion.div
                          className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
