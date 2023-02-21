import { screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/test-utils';
import { Launcher } from '@ui/molecules/information/Launcher/Launcher';

describe('Launcher', () => {
    const content = 'test message';

    it('should equal snapshot', () => {
        renderWithProviders(<Launcher image={{ sourceID: 'background' }} message={content} />);
        expect(screen.getByText(content)).toMatchSnapshot();
    });
});
