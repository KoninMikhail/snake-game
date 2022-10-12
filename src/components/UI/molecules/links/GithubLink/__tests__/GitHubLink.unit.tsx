import { render, screen } from '@testing-library/react';
import { GitHubLink } from '../GitHubLink';

describe('Github link', () => {
  const uri = 'https://github.com';
  const label = 'welcome to github';

  it('render element with props', () => {
    render(<GitHubLink uri={uri} label={label} />);

    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', uri);
  });

  it('render correctly', () => {
    const { container } = render(<GitHubLink uri={uri} label={label} />);
    expect(container).toMatchSnapshot();
  });
});
