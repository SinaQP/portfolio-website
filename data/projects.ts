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
    id: "kristina",
    title: "Kristina AI",
    image: "/ai-companion-holographic-interface.jpg",
    tags: [
      { label: "AI/ML", variant: "cyan" },
      { label: "NLP", variant: "magenta" },
      { label: "React", variant: "violet" },
    ],
    glowColor: "cyan",
    description:
      "An intelligent AI companion system featuring advanced natural language processing, emotional intelligence, and adaptive personality modeling. Kristina learns from interactions to provide personalized assistance and meaningful conversations.",
    features: [
      "Advanced conversational AI with context awareness",
      "Emotional intelligence and sentiment analysis",
      "Adaptive personality that evolves with user interactions",
      "Multi-modal input support (text, voice, vision)",
      "Privacy-first architecture with local processing options",
    ],
    techStack: ["Python", "TensorFlow", "Transformers", "React", "TypeScript", "WebRTC", "FastAPI"],
    liveUrl: "https://kristina-ai.example.com",
    githubUrl: "https://github.com/sina/kristina-ai",
  },
  {
    id: "neural-canvas",
    title: "Neural Canvas",
    image: "/generative-art-neural-network-visualization.jpg",
    tags: [
      { label: "Generative", variant: "magenta" },
      { label: "WebGL", variant: "lime" },
      { label: "AI", variant: "cyan" },
    ],
    glowColor: "magenta",
    description:
      "A real-time generative art platform powered by neural networks. Create stunning visual compositions through AI-assisted creativity and interactive parameter manipulation.",
    features: [
      "Real-time neural style transfer",
      "Interactive parameter controls",
      "Export high-resolution outputs",
      "Community gallery and sharing",
    ],
    techStack: ["Three.js", "TensorFlow.js", "WebGL", "Next.js", "Python"],
    liveUrl: "https://neural-canvas.example.com",
  },
  {
    id: "quantum-sim",
    title: "Quantum Simulator",
    image: "/quantum-computing-visualization-circuit.jpg",
    tags: [
      { label: "Quantum", variant: "violet" },
      { label: "Simulation", variant: "cyan" },
      { label: "Python", variant: "lime" },
    ],
    glowColor: "violet",
    description:
      "Educational quantum computing simulator with visual circuit builder and real-time state visualization. Learn quantum algorithms through interactive experimentation.",
    features: [
      "Visual quantum circuit builder",
      "Real-time state vector visualization",
      "Pre-built quantum algorithms library",
      "Educational tutorials and challenges",
    ],
    techStack: ["Python", "Qiskit", "NumPy", "React", "D3.js"],
    githubUrl: "https://github.com/sina/quantum-sim",
  },
  {
    id: "voice-morph",
    title: "Voice Morph",
    image: "/audio-waveform-voice-synthesis-interface.jpg",
    tags: [
      { label: "Audio", variant: "lime" },
      { label: "ML", variant: "cyan" },
      { label: "Real-time", variant: "magenta" },
    ],
    glowColor: "lime",
    description:
      "Real-time voice transformation and synthesis system using deep learning. Transform your voice with various effects and create synthetic speech with natural prosody.",
    features: [
      "Real-time voice transformation",
      "Multiple voice presets and custom training",
      "Low-latency processing (<50ms)",
      "Cross-platform support",
    ],
    techStack: ["Python", "PyTorch", "ONNX", "WebAssembly", "Web Audio API"],
    liveUrl: "https://voice-morph.example.com",
  },
  {
    id: "swarm-viz",
    title: "Swarm Intelligence",
    image: "/particle-swarm-simulation-visualization.jpg",
    tags: [
      { label: "Simulation", variant: "violet" },
      { label: "AI", variant: "cyan" },
      { label: "WebGL", variant: "magenta" },
    ],
    glowColor: "cyan",
    description:
      "Interactive visualization of swarm intelligence algorithms and emergent behavior. Explore how simple rules create complex collective patterns.",
    features: [
      "Multiple swarm algorithms (PSO, ACO, Boids)",
      "Real-time parameter tuning",
      "3D visualization with WebGL",
      "Export simulation data",
    ],
    techStack: ["Three.js", "TypeScript", "WebGL", "Web Workers"],
    githubUrl: "https://github.com/sina/swarm-viz",
  },
  {
    id: "neuro-music",
    title: "Neuro Music",
    image: "/ai-music-generation-interface-synthesizer.jpg",
    tags: [
      { label: "Music", variant: "lime" },
      { label: "AI", variant: "magenta" },
      { label: "Creative", variant: "violet" },
    ],
    glowColor: "magenta",
    description:
      "AI-powered music generation and composition tool. Create original music through neural networks trained on diverse musical styles and genres.",
    features: [
      "Style-based music generation",
      "Interactive composition tools",
      "MIDI export and DAW integration",
      "Collaborative features",
    ],
    techStack: ["Python", "Magenta", "TensorFlow", "Tone.js", "React"],
    liveUrl: "https://neuro-music.example.com",
  },
]
