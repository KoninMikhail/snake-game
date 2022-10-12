import calculateYearsDifference from '../calculateYearsDifference';

describe('calculateYearsDifference', () => {
  it('should return single value if current real year', () => {
    const startYear = new Date().getFullYear();
    const outputValue = new Date().getFullYear().toString();

    expect(calculateYearsDifference(startYear)).toEqual(outputValue);
  });

  it('should return string in format "startYear-currentYear"', () => {
    const startYear = new Date().getFullYear() - 5;
    const currentYear = new Date().getFullYear();
    const outputValue = `${startYear}-${currentYear}`;

    expect(calculateYearsDifference(startYear)).toEqual(outputValue);
  });
});
