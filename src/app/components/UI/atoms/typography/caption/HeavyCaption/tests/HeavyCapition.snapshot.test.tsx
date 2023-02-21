import {HeavyCaption} from '@ui/atoms/typography/caption/HeavyCaption/HeavyCaption';
import {renderWithProviders} from '@utils/test-utils';

/**
 * Test
 */
describe('HeavyCaption', () => {
    it('equal to snapshot', () => {
        const { container } = renderWithProviders(
            <HeavyCaption align={'center'}>Arriva</HeavyCaption>
        );

        expect(container).toMatchSnapshot();
    });
});
