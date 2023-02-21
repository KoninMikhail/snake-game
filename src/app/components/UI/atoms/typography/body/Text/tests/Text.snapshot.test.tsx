import {Text} from '@ui/atoms/typography/body/Text/Text';
import {renderWithProviders} from '@utils/test-utils';

/**
 * Test
 */
describe('Text', () => {
    it('equal to snapshot', () => {
        const { container } = renderWithProviders(<Text align={'center'}>Arriva</Text>);

        expect(container).toMatchSnapshot();
    });
});
