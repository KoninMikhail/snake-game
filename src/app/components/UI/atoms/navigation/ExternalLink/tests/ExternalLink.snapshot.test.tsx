import { render } from '@testing-library/react';
import { ExternalLink } from '../ExternalLink';

/**
 * Tests
 */
describe('ExternalLink', () => {
    it('equal snapshot', () => {
        const { container } = render(
            <ExternalLink href="https://www.google.com/" target="_self" rel="nofollow">
                {'yeah!'}
            </ExternalLink>
        );

        expect(container).toMatchSnapshot();
    });
});
