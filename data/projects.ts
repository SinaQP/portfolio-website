export interface Project {
  id: string
  title: string
  image: string
  tags: Array<{ label: string; variant: "cyan" | "magenta" | "violet" | "lime" }>
  glowColor: "cyan" | "magenta" | "violet" | "lime"
  description: string
  features?: string[]
  techStack?: string[]
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: "rahtal",
    title: "Rahtal",
    image: "/Rahtal-project.png",
    tags: [
      { label: "Digital Transformation", variant: "cyan" },
      { label: "Leadership Alignment", variant: "magenta" },
      { label: "Process Optimization", variant: "lime" },
    ],
    glowColor: "cyan",
    description:
      "A digital transformation platform for organizations that helps leadership improve productivity and choose better options through alignment, prioritization, and process improvement.",
    techStack: ["React", "Django", "FastAPI", "Microservices", "SQL", "MongoDB"],
  },
  {
    id: "danobin",
    title: "Danobin",
    image: "/Danobin-project.png",
    tags: [
      { label: "Retail Intelligence", variant: "lime" },
      { label: "AI Content Generation", variant: "magenta" },
      { label: "Store Analytics", variant: "cyan" },
    ],
    glowColor: "magenta",
    description:
      "An AI-driven retail intelligence and content generation system for shops and stores.",
  },
  {
    id: "zaraamad",
    title: "Zaraamad",
    image: "/Zaraamad-project.png",
    tags: [
      { label: "Municipal Fees", variant: "lime" },
      { label: "Revenue Analytics", variant: "magenta" },
      { label: "Registration Automation", variant: "cyan" },
    ],
    glowColor: "lime",
    description: "A municipal fee registration and revenue analytics system.",
  },
  {
    id: "zarvand",
    title: "Zarvand",
    image: "/Zarvand-project.png",
    tags: [
      { label: "Citizen Services", variant: "lime" },
      { label: "Smart City", variant: "magenta" },
      { label: "Data Analytics", variant: "cyan" },
    ],
    glowColor: "lime",
    description: "Smart city citizen services powered by citizen data and analytics.",
  },
  {
    id: "tairban",
    title: "Tairban",
    image: "/Tierban-project.png",
    tags: [
      { label: "Fleet Tire Management", variant: "lime" },
      { label: "Mining Operations", variant: "magenta" },
      { label: "Lifecycle Monitoring", variant: "cyan" },
    ],
    glowColor: "cyan",
    description:
      "Project Tairban is a fleet tire management platform for large mining vehicles. It tracks tire conditions and logs inspections, maintenance, replacements, and incidents over time. The goal is a clear big-picture view of trucks and their tires to make lifecycle monitoring and decisions faster and more reliable.",
    features: [
      "Condition tracking with inspection history",
      "Maintenance, replacement, and incident timelines",
      "Fleet-level lifecycle visibility for mining vehicles",
    ],
  },
]
