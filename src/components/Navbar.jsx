import { useEffect, useState } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { navLinks, profile } from "../data/profile"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Highlight the nav link for whichever section is in the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    )
    // "top" (the hero) is observed too so the highlight clears when scrolling back up
    ;[{ id: "top" }, ...navLinks].forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-gray-950/85 backdrop-blur-md border-b border-gray-800" : "border-b border-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
        <a href="#top" className="font-bold text-lg text-blue-400" onClick={() => setOpen(false)}>
          {profile.shortName}<span className="text-white">.</span>
        </a>

        <div className="hidden md:flex gap-7 text-sm">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative transition-colors ${active === id ? "text-white" : "text-gray-400 hover:text-white"}`}
            >
              {label}
              {active === id && (
                <motion.span layoutId="nav-underline" className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-blue-400 rounded" />
              )}
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-gray-300"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-gray-800"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`py-2 ${active === id ? "text-blue-400" : "text-gray-300"}`}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div style={{ scaleX: progress }} className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-blue-500 to-purple-500" />
    </header>
  )
}
