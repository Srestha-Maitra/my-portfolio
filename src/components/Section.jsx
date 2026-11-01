import { motion } from "framer-motion"

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-20 py-24 px-6 sm:px-8 max-w-5xl mx-auto ${className}`}>
      <Reveal className="mb-12">
        {eyebrow && <p className="text-sm font-medium uppercase tracking-widest text-blue-400 mb-3">{eyebrow}</p>}
        <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
      </Reveal>
      {children}
    </section>
  )
}
