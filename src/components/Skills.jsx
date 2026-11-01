import { motion } from "framer-motion"
import Section, { Reveal } from "./Section"
import { skillCategories } from "../data/profile"

export default function Skills() {
  return (
    <Section id="skills" eyebrow="What I work with" title="Skills">
      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category, i) => (
          <Reveal key={category.title} delay={i * 0.12} className="rounded-xl border border-gray-800 bg-gray-900/40 p-6">
            <h3 className="text-blue-400 font-semibold mb-5">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ y: -3 }}
                  className="text-sm text-gray-200 bg-gray-800/80 border border-gray-700 hover:border-blue-500 px-3 py-1.5 rounded-lg cursor-default transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
