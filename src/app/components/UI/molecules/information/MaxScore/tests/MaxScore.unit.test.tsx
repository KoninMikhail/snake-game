import {screen} from '@testing-library/react';
import {MaxScore} from '../MaxScore';
import {renderWithProviders} from '@utils/test-utils';

/**
 * Tests
 */
describe('MaxScore', () => {
    const label = 'record:';
    const value = 30;

    it('correctly renders', () => {
        renderWithProviders(<MaxScore value={value} label={label} />);
        expect(screen.getByText(`${label} ${value}`)).toBeInTheDocument();
    });
});
