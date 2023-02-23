import { renderWithProviders } from '@utils/test-utils';
import { MainContainer } from '@templates/containers/MainContainer';

describe('MainContainer', () => {
    it('should equal snapshot', () => {
        const { container } = renderWithProviders(<MainContainer />);
        expect(container).toMatchSnapshot();
    });
});
