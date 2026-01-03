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

export const projects: Project[] = []
