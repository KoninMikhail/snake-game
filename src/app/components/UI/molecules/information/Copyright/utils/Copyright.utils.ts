/**
 * @name getYearRange
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use for calculating range of years.
 *
 * @param fromYear - starting point
 */
export const getYearRange = (fromYear: number): string => {
    const currentYear = new Date().getFullYear();
    if (fromYear < currentYear) {
        return `${fromYear}-${currentYear}`;
    }
    return fromYear.toString();
};
