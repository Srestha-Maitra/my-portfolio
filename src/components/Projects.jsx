import { motion } from "framer-motion"
import Section from "./Section"
import { projects } from "../data/profile"

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, boxShadow: "0 0 30px rgba(59,130,246,0.2)" }}
            className="flex flex-col border border-gray-800 bg-gray-900/40 rounded-xl p-6 transition-colors hover:border-blue-500"
          >
            <p className="text-xs uppercase tracking-wider text-purple-300 mb-2">{project.category}</p>
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-5 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs bg-gray-800 text-blue-300 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 text-sm text-blue-400 hover:text-blue-300 font-medium"
              >
                View project →
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
