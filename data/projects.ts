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
    glowColor: "lime",
    description:
      "An AI-driven retail intelligence and content generation system for shops and stores.",
  },
]
