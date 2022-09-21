import styled from 'styled-components';

export const StyledGameContainer = styled.div<{ size: string }>`
  display: block;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;
