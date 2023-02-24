import { screen } from '@testing-library/react';
import { GitHubLink } from '../GitHubLink';
import { renderWithProviders } from '@utils/test-utils';

/**
 * Test
 */
describe('Github link', () => {
    const uri = 'https://github.com';
    const label = 'welcome to github';

    it('corrently render element', () => {
        renderWithProviders(<GitHubLink uri={uri} label={label} />);

        expect(screen.getByText(label)).toBeInTheDocument();
        expect(screen.getByRole('link')).toHaveAttribute('href', uri);
    });
});
