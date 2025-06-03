"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react"

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            data-cursor-hover
            className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-100 dark:to-gray-300 rounded-full flex items-center justify-center text-4xl font-bold text-white dark:text-gray-900 shadow-2xl relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            PS
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
        >
          <motion.span className="inline-block" whileHover={{ scale: 1.05, color: "#6b7280" }}>
            PRAJWAL
          </motion.span>
          <br />
          <motion.span className="inline-block" whileHover={{ scale: 1.05, color: "#6b7280" }}>
            SHETTAR
          </motion.span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 mb-4"
            whileHover={{ scale: 1.05 }}
            data-cursor-hover
          >
            <motion.div
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">Available for opportunities</span>
          </motion.div>
        </motion.div>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Computer Science Engineer & Full Stack Developer
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-500 dark:text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about blockchain technology, machine learning, and creating innovative solutions that make a
          difference. Currently pursuing B.E. in Computer Science with a CGPA of{" "}
          <motion.span
            className="font-bold text-gray-900 dark:text-white"
            whileHover={{ scale: 1.1 }}
            data-cursor-hover
          >
            9.26
          </motion.span>
          , dedicated to building cutting-edge applications that solve real-world problems.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-12">
          <motion.a
            target="_blank"
            href="mailto:prajwalshettar43@gmail.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
            className="group flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg transition-all duration-300 shadow-lg"
          >
            <Mail className="w-5 h-5 group-hover:animate-bounce" />
            Get In Touch
          </motion.a>

          <motion.a
            href="/cv.pdf"
            target="_blank"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
            className="group cursor-pointer flex items-center gap-2 px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 rounded-lg transition-all duration-300"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download CV
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-16">
          {[
            { icon: Github, href: "https://github.com/prajwalshettar43", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/prajwalshettar43", label: "LinkedIn" },
          ].map((social, index) => (
            <motion.a
              target="_blank"
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.1, y: -2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              data-cursor-hover
              className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg transition-all duration-300 shadow-md border border-gray-200 dark:border-gray-700"
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
          <motion.p className="text-gray-500 dark:text-gray-500 text-sm">Scroll to explore</motion.p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="cursor-pointer"
            data-cursor-hover
          >
            <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-600" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
