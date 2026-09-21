import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24 px-8 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-6 text-gray-300 text-lg leading-relaxed"
      >
        <p>
          I'm a Salesforce Developer with 3+ years of experience at Deloitte India, where I've worked continuously across live projects for healthcare and automobile clients, both domestic and international — including a leading healthcare organization and a prominent Australia-based automobile firm.
        </p>
        <p>
          My work spans production support, incident resolution, and pricing module enhancements — often under pressure, always with a focus on quality. I've built a reputation for debugging complex issues quickly and keeping systems running smoothly for end users who depend on them daily.
        </p>
        <p>
          Beyond the technical side, I care about how work gets done — I've earned a Rising Star award for leadership and collaboration, and I genuinely enjoy client-facing work where I can translate business needs into practical solutions.
        </p>
        <p>
          Outside of client work, I build things with React and Node.js, and I make time for painting, sketching, and writing — creative outlets that keep my problem-solving sharp in unexpected ways.
        </p>
      </motion.div>
    </section>
  )
}