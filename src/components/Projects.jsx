import { motion } from "framer-motion"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12"
      >
        Experience & Projects
      </motion.h2>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, boxShadow: "0 0 30px rgba(59,130,246,0.25)" }}
            className="border border-gray-800 rounded-lg p-6 transition-colors hover:border-blue-500 cursor-default"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.1 }}
                  className="text-xs bg-gray-800 text-blue-400 px-3 py-1 rounded-full"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}