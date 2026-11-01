import Section, { Reveal } from "./Section"
import { about } from "../data/profile"

export default function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About Me" className="max-w-4xl">
      <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
        {about.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p>{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
