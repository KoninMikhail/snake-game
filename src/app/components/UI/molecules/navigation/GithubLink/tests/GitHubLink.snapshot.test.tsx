import { GitHubLink } from '../GitHubLink';
import { renderWithProviders } from '@utils/test-utils';

/**
 * Test
 */
describe('Github link', () => {
    const uri = 'https://github.com';
    const label = 'welcome to github';

    it('render correctly', () => {
        const { container } = renderWithProviders(<GitHubLink uri={uri} label={label} />);
        expect(container).toMatchSnapshot();
    });
});
