import styled from 'styled-components';

export const PrimaryButton = styled.button`
    cursor: pointer;
    display: block;
    color: ${({ theme }) => theme.colors.primary};
    border: 3px dashed ${({ theme }) => theme.colors.primary};
    padding: 5px 25px;
    background: black;
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    text-align: center;
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    font-weight: normal;

    &:hover {
        color: ${({ theme }) => theme.colors.body};
        background: ${({ theme }) => theme.colors.primary};
        border: 3px dashed ${({ theme }) => theme.colors.black};
    }
`;
