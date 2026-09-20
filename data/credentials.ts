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
    name: "IBM Data Science Professional Certificate",
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
  nameFa: string;
  proficiency: string;
  proficiencyFa: string;
  detail: string;
  detailFa: string;
}[] = [
  {
    name: "English",
    nameFa: "انگلیسی",
    proficiency: "Professional working proficiency",
    proficiencyFa: "سطح حرفه‌ای برای کار",
    detail: "Duolingo score 129 · Jul 2026",
    detailFa: "امتیاز دولینگو ۱۲۹ · ژوئیهٔ ۲۰۲۶",
  },
  {
    name: "Japanese",
    nameFa: "ژاپنی",
    proficiency: "Elementary proficiency",
    proficiencyFa: "سطح مقدماتی",
    detail: "Duolingo score 11 · Jul 2026",
    detailFa: "امتیاز دولینگو ۱۱ · ژوئیهٔ ۲۰۲۶",
  },
];

export interface CredentialItem {
  name: string;
  issuer: string;
  issued?: string;
  credentialId?: string;
  featured?: boolean;
  url?: string;
  source?: string;
  verification?: "issuer-verified" | "user-supplied";
}

export const credentials: CredentialItem[] = suppliedCredentials.map((item) => {
  const isLossSpecialization = item.credentialId === "LOSS6SVKXJ6U";
  const url = item.credentialId
    ? isLossSpecialization
      ? `https://www.coursera.org/account/accomplishments/specialization/${item.credentialId}`
      : `https://www.coursera.org/account/accomplishments/verify/${item.credentialId}`
    : undefined;

  return {
    ...item,
    url,
    source: url ? "Verified Coursera accomplishment record" : "User-supplied credential list",
    verification: url ? ("issuer-verified" as const) : ("user-supplied" as const),
  };
});

export const verifiedCredentials = credentials.filter(
  (item) => item.verification === "issuer-verified",
);

const presentationCredentialNames = [
  "IBM Data Science Professional Certificate",
  "EF SET English Certificate 72/100 (C2 Proficient)",
] as const;

export const selectedCredentials = presentationCredentialNames.map((name) => {
  const credential = credentials.find((item) => item.name === name);
  if (!credential) throw new Error(`Missing featured credential: ${name}`);
  return credential;
});

export const credentialStats = {
  verifiedCount: verifiedCredentials.length,
  totalRecordedCount: credentials.length,
  verifiedAt: "2026-09-15",
  methodology:
    "Counts credential records with a Coursera accomplishment URL and credential ID. The EF SET record remains listed on the portfolio but is not included in the verified count because no verification URL is stored.",
} as const;

export function credentialIssuerMark(issuer: string) {
  if (issuer === "IBM") return "IBM";
  if (issuer === "Johns Hopkins University") return "JHU";
  return issuer;
}
