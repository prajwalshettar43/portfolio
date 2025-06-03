"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Shield, Car, Mountain, BookOpen } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Blockchain Based Evidence Tracking System",
      description:
        "Developed a web platform to securely store and verify digital evidence using blockchain technology. Integrated IPFS for decentralized file storage and Hyperledger Fabric for tamper-proof evidence storage. Designed a user-friendly React.js frontend allowing users to upload, view, and track digital evidence with transaction history.",
      tech: ["React.js", "Express.js", "MongoDB", "Hyperledger Fabric", "IPFS"],
      icon: Shield,
      git:"https://github.com/prajwalshettar43/EvidenceTracking",
      demo:""
    },
    {
      title: "Smart Traffic Management System",
      description:
        "Trained YOLOv8 models to detect both vehicles and ambulances; used Deep SORT for real-time object tracking in live traffic feeds. Enabled smart signal control with dynamic green light timing and weather-based alerts using real-time vehicle flow and weather data. Automated emergency response by sending WhatsApp alerts to authorities via Twilio.",
      tech: ["YOLOv8", "Deep SORT", "OpenCV", "Twilio", "Streamlit", "Weather API"],
      icon: Car,
      git:"https://github.com/prajwalshettar43/Traffic-management",
      demo:"https://traffic-management.streamlit.app/"
    },
    {
      title: "Glacier Melting Prediction and Alert System",
      description:
        "Built a platform using PDD, seismic, and snow data to predict glacier melting and issue alerts. Used ML models like GradientBoosting and Linear Regression for climate analysis. Integrated Twilio for real-time SMS alerts to stakeholders.",
      tech: ["Python", "Machine Learning", "Google Earth Engine", "Twilio"],
      icon: Mountain,
      git:"https://github.com/prajwalshettar43/glacier",
      demo:"https://glacier-rsyl.onrender.com/"
    },
    {
      title: "Online Course Management System",
      description:
        "Developed a web application enabling instructors to seamlessly add and manage courses, create tests, and upload course materials. Designed student-facing features for course discovery and easy enrollment. Created a user-friendly interface ensuring 24/7 access to course content and real-time results.",
      tech: ["HTML", "CSS", "PHP", "MySQL"],
      icon: BookOpen,
      git:"",
      demo:""
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
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Innovative solutions combining cutting-edge technologies to solve real-world problems
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              data-cursor-hover
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 10 }}
                >
                  <project.icon className="w-6 h-6 text-white dark:text-gray-900" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    data-cursor-hover
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.git&&(<motion.a
                  href={project.git}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor-hover
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors group/btn"
                >
                  <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                  Code
                </motion.a>)}
                {project.demo&&(<motion.a
                  href={project.demo}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor-hover
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg transition-colors group/btn"
                >
                  <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
                  Demo
                </motion.a>)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
