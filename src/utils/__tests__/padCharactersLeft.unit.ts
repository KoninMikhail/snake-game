import padCharactersLeft from 'utils/padCharactersLeft';

describe('padCharactersLeft', () => {
  test('add four characters before number with default value', () => {
    expect(padCharactersLeft(4, 5)).toBe('00004');
  });

  test('add five characters with custom symbol', () => {
    expect(padCharactersLeft(4, 6, 'b')).toBe('bbbbb4');
  });
});
