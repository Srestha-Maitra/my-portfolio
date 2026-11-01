// All site content lives here. Edit this file to update the portfolio —
// no component code needs to change.

export const profile = {
  name: "Srestha Maitra",
  shortName: "Srestha",
  role: "Salesforce Developer",
  tagline: "Turning complex business problems into reliable, scalable Salesforce solutions.",
  summary:
    "3+ years at Deloitte India, building and supporting Salesforce solutions for healthcare and automobile clients across global markets.",
  location: "India",
  email: "sresthamaitra@gmail.com",
  // Drop your resume PDF into /public (e.g. public/resume.pdf) and set this to "/resume.pdf".
  // The "Download Resume" button is hidden while this is empty.
  resumeUrl: "",
  openToWork: true,
  socials: [
    { label: "GitHub", url: "https://github.com/Srestha-Maitra" },
    // { label: "LinkedIn", url: "https://www.linkedin.com/in/your-handle" },
  ],
}

export const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "2", label: "Industry domains" },
  { value: "Global", label: "Domestic & international clients" },
  { value: "1", label: "Rising Star award" },
]

export const about = [
  "I'm a Salesforce Developer with 3+ years of experience at Deloitte India, where I've worked continuously across live projects for healthcare and automobile clients, both domestic and international — including a leading healthcare organization and a prominent Australia-based automobile firm.",
  "My work spans production support, incident resolution, and pricing module enhancements — often under pressure, always with a focus on quality. I've built a reputation for debugging complex issues quickly and keeping systems running smoothly for end users who depend on them daily.",
  "Beyond the technical side, I care about how work gets done — I've earned a Rising Star award for leadership and collaboration, and I genuinely enjoy client-facing work where I can translate business needs into practical solutions.",
  "Outside of client work, I build things with React and Node.js, and I make time for painting, sketching, and writing — creative outlets that keep my problem-solving sharp in unexpected ways.",
]

export const experience = [
  {
    company: "Deloitte India",
    role: "Salesforce Developer",
    period: "2023 — Present",
    location: "India",
    points: [
      "Delivered Salesforce development and support across live engagements for healthcare and automobile clients, domestic and international.",
      "Owned incident triage and root-cause analysis for a leading healthcare organization's production org, restoring service quickly for daily users.",
      "Enhanced pricing modules for an Australia-based automobile firm, streamlining calculations and day-to-day workflows for internal teams.",
      "Worked directly with client stakeholders to translate business requirements into Apex, Flow, and Lightning solutions.",
      "Recognised with a Rising Star award for leadership and cross-team collaboration.",
    ],
  },
]

export const skillCategories = [
  {
    title: "Salesforce",
    skills: ["Apex", "Lightning Web Components", "SOQL / SOSL", "Flows & Process Automation", "Production Support", "Incident Management"],
  },
  {
    title: "Web Development",
    skills: ["React", "Node.js", "JavaScript", "HTML / CSS", "Tailwind CSS"],
  },
  {
    title: "Core Strengths",
    skills: ["Debugging & Root Cause Analysis", "Client Communication", "Team Leadership", "Cross-functional Collaboration"],
  },
]

export const projects = [
  {
    title: "Healthcare Client — Production Support & Enhancements",
    category: "Client work",
    description:
      "Provided ongoing incident support and production troubleshooting for a major healthcare organization's Salesforce environment, resolving critical bugs promptly to minimise downtime and business impact.",
    tags: ["Salesforce", "Apex", "Production Support"],
  },
  {
    title: "Automobile Client (Australia) — Pricing Module Enhancement",
    category: "Client work",
    description:
      "Improved pricing modules for a prominent Australia-based automobile firm, streamlining calculations and enhancing day-to-day operational workflows for internal teams.",
    tags: ["Salesforce", "Flows", "Business Process Improvement"],
  },
  {
    title: "Personal Portfolio Website",
    category: "Personal project",
    description:
      "This site — a responsive, animated portfolio built with React, Vite, Tailwind CSS and Framer Motion, with all content driven from a single data file.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/Srestha-Maitra",
  },
]

export const highlights = [
  {
    title: "Rising Star Award",
    org: "Deloitte India",
    description: "Recognised for leadership, ownership and collaboration on client engagements.",
  },
  {
    title: "Global Client Delivery",
    org: "Healthcare · Automobile",
    description: "Supported live production systems for domestic and Australia-based clients.",
  },
  {
    title: "Creative Pursuits",
    org: "Painting · Sketching · Writing",
    description: "Creative hobbies that keep problem-solving fresh outside of work.",
  },
]

// Add certifications here and a "Certifications" list will appear in the Highlights section.
// Example: { name: "Salesforce Certified Platform Developer I", issuer: "Salesforce", year: "2024" }
export const certifications = []

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "highlights", label: "Highlights" },
  { id: "contact", label: "Contact" },
]
