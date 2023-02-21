import React, {ReactElement} from 'react';
import {IconSize} from '@ui/atoms/assets/icons/Icon.types';

// ISoundControlProps
// ----------------------------------------------------------------------
export interface IIconToggle {
    state: boolean;
    iconWhenTrue: ReactElement;
    iconWhenFalse: ReactElement;
    size: IconSize;
    onClick?: (e: React.MouseEvent) => void;
}
