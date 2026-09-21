import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Salesforce",
    skills: ["Apex", "Lightning Web Components", "SOQL/SOSL", "Flows & Process Automation", "Production Support", "Incident Management"],
  },
  {
    title: "Web Development",
    skills: ["React", "Node.js", "JavaScript", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "Core Strengths",
    skills: ["Debugging & Root Cause Analysis", "Client Communication", "Team Leadership", "Cross-functional Collaboration"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12"
      >
        Skills
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-10">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <h3 className="text-blue-400 font-semibold mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <motion.li
                  key={skill}
                  whileHover={{ x: 6, color: "#60a5fa" }}
                  className="text-gray-300 cursor-default transition-colors"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}