import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { profile } from "../data/profile"

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <footer className="border-t border-gray-800 mt-12">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex gap-5">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              {s.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors">Email</a>
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#top"
            aria-label="Back to top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-40 w-11 h-11 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  )
}
