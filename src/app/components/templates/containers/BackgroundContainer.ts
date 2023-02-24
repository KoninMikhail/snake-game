import styled from 'styled-components';

/**
 * @name BackgroundContainer
 * @version 1.0.0
 * @author Mikhail Konin <dev.konin@gmail.com>
 *
 * Using it for place page components
 *
 * @returns {JSX.Element}
 * @constructor
 */

export const BackgroundContainer = styled.div`
    display: grid;
    position: absolute;
    align-items: center;
    justify-content: stretch;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    bottom: 0;
`;
