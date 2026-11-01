import { motion } from "framer-motion"
import heroImage from "../assets/profile.jpg"
import { profile, stats } from "../data/profile"

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-16">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-start text-left w-full max-w-xl">
            {profile.openToWork && (
              <motion.span
                {...fadeUp(0)}
                className="inline-flex items-center gap-2 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to new opportunities
              </motion.span>
            )}

            <motion.p {...fadeUp(0.05)} className="text-blue-400 font-medium mb-3">
              Hi, I'm
            </motion.p>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent"
            >
              {profile.shortName}
            </motion.h1>

            <motion.p {...fadeUp(0.15)} className="text-xl sm:text-2xl font-semibold text-gray-200 mb-4">
              {profile.role}
            </motion.p>

            <motion.p {...fadeUp(0.2)} className="text-gray-300 text-lg mb-2">
              {profile.tagline}
            </motion.p>

            <motion.p {...fadeUp(0.25)} className="text-gray-400 mb-8">
              {profile.summary}
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(59,130,246,0.55)" }}
                whileTap={{ scale: 0.97 }}
                className="bg-blue-600 hover:bg-blue-500 px-7 py-3.5 rounded-lg font-medium transition-colors"
              >
                View My Work
              </motion.a>
              {profile.resumeUrl ? (
                <motion.a
                  href={profile.resumeUrl.startsWith("/") ? import.meta.env.BASE_URL + profile.resumeUrl.slice(1) : profile.resumeUrl}
                  download
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-gray-700 hover:border-blue-400 px-7 py-3.5 rounded-lg font-medium transition-colors"
                >
                  Download Resume
                </motion.a>
              ) : (
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-gray-700 hover:border-blue-400 px-7 py-3.5 rounded-lg font-medium transition-colors"
                >
                  Contact Me
                </motion.a>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative shrink-0"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-2xl opacity-40" />
            <motion.img
              src={heroImage}
              alt={`Photo of ${profile.name}`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-gray-900 ring-2 ring-blue-500/40"
            />
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-gray-800 bg-gray-900/50 p-5">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-2xl sm:text-3xl font-bold text-white">{s.value}</dd>
              <dd className="text-sm text-gray-400 mt-1">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
