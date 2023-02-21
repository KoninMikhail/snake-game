import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const StyledGithubLink = styled.div`
    display: grid;
    grid-template-columns: auto max-content;
    gap: ${({ theme }) => theme.gaps.md};
    align-items: center;
    padding: 0.8rem 0.8rem 0.8rem;
    background: black;

    ${up('xl')} {
        padding: 0.8vw 0.8vw 0.8vw;
    }
`;
