import { IBaseTheme } from '@styles/theme';

declare module 'styled-components' {
    //eslint-disable-next-line
    export interface DefaultTheme extends IBaseTheme {}
}
