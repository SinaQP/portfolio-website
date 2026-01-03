export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  image: string
  credentialId?: string
  verifyUrl?: string
  description?: string
  skills?: string[]
}

export const certificates: Certificate[] = [
  {
    id: "ml-specialization",
    title: "Machine Learning Specialization",
    issuer: "Stanford University & DeepLearning.AI",
    date: "2024",
    image: "/certificate-machine-learning-stanford.jpg",
    credentialId: "ML-2024-SQ-8472",
    verifyUrl: "https://coursera.org/verify/ML-2024-SQ-8472",
    description:
      "Comprehensive specialization covering supervised learning, unsupervised learning, and best practices in machine learning.",
    skills: ["Machine Learning", "Neural Networks", "Python", "TensorFlow", "Deep Learning"],
  },
  {
    id: "aws-ml",
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "2023",
    image: "/certificate-aws-machine-learning.jpg",
    credentialId: "AWS-ML-2023-4829",
    verifyUrl: "https://aws.amazon.com/verification",
    description: "Validates expertise in building, training, tuning, and deploying machine learning models on AWS.",
    skills: ["AWS SageMaker", "ML Deployment", "Model Optimization", "Cloud Architecture"],
  },
  {
    id: "react-advanced",
    title: "Advanced React & TypeScript",
    issuer: "Frontend Masters",
    date: "2024",
    image: "/certificate-react-typescript-advanced.jpg",
    credentialId: "FM-REACT-2024-1847",
    description:
      "Advanced patterns in React including performance optimization, TypeScript integration, and modern hooks.",
    skills: ["React", "TypeScript", "Performance Optimization", "State Management"],
  },
  {
    id: "ai-ethics",
    title: "AI Ethics & Responsible AI",
    issuer: "MIT Professional Education",
    date: "2023",
    image: "/certificate-ai-ethics-mit.jpg",
    credentialId: "MIT-AIE-2023-9284",
    description:
      "Explores ethical considerations in AI development, bias mitigation, and responsible AI deployment practices.",
    skills: ["AI Ethics", "Bias Mitigation", "Responsible AI", "Policy & Governance"],
  },
  {
    id: "quantum-computing",
    title: "Quantum Computing Fundamentals",
    issuer: "IBM Quantum",
    date: "2023",
    image: "/certificate-quantum-computing-ibm.jpg",
    credentialId: "IBM-QC-2023-5621",
    verifyUrl: "https://ibm.com/quantum/verify",
    description: "Introduction to quantum computing principles, quantum algorithms, and programming with Qiskit.",
    skills: ["Quantum Computing", "Qiskit", "Quantum Algorithms", "Linear Algebra"],
  },
  {
    id: "innovation-award",
    title: "Innovation Excellence Award",
    issuer: "Tech Innovation Summit",
    date: "2024",
    image: "/award-innovation-excellence.jpg",
    description: "Recognized for outstanding innovation in AI-powered creative tools and experimental interfaces.",
    skills: ["Innovation", "AI/ML", "Creative Technology", "Product Development"],
  },
]
