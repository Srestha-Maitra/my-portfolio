import Section, { Reveal } from "./Section"
import { experience } from "../data/profile"

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Where I've worked" title="Experience">
      <ol className="relative border-l border-gray-800 ml-2 space-y-12">
        {experience.map((job, i) => (
          <li key={job.company + job.period} className="pl-8 relative">
            <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-500 ring-4 ring-gray-950" />
            <Reveal delay={i * 0.1}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="text-xl font-semibold">
                  {job.role} <span className="text-blue-400">@ {job.company}</span>
                </h3>
                <span className="text-sm text-gray-500 font-mono">{job.period}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">{job.location}</p>
              <ul className="space-y-3">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-gray-300">
                    <span className="text-blue-400 mt-1.5 shrink-0">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
