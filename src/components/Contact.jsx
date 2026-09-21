export default function Contact() {
    return (
      <section id="contact" className="py-24 px-8 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
        </p>
        
          <a href="mailto:sresthamaitra@gmail.com"
          className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-lg font-medium transition inline-block"
        >
          Say Hello
        </a>
        <div className="flex gap-6 mt-12 text-gray-400 text-sm">
          <a href="https://github.com/yourusername" className="hover:text-white transition">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" className="hover:text-white transition">LinkedIn</a>
          <a href="https://twitter.com/yourusername" className="hover:text-white transition">Twitter</a>
        </div>
      </section>
    )
  }