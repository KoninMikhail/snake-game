import { renderWithProviders } from '@utils/test-utils';
import { AppGlobalState } from '@store/slices/app.slice';
import { FooterTemplate } from '@templates/footers/Footer/FooterTemplate';

/**
 * Mocks
 */

const mockFooterProps = {
    copyright: {
        creationYear: 2021,
        author: 'noname',
        license: 'MIT',
    },
    github: {
        label: 'whatever',
        uri: 'https://github.com/',
    },
};

// fake content
const mockCopyrightContent = 'mocked CopyrightContent';

// fake component
jest.mock('@ui/molecules/information/Copyright/Copyright', () => ({
    Copyright: () => mockCopyrightContent,
}));

// fake content
const mockGitHubLink = 'mocked CopyrightContent';

// fake component
jest.mock('@ui/molecules/navigation/GithubLink/GithubLink', () => ({
    GitHubLink: () => mockGitHubLink,
}));

/**
 * Tests
 */
describe('ToolbarWithSoundControl', () => {
    it('Equals snapshot on small screens', () => {
        const preloadedState = {
            preloadedState: { app: { device: { screen: 'small' } } as AppGlobalState },
        };

        const { container } = renderWithProviders(
            <FooterTemplate {...mockFooterProps} />,
            preloadedState
        );

        expect(container).toMatchSnapshot();
    });

    it('Equals snapshot on middle screen devices', () => {
        const preloadedState = {
            preloadedState: { app: { device: { screen: 'middle' } } as AppGlobalState },
        };

        const { container } = renderWithProviders(
            <FooterTemplate {...mockFooterProps} />,
            preloadedState
        );

        expect(container).toMatchSnapshot();
    });
    it('Equals snapshot on large screen devices', () => {
        const preloadedState = {
            preloadedState: { app: { device: { screen: 'large' } } as AppGlobalState },
        };

        const { container } = renderWithProviders(
            <FooterTemplate {...mockFooterProps} />,
            preloadedState
        );

        expect(container).toMatchSnapshot();
    });
});
