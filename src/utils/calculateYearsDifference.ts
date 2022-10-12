/**
 * calculateYearsDifference
 *
 * Use this utility to get a string with the difference between the current year and the specified one
 *
 * @param {Number} startYear - project start year
 * @returns {String} - project dates string
 */
export default function calculateYearsDifference(startYear: number): string {
  const currentYear = new Date().getFullYear();

  if (startYear < currentYear) {
    return `${startYear}-${currentYear}`;
  }

  return startYear.toString();
}
