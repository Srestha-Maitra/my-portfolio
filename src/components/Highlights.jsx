import Section, { Reveal } from "./Section"
import { highlights, certifications } from "../data/profile"

export default function Highlights() {
  return (
    <Section id="highlights" eyebrow="Recognition" title="Highlights">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {highlights.map((h, i) => (
          <Reveal
            key={h.title}
            delay={i * 0.1}
            className="rounded-xl p-6 bg-gradient-to-br from-blue-600/15 to-purple-600/10 border border-gray-800"
          >
            <h3 className="text-lg font-semibold mb-1">{h.title}</h3>
            <p className="text-sm text-blue-300 mb-3">{h.org}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{h.description}</p>
          </Reveal>
        ))}
      </div>

      {certifications.length > 0 && (
        <Reveal className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Certifications</h3>
          <ul className="divide-y divide-gray-800 border border-gray-800 rounded-xl">
            {certifications.map((c) => (
              <li key={c.name} className="flex flex-col sm:flex-row sm:justify-between gap-1 px-5 py-4">
                <span className="text-gray-200">{c.name}</span>
                <span className="text-sm text-gray-500">
                  {c.issuer}{c.year && ` · ${c.year}`}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </Section>
  )
}
