import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Highlights from './components/Highlights'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
