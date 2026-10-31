export interface EducationRecord {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
  highlights?: string[];
}

// Source: transcript and Sina's own statements, October 2026. The expected
// completion date is applicant-reported and pending university confirmation.
// Marks are kept on the transcript's 20-point scale and shown out of 100.
const gpaOutOf20 = 18.79;
const topCourses: [string, number][] = [
  ["Discrete Mathematics", 20],
  ["Advanced Programming", 20],
  ["Software Engineering Laboratory", 20],
];

function outOf100(markOutOf20: number): string {
  const value = Math.round(markOutOf20 * 5 * 100) / 100;
  return `${Number.isInteger(value) ? value : value.toFixed(2)} / 100`;
}

const gpa = `GPA ${outOf100(gpaOutOf20)}`;

export const education: EducationRecord[] = [
  {
    degree: "Bachelor's completion program, Professional Computer Engineering — Software",
    institution: "Islamic Azad University, Kerman Branch",
    period: "Oct 2025 – Jul 2027 (expected)",
    detail: gpa,
    highlights: topCourses.map(([course, mark]) => `${course} ${outOf100(mark)}`),
  },
  {
    degree: "Associate degree, Computer",
    institution: "Chamran, Kerman",
    period: "Completed",
  },
];

export const educationSummary = {
  title: "Computer Engineering (Software)",
  detail: `${gpa} · expected Jul 2027`,
};
