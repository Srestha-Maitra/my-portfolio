import { useState } from "react"
import Section, { Reveal } from "./Section"
import { profile } from "../data/profile"

// No backend needed: the form opens the visitor's email app with the message pre-filled.
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [copied, setCopied] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable; the address is still visible on screen
    }
  }

  const inputClass =
    "w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"

  return (
    <Section id="contact" eyebrow="What's next" title="Get In Touch">
      <div className="grid md:grid-cols-2 gap-12">
        <Reveal>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            I'm currently open to new opportunities. Whether you have a role in mind, a question, or just want to say
            hi, my inbox is always open.
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <div className="flex items-center gap-3 flex-wrap">
                <a href={`mailto:${profile.email}`} className="text-blue-400 hover:text-blue-300 break-all">
                  {profile.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="text-xs border border-gray-700 hover:border-blue-500 rounded px-2 py-1 text-gray-300 transition-colors"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Location</p>
              <p className="text-gray-300">{profile.location}</p>
            </div>
            <div className="flex gap-5 pt-2">
              {profile.socials.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" required placeholder="Your name" value={form.name} onChange={update} className={inputClass} aria-label="Your name" />
            <input name="email" type="email" required placeholder="Your email" value={form.email} onChange={update} className={inputClass} aria-label="Your email" />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your message"
              value={form.message}
              onChange={update}
              className={`${inputClass} resize-none`}
              aria-label="Your message"
            />
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 px-8 py-3.5 rounded-lg font-medium transition-colors">
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
