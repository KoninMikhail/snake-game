import padLeft from 'utils/padLeft';

test('add four characters before number with default value', () => {
  expect(padLeft(4, 5)).toBe('00004');
});

test('add five characters with custom symbol', () => {
  expect(padLeft(4, 6, 'b')).toBe('bbbbb4');
});
