import { Copyright } from '../Copyright';
import { render, screen } from '@testing-library/react';

describe('Copyright', () => {
  const currentYear = new Date().getFullYear();
  const prevYear = currentYear - 5;
  const license = 'GNUv2';
  const author = 'Mickey Mouse';

  it('renders copyright with current year', () => {
    const outputValue = `© ${currentYear} | ${author}. ${license} license.`;

    render(<Copyright author={author} creationYear={currentYear} license={license} />);

    expect(screen.getByText(/license/i)).toHaveTextContent(outputValue);
  });

  it('renders copyright with prev year', () => {
    const outputValue = `© ${prevYear}-${currentYear} | ${author}. ${license} license.`;

    render(<Copyright author={author} creationYear={prevYear} license={license} />);

    expect(screen.getByText(/license/i)).toHaveTextContent(outputValue);
  });

  it('render correctly', () => {
    const { container } = render(
      <Copyright align={'left'} author={author} creationYear={prevYear} license={license} />
    );
    expect(container).toMatchSnapshot();
  });
});
