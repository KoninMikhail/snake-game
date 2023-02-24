import { renderWithProviders } from '@utils/test-utils';
import { BackgroundContainer } from '@templates/containers/BackgroundContainer';

describe('BackgroundContainer', () => {
    it('should equal snapshot', () => {
        const { container } = renderWithProviders(<BackgroundContainer />);
        expect(container).toMatchSnapshot();
    });
});
