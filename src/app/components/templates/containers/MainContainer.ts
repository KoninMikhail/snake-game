import styled from 'styled-components';
import { up } from 'styled-breakpoints';

/**
 * @name MainContainer
 * @version 1.0
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Use for create main content container
 *
 * @returns {JSX.Element}
 * @constructor
 */

export const MainContainer = styled.div`
    display: grid;
    position: relative;
    grid-template-rows: max-content auto max-content;
    gap: ${({ theme }) => theme.gaps.md};
    width: 100%;
    height: 100%;
    padding: 1.5em;

    ${up('md')} {
        padding: 2em;
    }

    ${up('lg')} {
        padding: 5vh 4vw;
    }
`;
