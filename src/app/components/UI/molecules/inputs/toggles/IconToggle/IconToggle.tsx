import {
    IconToggleContainer,
    IconToggleIconHolder,
} from '@ui/molecules/inputs/toggles/IconToggle/style/StyledIconToggle';
import { IIconToggle } from '@ui/molecules/inputs/toggles/IconToggle/IconToggle.interface';
import { useTheme } from 'styled-components';
import { cloneElement } from 'react';
import getThemeIconSize from '@helpers/theme/getThemeIconSize';

export const IconToggle = ({ size, iconWhenTrue, iconWhenFalse, state, onClick }: IIconToggle) => {
    const theme = useTheme();
    const themeIconSizeValue = getThemeIconSize(theme, size);
    return (
        <IconToggleContainer size={themeIconSizeValue} onClick={onClick}>
            <IconToggleIconHolder visible={state}>
                {cloneElement(iconWhenTrue, { size: size })}
            </IconToggleIconHolder>
            <IconToggleIconHolder visible={!state}>
                {cloneElement(iconWhenFalse, { size: size })}
            </IconToggleIconHolder>
        </IconToggleContainer>
    );
};
