export interface EducationRecord {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
  highlights?: string[];
}

// Source: transcript and Sina's own statements, October 2026. The expected
// completion date is applicant-reported and pending university confirmation.
export const education: EducationRecord[] = [
  {
    degree: "Bachelor's completion program, Professional Computer Engineering — Software",
    institution: "Islamic Azad University, Kerman Branch",
    period: "Oct 2025 – Jul 2027 (expected)",
    detail: "GPA 18.79 / 20",
    highlights: [
      "Discrete Mathematics 20/20",
      "Advanced Programming 20/20",
      "Software Engineering Laboratory 20/20",
    ],
  },
  {
    degree: "Associate degree, Computer",
    institution: "Chamran, Kerman",
    period: "Completed",
  },
];

export const educationSummary = {
  title: "Computer Engineering (Software)",
  detail: "GPA 18.79 / 20 · expected Jul 2027",
};
