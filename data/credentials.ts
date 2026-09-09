export const linkedinUrl =
  "https://www.linkedin.com/in/sina-qasempour-8967b2264/";

const suppliedCredentials: {
  name: string;
  issuer: string;
  issued?: string;
  credentialId?: string;
  featured?: boolean;
}[] = [
  {
    name: "EF SET English Certificate 72/100 (C2 Proficient)",
    issuer: "EF SET",
    featured: true,
  },
  {
    name: "IBM Data Science",
    issuer: "IBM",
    issued: "Jul 2026",
    credentialId: "LOSS6SVKXJ6U",
    featured: true,
  },
  {
    name: "Data Scientist Career Guide and Interview Preparation",
    issuer: "IBM",
    issued: "Jul 2026",
    credentialId: "MARE5AZHZBLL",
  },
  {
    name: "Generative AI: Elevate Your Data Science Career",
    issuer: "IBM",
    issued: "Jul 2026",
    credentialId: "6MJ4A9AO1X9S",
  },
  {
    name: "Applied Data Science Capstone",
    issuer: "IBM",
    issued: "Jun 2026",
    credentialId: "DH5T428I0P00",
  },
  {
    name: "Core 1: Hardware and Network Troubleshooting",
    issuer: "IBM",
    issued: "Jun 2026",
    credentialId: "OKQRU153EE4N",
  },
  {
    name: "Machine Learning with Python",
    issuer: "IBM",
    issued: "Jun 2026",
    credentialId: "N8SV4CJK4GSC",
    featured: true,
  },
  {
    name: "Data Visualization with Python",
    issuer: "IBM",
    issued: "May 2026",
    credentialId: "MEIWLIR4MCN0",
  },
  {
    name: "Data Analysis with Python",
    issuer: "IBM",
    issued: "Feb 2026",
    credentialId: "1ZABQFE1Z910",
  },
  {
    name: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
    issued: "Dec 2025",
    credentialId: "2V65LR27IYV9",
  },
  {
    name: "Python Project for Data Science",
    issuer: "IBM",
    issued: "Nov 2025",
    credentialId: "2LO9YUTRCTNT",
  },
  {
    name: "Programming for Everybody",
    issuer: "University of Michigan",
    issued: "Nov 2025",
    credentialId: "2YZ8UWRUX5C4",
  },
  {
    name: "Python for Data Science, AI & Development",
    issuer: "IBM",
    issued: "Nov 2025",
    credentialId: "WO6524QETVT8",
  },
  {
    name: "Data Science Methodology",
    issuer: "IBM",
    issued: "Nov 2025",
    credentialId: "4VCWBVON4N9Z",
  },
  {
    name: "Tools for Data Science",
    issuer: "IBM",
    issued: "Nov 2025",
    credentialId: "2ZXBTUHZ2R44",
  },
  {
    name: "Grammar and Punctuation",
    issuer: "University of California, Irvine",
    issued: "Nov 2025",
    credentialId: "99R22SP9LW0F",
  },
  {
    name: "Algebra: Elementary to Advanced - Equations & Inequalities",
    issuer: "Johns Hopkins University",
    issued: "Oct 2025",
    credentialId: "FLMQTAHOHTT6",
    featured: true,
  },
  {
    name: "What is Data Science?",
    issuer: "IBM",
    issued: "Oct 2025",
    credentialId: "H83DCQULEO4K",
  },
];

export const languages: {
  name: string;
  proficiency: string;
  detail: string;
}[] = [
  {
    name: "English",
    proficiency: "Professional working proficiency",
    detail: "Duolingo score 129 · Jul 2026",
  },
  {
    name: "Japanese",
    proficiency: "Elementary proficiency",
    detail: "Duolingo score 11 · Jul 2026",
  },
];

export const credentials = suppliedCredentials.map((item) => ({
  ...item,
  source: "Explicit credential list supplied by Sina in this conversation",
  verification: "user-supplied" as const,
}));
