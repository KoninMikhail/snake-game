import {render, screen} from '@testing-library/react';
import {ExternalLink} from '../ExternalLink';

/**
 * Tests
 */

describe('ExternalLink', () => {
    it('correctly render with props', () => {
        render(
            <ExternalLink href="https://www.google.com/" target="_self" rel="nofollow">
                {'yeah!'}
            </ExternalLink>
        );
        expect(screen.getByText('yeah!')).toBeInTheDocument();
        expect(screen.getByText('yeah!')).toHaveAttribute('href', 'https://www.google.com/');
        expect(screen.getByText('yeah!')).toHaveAttribute('target', '_self');
        expect(screen.getByText('yeah!')).toHaveAttribute('rel', 'nofollow');
    });
    it('correctly render without no required props', () => {
        render(<ExternalLink href={'#'}>link</ExternalLink>);
        expect(screen.getByText(/link/i)).toBeInTheDocument();
        expect(screen.getByText(/link/i)).toHaveAttribute('href', '#');
        expect(screen.getByText(/link/i)).toHaveAttribute('rel', 'noopener noreferrer');
        expect(screen.getByText(/link/i)).toHaveAttribute('target', '_blank');
    });
});
