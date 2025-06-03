"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Wrench } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Java", "Python", "JavaScript", "HTML", "CSS", "C", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      icon: Globe,
      skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Hyperledger Fabric"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git & GitHub", "Twilio API", "IPFS", "Canva", "Figma", "Scikit-learn", "Vercel"],
    },
    {
      title: "Specializations",
      icon: Database,
      skills: ["REST API Integration", "Machine Learning", "Basic Networking Concepts"],
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
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build innovative solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              data-cursor-hover
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg group"
            >
              <motion.div
                className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: 10 }}
              >
                <category.icon className="w-6 h-6 text-white dark:text-gray-900" />
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{category.title}</h3>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{ x: 5 }}
                    data-cursor-hover
                    className="flex items-center cursor-pointer group/skill"
                  >
                    <motion.div
                      className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mr-3 group-hover/skill:bg-gray-900 dark:group-hover/skill:bg-white transition-colors"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
