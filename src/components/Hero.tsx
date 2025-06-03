"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink, Download, Sparkles, Code, Zap } from "lucide-react"

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()
  console.log("cv");
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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

  const floatingIcons = [
    { icon: Code, delay: 0 },
    { icon: Zap, delay: 0.5 },
    { icon: Sparkles, delay: 1 },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Floating Background Elements */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-purple-400/20"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: item.delay,
          }}
          style={{
            left: `${20 + index * 30}%`,
            top: `${30 + index * 20}%`,
          }}
        >
          <item.icon className="w-12 h-12" />
        </motion.div>
      ))}

      {/* Interactive Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, purple 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, pink 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, blue 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, purple 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div className="relative w-40 h-40 mx-auto mb-6" whileHover={{ scale: 1.1 }} data-interactive>
            {/* Animated Rings */}
            <motion.div
              className="absolute inset-0 border-2 border-purple-500/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 border-2 border-pink-500/30 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-4 border-2 border-blue-500/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            {/* Main Avatar */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 20px rgba(168, 85, 247, 0.5)",
                  "0 0 40px rgba(236, 72, 153, 0.5)",
                  "0 0 20px rgba(168, 85, 247, 0.5)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute inset-6 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl"
            >
              PS
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <motion.h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            <motion.span
              className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            >
              PRAJWAL
            </motion.span>
            <br />
            <motion.span
              className="inline-block text-white"
              whileHover={{ scale: 1.05, color: "#a855f7" }}
              transition={{ duration: 0.3 }}
            >
              SHETTAR
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-purple-500/30 mb-4"
            whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.8)" }}
            data-interactive
          >
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <span className="text-gray-300">Available for opportunities</span>
          </motion.div>

          <motion.p
            className="text-2xl md:text-3xl text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Computer Science Engineer & Full Stack Developer
          </motion.p>

          <motion.p
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Passionate about{" "}
            <motion.span className="text-purple-400 font-semibold" whileHover={{ scale: 1.1 }} data-interactive>
              blockchain technology
            </motion.span>
            ,{" "}
            <motion.span className="text-pink-400 font-semibold" whileHover={{ scale: 1.1 }} data-interactive>
              machine learning
            </motion.span>
            , and creating innovative solutions that make a difference. Currently pursuing B.E. in Computer Science with
            a CGPA of{" "}
            <motion.span className="text-yellow-400 font-bold" whileHover={{ scale: 1.2 }} data-interactive>
              9.26
            </motion.span>
            .
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          <motion.a
            href="mailto:prajwalshettar43@gmail.com"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            data-interactive
          >
            <Mail className="w-5 h-5 group-hover:animate-bounce" />
            Get In Touch
            <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-full transition-all duration-300 backdrop-blur-sm"
            data-interactive
          >
            View Projects
            <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </motion.a>

          <motion.a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-8 py-4 bg-slate-800/50 border border-slate-600 text-gray-300 hover:text-white hover:border-purple-500 rounded-full transition-all duration-300 backdrop-blur-sm"
            data-interactive
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download CV
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-16">
          {[
            { icon: Github, href: "#", label: "GitHub", color: "hover:bg-gray-700" },
            { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-4 bg-slate-800/50 backdrop-blur-sm text-gray-300 hover:text-white rounded-full transition-all duration-300 shadow-lg border border-slate-700 hover:border-purple-500 ${social.color}`}
              data-interactive
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
          <motion.p className="text-gray-400 text-sm">Scroll to explore</motion.p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="relative"
          >
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-1 h-3 bg-purple-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
