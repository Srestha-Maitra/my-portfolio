import { motion } from "framer-motion"
import heroImage from "../assets/Hero_Image2.jpg"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl -z-10" />

      {/* Left: Text */}
      <div className="flex flex-col items-start text-left max-w-xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-blue-400 font-medium mb-4"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent"
        >
          Srestha
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 mb-2 text-lg"
        >
          Salesforce Developer turning complex business problems into reliable, scalable solutions
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 mb-8"
        >
          3+ years at Deloitte India, building and supporting Salesforce solutions for healthcare and automobile clients across global markets.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59,130,246,0.6)" }}
          whileTap={{ scale: 0.97 }}
          className="bg-blue-600 px-8 py-4 rounded-lg font-medium transition-colors hover:bg-blue-500"
        >
          View My Work
        </motion.a>
      </div>

      {/* Right: Character image */}
      <motion.img
        src={heroImage}
        alt="Character illustration"
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        whileHover={{ y: -10 }}
        className="w-72 md:w-[420px] drop-shadow-[0_0_40px_rgba(59,130,246,0.3)] mt-12 md:mt-0"
      />
    </section>
  )
}