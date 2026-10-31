// The one fact to maintain: the year Sina started building software,
// beginning with independent projects that led to the Zaravand job.
export const careerStartYear = 2020;

const words = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
  "seventeen", "eighteen", "nineteen", "twenty",
];

/** Whole years since the start year, e.g. 6 during 2026. */
export function yearsOfExperience(now: Date = new Date()): number {
  return now.getFullYear() - careerStartYear;
}

/** The same count as a word for prose: "six", or the numeral beyond twenty. */
export function yearsInWords(now: Date = new Date()): string {
  const years = yearsOfExperience(now);
  return words[years] ?? String(years);
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
